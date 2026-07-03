"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe, { type COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

interface GlobeState {
  phi: number
  width: number
  height: number
  ctx: CanvasRenderingContext2D
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [34 / 255, 197 / 255, 94 / 255], 
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.1 },
    { location: [1.3521, 103.8198], size: 0.06 },
    { location: [37.7749, -122.4194], size: 0.06 },
    { location: [40.7128, -74.0060], size: 0.06 },
    { location: [51.5074, -0.1278], size: 0.06 },
    { location: [35.6895, 139.6917], size: 0.06 },
    { location: [25.2048, 55.2708], size: 0.06 },
  ],
}

export function Globe({ className, config = GLOBE_CONFIG }: { className?: string; config?: COBEOptions }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false) // Local state to track actual DOM theme
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  
  const r = useMotionValue(0)
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    
    // 1. Check the initial theme immediately on mount
    setIsDark(document.documentElement.classList.contains('dark'))

    // 2. Set up a MutationObserver to watch your custom ThemeToggle changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'], // Only fire when classes change
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    let globe: { destroy: () => void } | undefined

    const onResize = () => {
      if (containerRef.current) {
        widthRef.current = containerRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        ...config,
        // Sync the globe's dark mode property to the DOM state
        dark: isDark ? 1 : 0, 
        baseColor: [1, 1, 1], // Keep dots white so they pop against the dark sphere
        // Dim the outer glow in dark mode so it doesn't blind the user
        glowColor: isDark ? [0.15, 0.15, 0.15] : [1, 1, 1], 
        width: widthRef.current * 2,
        height: widthRef.current * 2,
        onRender: (state: Record<string, unknown>) => {
          const typedState = state as unknown as GlobeState
          phiRef.current += 0.003
          typedState.phi = phiRef.current + rs.get()
          typedState.width = widthRef.current * 2
          typedState.height = widthRef.current * 2
        },
      })
      canvasRef.current.style.opacity = "1"
    }

    return () => {
      if (globe) globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config, isDark, mounted]) // Added isDark as a dependency to rebuild globe on toggle

  return (
    <div 
      ref={containerRef} 
      className={cn("relative w-full aspect-square max-w-[300px] mx-auto cursor-grab active:cursor-grabbing", className)}
    >
      <canvas
        className={cn("size-full opacity-0 transition-opacity duration-500")}
        style={{ transform: "scale(1.5)" }} 
        ref={canvasRef}
        onPointerDown={(e) => (pointerInteracting.current = e.clientX)}
        onPointerUp={() => (pointerInteracting.current = null)}
        onPointerOut={() => (pointerInteracting.current = null)}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteracting.current = e.clientX
            r.set(r.get() + delta / MOVEMENT_DAMPING)
          }
        }}
      />
    </div>
  )
}
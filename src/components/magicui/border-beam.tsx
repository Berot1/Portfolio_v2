"use client";

import { cn } from "@/lib/utils";

// Removed 'size' from the interface
interface BorderBeamProps {
  className?: string;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam = ({
  className,
  duration = 6,
  borderWidth = 1.5,
  colorFrom = "#22c55e",
  colorTo = "transparent",
}: BorderBeamProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
        className
      )}
    >
      {/* 1. Rotating gradient background (The Beam) */}
      <div
        className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 animate-spin"
        style={{
          width: "300%",
          animationDuration: `${duration}s`,
          background: `conic-gradient(from 90deg, ${colorTo}, ${colorFrom} 15%, ${colorTo} 30%)`,
        }}
      />
      
      {/* 2. Inner solid mask (Creates the hollow border cutout) */}
      <div
        className="absolute rounded-[inherit] bg-white dark:bg-zinc-950"
        style={{
          inset: `${borderWidth}px`,
        }}
      />
    </div>
  );
};
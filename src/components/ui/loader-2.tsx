"use client";
import { cn } from "@/lib/utils";

export const Component = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <style>{`
        .loader-shape {
          width: 100%;
          height: 100%;
          fill: none;
          stroke: currentColor;
          stroke-width: 8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .anim-circle {
          stroke-dasharray: 150 200;
          animation: pathCircle 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .anim-triangle {
          stroke-dasharray: 145 250;
          animation: pathTriangle 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .anim-rect {
          stroke-dasharray: 192 256;
          animation: pathRect 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes pathCircle {
          25% { stroke-dashoffset: 125; }
          50% { stroke-dashoffset: 175; }
          75% { stroke-dashoffset: 225; }
          100% { stroke-dashoffset: 275; }
        }
        @keyframes pathTriangle {
          33% { stroke-dashoffset: 74; }
          66% { stroke-dashoffset: 147; }
          100% { stroke-dashoffset: 221; }
        }
        @keyframes pathRect {
          25% { stroke-dashoffset: 64; }
          50% { stroke-dashoffset: 128; }
          75% { stroke-dashoffset: 192; }
          100% { stroke-dashoffset: 256; }
        }
      `}</style>

      {/* Circle */}
      <div className="w-5 h-5 text-zinc-900 dark:text-zinc-100">
        <svg viewBox="0 0 80 80" className="loader-shape">
          <circle r="32" cy="40" cx="40" className="anim-circle" />
        </svg>
      </div>

      {/* Triangle */}
      <div className="w-5 h-5 text-zinc-900 dark:text-zinc-100">
        <svg viewBox="0 0 86 80" className="loader-shape">
          <polygon points="43 8 79 72 7 72" className="anim-triangle" />
        </svg>
      </div>

      {/* Rectangle */}
      <div className="w-5 h-5 text-zinc-900 dark:text-zinc-100">
        <svg viewBox="0 0 80 80" className="loader-shape">
          <rect height="64" width="64" y="8" x="8" className="anim-rect" />
        </svg>
      </div>
    </div>
  );
};
"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

interface ThemeToggleProps extends React.ComponentPropsWithoutRef<"div"> {
  duration?: number;
}

export default function ThemeToggle({
  className,
  duration = 600,
  ...props
}: ThemeToggleProps) {
  const [currentMode, setCurrentMode] = useState<"light" | "dark" | "system">("system");

  // Wrap helpers in useCallback to satisfy dependency rules
  const getResolvedTheme = useCallback((mode: "light" | "dark" | "system"): "light" | "dark" => {
    if (mode === "dark") return "dark";
    if (mode === "light") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, []);

  const applyTheme = useCallback((mode: "light" | "dark" | "system") => {
    const resolved = getResolvedTheme(mode);
    if (resolved === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [getResolvedTheme]);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentMode(isDark ? "dark" : "light");
  }, []);

  const handleThemeChange = useCallback((newMode: "light" | "dark" | "system", event: React.MouseEvent<HTMLButtonElement>) => {
    const currentResolved = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const targetResolved = getResolvedTheme(newMode);

    if (currentResolved === targetResolved) {
      setCurrentMode(newMode);
      return;
    }

    if (!document.startViewTransition) {
      applyTheme(newMode);
      setCurrentMode(newMode);
      return;
    }

    const button = event.currentTarget;
    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        applyTheme(newMode);
        setCurrentMode(newMode);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, [duration, getResolvedTheme, applyTheme]);

  const options = [
    { name: "system", icon: Monitor },
    { name: "light", icon: Sun },
    { name: "dark", icon: Moon },
  ] as const;

  return (
    <div 
      className={cn("flex items-center p-0.5 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 w-fit", className)}
      {...props}
    >
      {options.map((option) => {
        const isActive = currentMode === option.name;
        const Icon = option.icon;

        return (
          <button
            key={option.name}
            type="button"
            onClick={(e) => handleThemeChange(option.name, e)}
            className={cn(
              "w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300",
              isActive 
                ? "bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" 
                : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
            )}
            aria-label={`Switch to ${option.name} theme`}
          >
            <Icon className="w-2.5 h-2.5" />
          </button>
        );
      })}
    </div>
  );
}
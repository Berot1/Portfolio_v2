"use client";

import { useTheme } from "next-themes";
import { useEffect} from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      // Component mounted
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-yellow-400 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden group"
      aria-label="Toggle Dark Mode"
    >
      {/* Sun Icon Logic */}
      <Sun 
        className={`w-5 h-5 absolute transition-all duration-500 ease-spring ${
          theme === "dark" ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100 rotate-0"
        } group-hover:rotate-45`} 
      />
      
      {/* Moon Icon Logic */}
      <Moon 
        className={`w-5 h-5 absolute transition-all duration-500 ease-spring ${
          theme === "dark" ? "translate-y-0 opacity-100 rotate-0" : "-translate-y-10 opacity-0"
        } group-hover:-rotate-12`} 
      />

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zinc-100/50 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
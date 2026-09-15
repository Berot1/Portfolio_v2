"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { Mail, Activity, MapPin } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Terminal from "@/components/Terminal";
import Chat from "@/components/Chat";

export default function Sidebar() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false, timeZoneName: 'short' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { id: "00", label: "OVERVIEW", href: "#overview" },
    { id: "01", label: "ABOUT", href: "#about" },
    { id: "02", label: "TECH STACK", href: "#tech-stack" },
    { id: "03", label: "PROJECTS", href: "#projects" },
    { id: "04", label: "EXPERIENCE", href: "#experience" },
    { id: "05", label: "CERTIFICATIONS", href: "#certifications" },
    { id: "06", label: "CONNECT", href: "#connect" },
  ];

  return (
    <>
      <div className="flex flex-col h-full font-mono justify-between">
        
        {/* --- TOP: Fixed Profile --- */}
        <div className="p-6 md:p-8 pb-2 shrink-0 space-y-4 flex flex-col items-center text-center">
          <div className="relative w-20 h-20 overflow-hidden border border-zinc-900 dark:border-zinc-100">
            <Image
              src="/image/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-widest">
              COMPUTER ENGINEER
            </p>
          </div>
        </div>

        {/* --- MIDDLE: Scrollable Navigation with Fixed Shorthand & overflow-x-hidden --- */}
        <div className="px-6 md:px-8 py-2">
          <div className="h-[210px] overflow-y-scroll overflow-x-hidden nav-scrollbar pr-3 py-1">
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="group flex items-center gap-3 text-xs text-[#5f748d] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                >
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    [{link.id}]
                  </span>
                  <span className="tracking-widest font-medium uppercase">{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* --- BOTTOM: Fixed Utilities (Ask Anything & Sandbox) --- */}
        <div className="p-6 md:p-8 pt-2 shrink-0 space-y-6">
          <div className="space-y-4">
            <Chat />
            
            <button
              onClick={() => setIsTerminalOpen((prev) => !prev)}
              className="flex items-center justify-between w-full text-[13px] font-sans text-[#8a99a8] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors group"
            >
              <span className="whitespace-nowrap">Sandbox OS</span>
              
              <div className="flex items-center gap-1.5 shrink-0 text-zinc-400 dark:text-zinc-500">
                <kbd className="font-sans px-1.5 py-0.5 border border-zinc-200 dark:border-zinc-700 rounded-md text-[11px] bg-white dark:bg-[#09090b] shadow-sm leading-none flex items-center justify-center min-w-[26px]">Alt</kbd>
                <span className="text-[10px] font-sans">+</span>
                <kbd className="font-sans px-1.5 py-0.5 border border-zinc-200 dark:border-zinc-700 rounded-md text-[11px] bg-white dark:bg-[#09090b] shadow-sm leading-none flex items-center justify-center min-w-[18px]">J</kbd>
              </div>
            </button>
          </div>

          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/60 space-y-5">
            <div className="flex items-center justify-between">
              <ThemeToggle className="rounded-none border-zinc-300 dark:border-zinc-700 scale-90 origin-left" />
              <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest">
                <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
                <span>{currentTime || "LOADING..."}</span>
              </div>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest">
                <MapPin className="w-3 h-3" />
                <span>PH // CEBU_CITY</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-[10px] text-zinc-900 dark:text-zinc-100 hover:text-blue-500 uppercase tracking-widest transition-colors"
              >
                <Mail className="w-3 h-3" />
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
}
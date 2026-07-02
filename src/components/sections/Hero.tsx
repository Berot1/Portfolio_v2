"use client";
import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolio';
import { MapPin, BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

export default function Hero() {
  // Split the role string by " \\ " to create an array for rotation
  const roles = personalInfo.role.split(" \\ ");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Rotates every 3 seconds
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
      {/* Profile Image */}
      <div className="shrink-0">
        <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-2 ring-zinc-100 dark:ring-zinc-800 shadow-xl">
          <Image 
            src="/image/profile.jpg" 
            alt={personalInfo.name} 
            fill 
            className="object-cover transition-transform duration-500 hover:scale-110" 
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 w-full text-center sm:text-left">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center justify-center sm:justify-start gap-2">
            {personalInfo.name}
            <BadgeCheck className="w-6 h-6 text-blue-500" strokeWidth={2.5} />
          </h1>
          
          {/* Animated Role Rotation */}
          <div className="h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl text-zinc-600 dark:text-zinc-400 font-medium"
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3 mt-2">
            <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500">
              <MapPin className="w-4 h-4" /> 
              {personalInfo.location}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex w-fit items-center justify-center overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to work
                </span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
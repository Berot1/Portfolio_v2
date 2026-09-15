"use client";

import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolio';
import { MapPin, BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const roles = personalInfo.role.split(" \\ ");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 pb-10 border-b border-zinc-200/60 dark:border-white/5 w-full"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 flex-1">
        {/* Profile Image - Hidden on Desktop (md), visible on Mobile */}
        <div className="shrink-0 md:hidden">
          <div className="relative w-32 h-32 overflow-hidden bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/image/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="w-full text-center sm:text-left mt-2 font-mono">
          <div className="space-y-1.5">
            <div className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">[00 // OVERVIEW]</div>
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center justify-center sm:justify-start gap-2 mb-3">
              {personalInfo.name}
              <BadgeCheck className="w-5 h-5 text-blue-500/80 shrink-0" strokeWidth={2} />
            </h1>
            
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 tracking-wider uppercase"
                >
                  {roles[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-zinc-400 dark:text-zinc-500 tracking-wider mt-4 uppercase">
              <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
              {personalInfo.location}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
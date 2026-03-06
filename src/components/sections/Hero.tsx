import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { MapPin, Mail, Calendar, ChevronRight, BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
      
      {/* Profile Image - Reduced size for a more compact look */}
      <div className="shrink-0">
        <div className="mt-2 group w-24 h-24 md:w-35 md:h-35 rounded-lg overflow-hidden relative border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 cursor-pointer">
          <Image 
            src="/image/profile.jpg" 
            alt={personalInfo.name} 
            fill 
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]" 
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 w-full md:pt-1">
        <div className="flex justify-between items-start gap-3">
          {/* Reduced vertical spacing from space-y-4 to space-y-2.5 */}
          <div className="space-y-2.5">
            
            {/* Name & Location */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                {personalInfo.name}
                <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 fill-blue-500 text-white dark:text-black" strokeWidth={1.5}/>
              </h1>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mt-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" /> 
                {personalInfo.location}
              </p>
            </div>

            {/* Role Title */}
            <p className="text-base text-zinc-800 dark:text-zinc-200 font-medium leading-snug">
              {personalInfo.role}
            </p>

            {/* Action Buttons - Reduced padding and made text slightly tighter */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button className="flex items-center justify-between gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  Schedule Call
                </div>
                <ChevronRight className="w-3.5 h-3.5 sm:ml-2" />
              </button>
              
              <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors w-full sm:w-auto">
                <Mail className="w-3.5 h-3.5" />
                Email
              </a>
            </div>

          </div>

          {/* Theme Toggle - Aligned to the far right */}
          <div className="shrink-0 hidden md:block">
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile Theme Toggle - Shown below content on small screens */}
        <div className="mt-4 md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}
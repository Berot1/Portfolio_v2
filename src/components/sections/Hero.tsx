import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { MapPin, BadgeCheck, } from 'lucide-react';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle';

export default function Hero() {
  return (
    <section className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
      {/* Profile Image - Circle Treatment */}
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
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
          <div className="space-y-2">
            
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center justify-center sm:justify-start gap-2">
              {personalInfo.name}
              <BadgeCheck className="w-6 h-6 text-blue-500" strokeWidth={2.5} />
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
              {personalInfo.role}
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-sm text-zinc-500 dark:text-zinc-500 mt-2">
              <MapPin className="w-4 h-4" /> 
              {personalInfo.location}
            </div>
          </div>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* Mobile-only Theme Toggle */}
      <div className="sm:hidden w-full flex justify-center">
        <ThemeToggle />
      </div>
    </section>
  );
}
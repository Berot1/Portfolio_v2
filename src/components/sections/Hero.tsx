import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { MapPin, Mail, Calendar, ChevronRight, BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
      
      {/* Profile Image */}
      <div className="shrink-0">
        <div className="group w-32 h-32 md:w-48 md:h-48 rounded-sm overflow-hidden relative border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 cursor-pointer">
          <Image 
            src="/image/profile.jpg" 
            alt={personalInfo.name} 
            fill 
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-103" 
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 w-full md:pt-2">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-4">
            
            {/* Name & Location */}
            <div>
              <h1 className="text-3xl md:text-3xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                {personalInfo.name}
                {/* Verified Badge styling to match the reference */}
                <BadgeCheck className="w-4 h-4 fill-blue-500 text-white dark:text-black" strokeWidth={1.5}/>
              </h1>
              <p className="text-zinc-900 dark:text-zinc-200 flex items-center gap-1.5 mt-2 font-small">
                <MapPin className="w-4 h-4 text-zinc-600 dark:text-zinc-400" /> 
                {personalInfo.location}
              </p>
            </div>

            {/* Role Title */}
            <p className="text-lg md:text-1xl text-zinc-900 dark:text-zinc-100 font-medium">
              {personalInfo.role}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="flex items-center justify-between gap-3 bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded text-sm font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule a Call
                </div>
                <ChevronRight className="w-4 h-4 sm:ml-4" />
              </button>
              
              <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-5 py-3 rounded text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors w-full sm:w-auto">
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>

          </div>

          {/* Theme Toggle - Aligned to the far right */}
          <div className="shrink-0 hidden md:block">
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile Theme Toggle - Shown below content on small screens */}
        <div className="mt-6 md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}
// app/experience/page.tsx
import React from 'react';
import { experience } from '@/data/portfolio';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <main className="max-w-[850px] mx-auto flex flex-col gap-10">
      
      {/* Header Section */}
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors uppercase mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
        <div className="flex items-center gap-3 font-mono border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
          <span className="text-xs text-zinc-400 dark:text-zinc-500">[04]</span>
          <h1 className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold tracking-widest uppercase">
            Experience
          </h1>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-zinc-100 dark:border-zinc-800/60 ml-4 md:ml-6 space-y-12 pb-12">
        {experience.map((item, index) => {
          const isHighlighted = 'highlight' in item && item.highlight === true;
          
          return (
            <div key={index} className="relative pl-8 md:pl-12 group">
              
              {/* Premium Timeline Node */}
              <div 
                className={`absolute -left-[11px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-[#09090b] border-[4px] ring-4 ring-white dark:ring-black transition-colors duration-300 
                ${isHighlighted 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' 
                  : 'border-zinc-300 dark:border-zinc-700 group-hover:border-blue-500'}`}
              >
                {isHighlighted && (
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                )}
              </div>

              {/* Content Block */}
              <div className="flex flex-col gap-4">
                
                {/* Header & Meta */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 mt-0.5">
                  <div>
                    <h2 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-500 transition-colors duration-300">
                      {item.role}
                    </h2>
                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                      {item.company}
                    </div>
                  </div>
                  
                  {/* Pill-shaped Date Badge */}
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400 tracking-widest uppercase shrink-0">
                    {item.year}
                  </div>
                </div>

                {/* Achievements Card */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-2 p-5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 shadow-sm">
                    <ul className="space-y-3.5">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-[13px] md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                          {/* Clean circular bullet point */}
                          <span className="shrink-0 flex items-center justify-center w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 mt-2 group-hover:bg-blue-400 dark:group-hover:bg-blue-500 transition-colors duration-300" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </main>
  );
}
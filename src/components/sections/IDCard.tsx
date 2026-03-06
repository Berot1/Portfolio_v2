import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { Cpu, Activity } from 'lucide-react';

export default function IDCard() {
  // Mock barcode pattern for the bottom of the card
  const barcode = [1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0];

  // Split name for stylistic rendering
  const firstName = personalInfo.name.split(' ')[0];
  const lastName = personalInfo.name.split(' ').slice(1).join(' ');

  return (
    <div className="w-full h-full">
      {/* Card Container */}
      <div className="bg-white dark:bg-zinc-900 rounded-sm p-6 flex flex-col justify-between relative overflow-hidden transition-colors border border-zinc-200 dark:border-zinc-800 h-full min-h-[340px]">
        
        {/* Subtle background copper/amber glow for a hardware vibe */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Section - "Badge clip" and header */}
        <div className="flex justify-between items-start relative z-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 tracking-widest uppercase mb-1">
              Authorized Access
            </span>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-orange-600 dark:text-orange-500" />
              <span className="text-xs font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">CpE.HDW</span>
            </div>
          </div>
          
          {/* Lanyard Hole Mockup */}
          <div className="w-12 h-2.5 rounded-full bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-inner"></div>
        </div>

        {/* Middle Section - Identity */}
        <div className="relative z-10 mt-20 mb-8">
          
          
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
            {firstName} <br />
            <span className="text-orange-600 dark:text-orange-500">{lastName}</span>
          </h2>
          
          <div className="mt-4 border-l-2 border-orange-500 pl-3">
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
              Computer Engineer <br/>
              <span className="text-zinc-500 dark:text-zinc-400">Hardware & Embedded Systems</span>
            </p>
          </div>
        </div>

        {/* Bottom Section - Barcode and Security elements */}
        <div className="relative z-10 flex justify-between items-end mt-auto pt-5 border-t border-zinc-100 dark:border-zinc-800/50">
          <div>
            <p className="text-[9px] text-zinc-400 dark:text-zinc-500 tracking-widest uppercase mb-2 font-mono">
              UID // 0xHW892A
            </p>
            <div className="flex gap-[2px] h-6 opacity-80">
                {barcode.map((val, i) => (
                  <div 
                    key={i} 
                    className={`h-full ${val ? 'w-1.5 bg-zinc-800 dark:bg-zinc-200' : 'w-0.5 bg-transparent'} rounded-[1px]`}
                  ></div>
                ))}
            </div>
          </div>

          <Activity className="w-8 h-8 text-orange-500 dark:text-zinc-700 opacity-60" strokeWidth={1.5} />
        </div>
        
      </div>
    </div>
  );
}
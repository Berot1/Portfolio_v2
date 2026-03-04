import React from 'react';
import { personalInfo } from '@/data/portfolio';

export default function IDCard() {
  const qrPattern = [
    1, 0, 1, 1,
    0, 1, 0, 1,
    1, 1, 0, 0,
    0, 1, 1, 0
  ];

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-800 dark:to-black rounded-2xl p-8 text-zinc-900 dark:text-white aspect-auto sm:aspect-[3/4] flex flex-col justify-between shadow-lg relative overflow-hidden transition-colors border border-zinc-200 dark:border-zinc-800">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 dark:bg-white/5 rounded-full blur-3xl"></div>

        <div className="space-y-6 relative z-10 mb-12 sm:mb-0">
          <div className="w-8 h-8 font-mono text-2xl font-bold text-blue-600 dark:text-blue-400">&gt;_</div>
          <div>
            <h3 className="text-xl font-bold tracking-widest">IOT INNOVATOR</h3>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest mt-1 uppercase">Access Card</p>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase mb-1">Founding Member</p>
          <h2 className="text-2xl font-bold uppercase tracking-wider">{personalInfo.name.split(' ')[0]}</h2>
          
          <div className="flex justify-between items-end mt-8 sm:mt-12">
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">Developer</p>
            <div className="grid grid-cols-4 gap-0.5 opacity-60">
               {qrPattern.map((val, i) => (
                 <div key={i} className={`w-1.5 h-1.5 ${val ? 'bg-zinc-800 dark:bg-white' : 'bg-transparent'}`}></div>
               ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-3 text-white flex justify-between items-center shadow-md">
        <div className="font-bold text-sm tracking-tight">
          I&apos;M PART OF <br/><span className="text-xl">TECH100</span>
        </div>
        <div className="text-[9px] text-right opacity-90 max-w-[120px]">
          The annual list of top tech minds in the region
        </div>
      </div>
    </div>
  );
}
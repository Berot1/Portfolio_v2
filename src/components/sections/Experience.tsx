import React from 'react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section className="space-y-4"> {/* Reduced from space-y-6 */}
      <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-700 dark:text-zinc-400 uppercase">
        <span>02</span>
        <span> </span>
        <span>experience</span>
      </div>
                    
      <div className="space-y-4"> {/* Reduced item spacing from space-y-6 */}
        {experience.map((item, index) => (
          <div 
             key={index} 
             className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-zinc-100 dark:border-white/5 last:border-0 last:pb-0 transition-colors"
          >
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {item.role}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-light">
                {item.company}
              </p>
            </div>
                         
            <span className="shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
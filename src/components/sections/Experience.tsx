import React from 'react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Experience</h2>
      
      <div className="relative mt-4">
        {/* Continuous Vertical Timeline Line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-zinc-100 dark:bg-zinc-800"></div>
        
        <div className="space-y-6">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-6 group cursor-default">
              
              {/* Square Node */}
              <div 
                className={`absolute left-0 top-1.5 w-3 h-3 rounded-[2px] z-10 transition-colors duration-300 ${
                  item.highlight 
                    ? 'bg-zinc-900 dark:bg-zinc-100 border-2 border-zinc-900 dark:border-zinc-100' 
                    : 'bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-700 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 group-hover:border-zinc-900 dark:group-hover:border-zinc-100'
                }`}
              />
              
              {/* Content */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  {/* Role Title */}
                  <h3 className={`font-bold text-base leading-tight transition-colors duration-300 ${
                    item.highlight
                      ? 'text-zinc-900 dark:text-white'
                      : 'text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white'
                  }`}>
                    {item.role}
                  </h3>
                  {/* Company Name */}
                  <p className={`text-sm mt-1 transition-colors duration-300 ${
                    item.highlight
                      ? 'text-zinc-700 dark:text-zinc-300'
                      : 'text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300'
                  }`}>
                    {item.company}
                  </p>
                </div>
                
                {/* Year Badge */}
                <span className={`shrink-0 text-[10px] font-medium px-2 py-1 rounded tracking-wide transition-colors duration-300 ${
                  item.highlight
                    ? 'text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800'
                    : 'text-zinc-500 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-900 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800'
                }`}>
                  {item.year}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
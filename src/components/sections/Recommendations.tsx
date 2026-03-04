import React from 'react';
import { recommendations } from '@/data/portfolio';

export default function Recommendations() {
  const rec = recommendations[0]; 

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Recommendations</h2>
      
      <div className="space-y-5 pt-1">
        <p className="text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed">
          “{rec.quote}”
        </p>
        
        <div>
          <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{rec.name}</h4>
          <p className="text-xs text-zinc-500 mt-0.5">{rec.role}</p>
        </div>

        {/* Square Carousel Dots matching the image */}
        <div className="flex gap-1.5 pt-2">
          <div className="w-1.5 h-1.5 bg-zinc-800 dark:bg-zinc-200"></div>
          <div className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-800"></div>
        </div>
      </div>
    </section>
  );
}
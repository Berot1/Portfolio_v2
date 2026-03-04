import React from 'react';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Recent Certifications</h2>
        <span className="text-sm text-zinc-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors">View All &gt;</span>
      </div>
      
      <div className="flex flex-col">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="px-4 py-3 bg-zinc-50/80 dark:bg-zinc-900/40 even:bg-zinc-100/80 dark:even:bg-zinc-800/40 first:rounded-t-lg last:rounded-b-lg"
          >
            <h3 className="font-bold text-zinc-900 dark:text-white text-sm">{cert.title}</h3>
            <p className="text-xs text-zinc-500 mt-0.5">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
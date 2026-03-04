import React from 'react';
import { techStack } from '@/data/portfolio';

export default function TechStack() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Tech Stack</h2>
        <span className="text-sm text-zinc-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors">View All &gt;</span>
      </div>
      
      <div className="space-y-6">
        {Object.entries(techStack).map(([category, technologies]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white capitalize">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-zinc-50 dark:bg-transparent border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
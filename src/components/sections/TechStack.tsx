import React from 'react';
import { techStack } from '@/data/portfolio';
import Link from 'next/link';

export default function TechStack() {
  const displayedStack = Object.entries(techStack).slice(0, 3);
  return (
    <section className="space-y-6 font-mono">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs tracking-widest text-zinc-700 dark:text-zinc-400 uppercase">
          <span>02</span>
          <span>—</span>
          <span>tech stack</span>
        </div>
        <Link 
          href="/tech-stack" 
          className="text-xs font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors tracking-wide"
        >
          View All &rarr;
        </Link>
      </div>
      
      <div className="space-y-6">
        {displayedStack.map(([category, technologies]) => (
          <div key={category} className="space-y-2">
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/5 text-xs text-zinc-700 dark:text-zinc-300 rounded"
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
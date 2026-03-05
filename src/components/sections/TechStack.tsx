import React from 'react';
import { techStack } from '@/data/portfolio';
import Link from 'next/link';

export default function TechStack() {
  // Only take the first 3 categories (rows) from the object
  const displayedStack = Object.entries(techStack).slice(0, 3);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black dark:text-white">Tech Stack</h2>
        {/* Changed to a Next.js Link to navigate to a new page */}
        <Link 
          href="/tech-stack" 
          className="text-sm text-zinc-600 hover:text-black dark:hover:text-white transition-colors"
        >
          View All &gt;
        </Link>
      </div>
      
      <div className="space-y-6">
        {displayedStack.map(([category, technologies]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white capitalize">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-white dark:bg-transparent border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-800 dark:text-zinc-200 rounded-sm"
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
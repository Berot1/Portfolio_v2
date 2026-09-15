import React from 'react';
import { techStack } from '@/data/portfolio';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TechStackPage() {
  return (
    <main className="max-w-[1000px] mx-auto flex flex-col gap-10">
      
      {/* Header section matching monospace aesthetic */}
      <div className="mb-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors uppercase mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
        <div className="flex items-center gap-3 font-mono border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
          <span className="text-xs text-zinc-400 dark:text-zinc-500">[02]</span>
          <h1 className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold tracking-widest uppercase">
            Tech Stack
          </h1>
        </div>
      </div>

      {/* Full Tech Stack Grid */}
      <div className="space-y-10">
        {Object.entries(techStack).map(([category, technologies]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider">
              {category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/5 text-xs font-mono text-zinc-700 dark:text-zinc-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
       
    </main>
  );
}
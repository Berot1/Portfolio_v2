import React from 'react';
import { techStack } from '@/data/portfolio';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TechStackPage() {
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-16 flex flex-col gap-10">
      
      {/* Header section matching your design */}
      <div className="flex items-center gap-4">
        <Link 
          href="/" 
          className="flex items-center mt-0.5 gap-2 text-zinc-600 hover:text-black dark:hover:text-white transition-colors text-md font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-3xl font-bold text-black dark:text-white">
          Tech Stack
        </h1>
      </div>

      {/* Full Tech Stack Grid */}
      <div className="space-y-10">
        {Object.entries(techStack).map(([category, technologies]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white capitalize">
              {category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-800 dark:text-zinc-200 rounded-sm hover:shadow-md transition-shadow cursor-default"
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
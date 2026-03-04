import React from 'react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black dark:text-white">Recent Projects</h2>
        <span className="text-sm text-zinc-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors">View All &gt;</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a key={index} href={`https://${project.link}`} target="_blank" rel="noreferrer" className="block p-5 rounded-xl bg-zinc-50 dark:bg-black hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors border border-transparent dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700">
            <h3 className="font-bold text-black dark:text-white mb-2">{project.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{project.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="inline-block px-2 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 rounded font-mono">
                {project.link}
              </span>
              {project.tags && (
                <div className="flex gap-1">
                   {project.tags.slice(0, 2).map((tag, i) => (
                     <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">
                       {tag}
                     </span>
                   ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
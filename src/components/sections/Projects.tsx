import React from 'react';
import { projects } from '@/data/portfolio';

const CARD_BASE = "block p-5 rounded-xl transition-colors border";
const CARD_LIGHT = "bg-zinc-50 border-transparent hover:bg-zinc-100 hover:border-zinc-200";
const CARD_DARK = "dark:bg-black dark:border-zinc-800 dark:hover:bg-zinc-900/50 dark:hover:border-zinc-700";

export default function Projects() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black dark:text-white">Recent Projects</h2>
        <a 
          href="#projects" 
          className="text-sm text-zinc-600 hover:text-black dark:hover:text-white transition-colors"
          aria-label="View all projects"
        >
          View All &gt;
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="projects">
        {projects.map((project) => (
          <a 
            key={`${project.title}-${project.link}`}
            href={`https://${project.link}`} 
            target="_blank" 
            rel="noreferrer" 
            className={`${CARD_BASE} ${CARD_LIGHT} ${CARD_DARK}`}
            aria-label={`View ${project.title} project`}
          >
            <div className="flex flex-col h-full">
              <h3 className="font-bold text-black dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 flex-grow">
                {project.description}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <span className="inline-block px-2 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 rounded font-mono truncate mr-2">
                  {project.link}
                </span>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex gap-1 flex-wrap justify-end">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
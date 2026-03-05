import React from 'react';
import { projects } from '@/data/portfolio';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const CARD_BASE = "block p-5 rounded-sm transition-all border h-full cursor-pointer hover:shadow-sm";
const CARD_LIGHT = "bg-white border-zinc-100 hover:bg-zinc-50 hover:border-zinc-300";
const CARD_DARK = "dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800/50 dark:hover:border-zinc-600";

export default function ProjectsPage() {
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-16 flex flex-col gap-10">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link 
          href="/" 
          className="flex items-center mt-0.5 gap-2 text-zinc-600 hover:text-black dark:hover:text-white transition-colors text-md font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-3xl font-bold text-black dark:text-white">
          All Projects
        </h1>
      </div>

      {/* Full Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
                <span className="inline-block px-2 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 rounded font-mono truncate mr-2">
                  {project.link}
                </span>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex gap-1 flex-wrap justify-end">
                    {/* Maps all tags instead of slicing to 2 like the homepage */}
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-bold text-sinc-600 dark:text-sinc-400 bg-sinc-50 dark:bg-sinc-900/30 px-1.5 py-0.5 rounded whitespace-nowrap"
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
      
    </main>
  );
}
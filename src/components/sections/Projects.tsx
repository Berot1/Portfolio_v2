import React from 'react';
import { projects } from '@/data/portfolio';
import Link from 'next/link';
import { Github, ExternalLink, Eye } from 'lucide-react';

const CARD_BASE = "block p-5 rounded-sm transition-all border h-full cursor-pointer hover:shadow-sm";
const CARD_LIGHT = "bg-white border-zinc-100 hover:bg-zinc-50 hover:border-zinc-300";
const CARD_DARK = "dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800/50 dark:hover:border-zinc-600";

// Helper function to determine label and icon based on URL
const getLinkDetails = (url: string) => {
  if (url.includes('github.com')) return { label: 'source', Icon: Github };
  if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)) return { label: 'view', Icon: Eye };
  return { label: 'live', Icon: ExternalLink };
};

export default function Projects() {
  // Limit to 4 items for a maximum 2x2 grid on the homepage
  const displayedProjects = projects.slice(0, 4);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black dark:text-white">Recent Projects</h2>
        <Link 
          href="/projects" 
          className="text-sm text-zinc-600 hover:text-black dark:hover:text-white transition-colors"
          aria-label="View all projects"
        >
          View All &gt;
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="projects">
        {displayedProjects.map((project) => {
          const { label, Icon } = getLinkDetails(project.link);
          
          return (
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
                <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
                  
                  {/* Dynamic Link Label Badge with Icon */}
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 rounded mr-2 shrink-0">
                    <Icon className="w-3 h-3" />
                    {label}
                  </span>
                  
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex gap-1 flex-wrap justify-end">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="text-[10px] uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/30 px-1.5 py-0.5 rounded whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
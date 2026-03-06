import React from 'react';
import { projects } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Image as ImageIcon, Github, ExternalLink, Eye } from 'lucide-react';

const CARD_BASE = "block rounded-sm transition-all border h-full cursor-pointer hover:shadow-sm overflow-hidden group flex flex-col";
const CARD_LIGHT = "bg-white border-zinc-100 hover:bg-zinc-50 hover:border-zinc-300";
const CARD_DARK = "dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800/50 dark:hover:border-zinc-600";

type ProjectWithImage = typeof projects[number] & { image?: string };

// Helper function to determine label and icon based on URL
const getLinkDetails = (url: string) => {
  if (url.includes('github.com')) return { label: 'source', Icon: Github };
  if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)) return { label: 'view', Icon: Eye };
  return { label: 'live', Icon: ExternalLink };
};

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
        {projects.map((p) => {
          const project = p as ProjectWithImage;
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
              {/* Image Container */}
              <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-800/50 border-b border-zinc-100 dark:border-zinc-800 shrink-0">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={`${project.title} thumbnail`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-300 dark:text-zinc-700">
                    <ImageIcon className="w-8 h-8 opacity-50" />
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="flex flex-col h-full p-5 flex-grow">
                <h3 className="font-bold text-black dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Footer Section (Tags and Link Label) */}
                <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
                  
                  {/* Dynamic Link Label Badge with Icon */}
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 rounded mr-2">
                    <Icon className="w-3 h-3" />
                    {label}
                  </span>
                  
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex gap-1 flex-wrap justify-end">
                      {project.tags.map((tag) => (
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
      
    </main>
  );
}
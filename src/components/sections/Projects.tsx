import React from 'react';
import { projects } from '@/data/portfolio';
import { Github, ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const getLinkDetails = (url: string) => {
  if (url.includes('github.com')) return { label: 'SOURCE', Icon: Github };
  if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)) return { label: 'MEDIA', Icon: Eye };
  return { label: 'LIVE', Icon: ExternalLink };
};

export default function Projects() {
  const displayedProjects = projects.slice(0, 3);

  const getInclineStyles = (i: number) => {
    if (i === 0) return "md:rotate-[-6deg] md:translate-y-4 z-10 origin-bottom-right hover:rotate-[-2deg] hover:-translate-y-2 hover:-translate-x-4 hover:z-30";
    if (i === 1) return "md:translate-y-16 z-20 shadow-xl dark:shadow-none hover:-translate-y-4 hover:scale-[1.02] hover:z-30";
    if (i === 2) return "md:rotate-[6deg] md:translate-y-4 z-10 origin-bottom-left hover:rotate-[2deg] hover:-translate-y-2 hover:translate-x-4 hover:z-30";
    return "";
  };

  return (
    // Tightened the negative spacing (-space-x-10) and padding to match the smaller cards
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 md:-space-x-10 lg:-space-x-12 py-8 md:py-12 font-mono">
      {displayedProjects.map((project, index) => {
        const { label, Icon } = getLinkDetails(project.link);

        return (
          <a
            key={`${project.title}-${project.link}`}
            href={`https://${project.link}`}
            target="_blank"
            rel="noreferrer"
            // Scaled down max-width from 260px to 220px
            className={`group w-full max-w-[220px] shrink-0 flex flex-col bg-zinc-50 dark:bg-[#09090b] border border-zinc-300 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer relative rounded-sm overflow-hidden ${getInclineStyles(index)}`}
          >
            {/* Fake Terminal Window Header - COMPACT */}
            <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-zinc-300 dark:border-zinc-800 bg-zinc-200/50 dark:bg-zinc-900/50">
               <div className="flex gap-1">
                 <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600"></span>
                 <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600"></span>
               </div>
               <span className="text-[7px] text-zinc-500 tracking-widest uppercase">
                 [{project.category || "EXE"}]
               </span>
            </div>

            {/* Edge-to-Edge Banner Image - COMPACT (h-20 instead of h-28) */}
            <div className="relative w-full h-20 border-b border-zinc-300 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex shrink-0 items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="220px"
                />
              ) : (
                <span className="text-zinc-400 font-mono text-[9px] tracking-widest uppercase">
                  &lt;NO_IMG /&gt;
                </span>
              )}
            </div>

            {/* Content Body - COMPACT Padding (p-3 instead of p-4) */}
            <div className="p-3 flex flex-col flex-1">
              {/* Technical Monospace Tags */}
              <div className="flex flex-wrap items-center gap-1 mb-2 text-[8px] uppercase tracking-widest text-zinc-500">
                {project.tags?.slice(0, 2).map((tag, i) => (
                  <span key={i} className="whitespace-nowrap">
                    {i > 0 && <span className="mr-1 text-zinc-300 dark:text-zinc-700">/</span>}
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1.5 group-hover:text-blue-500 transition-colors truncate">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[9px] text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-4 font-sans">
                {project.description}
              </p>

              {/* Minimalist Footer CTA */}
              <div className="mt-auto flex items-center justify-between pt-2 border-t border-dashed border-zinc-300 dark:border-zinc-800">
                <div className="flex items-center gap-1 text-[9px] font-bold tracking-wider text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors uppercase">
                  <Icon className="w-3 h-3" />
                  <span>{label}</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
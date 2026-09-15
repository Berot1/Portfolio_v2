import React from 'react';
import { projects } from '@/data/portfolio';
import { Github, ExternalLink, Eye, ArrowUpRight } from 'lucide-react';

const getLinkDetails = (url: string) => {
  if (url.includes('github.com')) return { label: 'source', Icon: Github };
  if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)) return { label: 'view', Icon: Eye };
  return { label: 'live', Icon: ExternalLink };
};

export default function Projects() {
  const displayedProjects = projects.slice(0, 3);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
      {displayedProjects.map((project) => {
        const { label, Icon } = getLinkDetails(project.link);
        return (
          <a
            key={`${project.title}-${project.link}`}
            href={`https://${project.link}`}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                  <span>&lt;/&gt;</span>
                  <span>{project.category || "PROJECT"}</span>
                </span>
                {project.tags?.[0] && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700">
                    {project.tags[0]}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs md:text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-500 transition-colors uppercase">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-transform transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 font-light">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-100 dark:border-white/5">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                <Icon className="w-3.5 h-3.5" />
                <span className="capitalize">{label}</span>
              </span>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase">
                {project.tags?.[1] || project.tags?.[0]}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
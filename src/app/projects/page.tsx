import React from 'react';
import { projects } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const getLinkDetails = (url: string) => {
  if (url.includes('github.com')) return { label: 'View Source', Icon: Github };
  return { label: 'Visit Live', Icon: ExternalLink };
};

export default function ProjectsPage() {
  const featuredTitles = ["KneuraSense", "Kasaysayan"];
  const featuredProjects = projects.filter(project => featuredTitles.includes(project.title));
  const otherProjects = projects.filter(project => !featuredTitles.includes(project.title));

  return (
    <main className="max-w-[950px] mx-auto">
      {/* Header Section */}
      <div className="mb-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors uppercase mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
        <div className="flex items-center gap-3 font-mono border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3 mb-5">
          <span className="text-xs text-zinc-400 dark:text-zinc-500">[03]</span>
          <h1 className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold tracking-widest uppercase">
            Projects
          </h1>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-[650px]">
          Products and platforms I&apos;ve designed and shipped spanning embedded systems, generative AI, and web apps.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-4 mb-10">
        {featuredProjects.map((project) => {
          const { label, Icon } = getLinkDetails(project.link);

          return (
            <div
              key={project.title}
              className="flex flex-col border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090b] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Fake Terminal Header - Compact */}
              <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-zinc-300 dark:border-zinc-800 bg-zinc-200/50 dark:bg-zinc-900/50">
                 <div className="flex gap-1">
                   <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600"></span>
                   <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600"></span>
                 </div>
                 <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase">
                   {project.title.replace(/\s+/g, '_').toUpperCase()}.EXE
                 </span>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Image Section - Narrower and Full Color */}
                <div className="relative w-full md:w-40 h-32 md:h-auto border-b md:border-b-0 md:border-r border-zinc-300 dark:border-zinc-800 shrink-0 bg-zinc-100 dark:bg-zinc-950 overflow-hidden group">
                  {project.image ? (
                     <Image
                       src={project.image}
                       alt={project.title}
                       fill
                       className="object-cover transition-transform duration-500 group-hover:scale-105"
                       sizes="(max-width: 768px) 100vw, 160px"
                     />
                  ) : (
                     <div className="w-full h-full flex items-center justify-center">
                       <span className="text-zinc-400 font-mono text-[9px] tracking-widest uppercase">
                         &lt;NO_IMG /&gt;
                       </span>
                     </div>
                  )}
                </div>

                {/* Content Section - Reduced Padding */}
                <div className="p-4 flex flex-col flex-1">
                  {/* Technical Monospace Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2 text-[9px] font-mono uppercase tracking-widest text-zinc-500">
                    <span className="font-bold text-zinc-800 dark:text-zinc-300">
                      [{project.category || "PRJ"}]
                    </span>
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-50 mb-1.5 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-[11px] md:text-xs text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed font-sans line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </p>

                  {/* Minimalist Link */}
                  <div className="mt-auto flex items-center pt-2.5 border-t border-dashed border-zinc-300 dark:border-zinc-800">
                    <a
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors uppercase w-fit"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover/link:text-blue-500 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Projects List */}
      <div className="flex flex-col border-t border-zinc-200/80 dark:border-zinc-800/80 pt-4">
        {otherProjects.map((project) => (
          <a
            key={project.title}
            href={`https://${project.link}`}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col md:flex-row md:items-start py-6 border-b border-zinc-200/50 dark:border-white/5 last:border-0 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10 transition-colors duration-300"
          >
            <div className="w-full md:w-[35%] shrink-0 mb-2 md:mb-0 md:pr-6">
              <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors mt-0.5">
                {project.title}
              </h3>
            </div>
            <div className="flex-1 flex items-start justify-between gap-5">
              <div className="flex flex-col gap-1.5">
                <p className="text-[10px] md:text-xs font-mono font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  {project.category || "SOFTWARE"}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors line-clamp-3">
                  {project.description}
                </p>
              </div>
              <div className="shrink-0 pt-1">
                <ArrowUpRight
                  className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-transform transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
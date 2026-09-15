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
      <div className="space-y-4 mb-12">
        {featuredProjects.map((project) => {
          const { label, Icon } = getLinkDetails(project.link);
          return (
            <div 
              key={project.title}
              className="flex flex-col sm:flex-row gap-5 p-5 md:p-6 bg-white dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-white/5 rounded-2xl shadow-sm dark:shadow-none items-start"
            >
              {/* App Icon Box */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/60 dark:border-white/10 flex items-center justify-center shadow-sm">
                {project.image ? ( 
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="96px"
                    priority={false}
                  />
                ) : (
                  <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 tracking-widest">ICON</span>
                )}
              </div>

              {/* Project Info */}
              <div className="flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                    <span>&lt;/&gt;</span>
                    <span>{project.category || "PROJECT"}</span>
                  </span>
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-1.5 tracking-tight">
                  {project.title}
                </h2>

                <p className="text-xs md:text-[13px] text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <a 
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-xs font-mono font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-colors w-fit shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </a>
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
            className="group flex flex-col md:flex-row md:items-start py-8 md:py-10 border-b border-zinc-200/50 dark:border-white/5 last:border-0 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10 transition-colors duration-300"
          >
            <div className="w-full md:w-[35%] shrink-0 mb-3 md:mb-0 md:pr-6">
              <h3 className="text-base md:text-lg font-normal text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="flex-1 flex items-start justify-between gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] md:text-xs font-mono font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  {project.category || "SOFTWARE"}
                </p>
                <p className="text-sm md:text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="shrink-0 pt-0.5">
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
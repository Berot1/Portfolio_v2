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
  const featuredTitles = ["KneuraSense (Research Thesis)", "Portfolio v1.0"];
  const featuredProjects = projects.filter(project => featuredTitles.includes(project.title));
  const otherProjects = projects.filter(project => !featuredTitles.includes(project.title));

  return (
    // CHANGED: Reduced py-16 md:py-24 to py-8 md:py-12 to tighten the top spacing
    <main className="max-w-[950px] mx-auto px-6 py-8 md:py-12">
      
      {/* Header Section */}
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors text-sm font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-5">
          projects
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-[650px]">
          Products and platforms I&apos;ve designed and shipped — spanning embedded systems, generative AI, and web apps.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-8 mb-16">
        {featuredProjects.map((project) => {
          const { label, Icon } = getLinkDetails(project.link);
          return (
            <div 
              key={project.title}
              className="flex flex-col md:flex-row gap-8 p-4 md:p-6 bg-white dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-white/5 rounded-sm shadow-sm dark:shadow-none"
            >
              <div className="relative w-full md:w-[320px] aspect-square shrink-0 rounded-sm overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 flex items-center justify-center">
                {project.image ? (
                   <Image 
                     src={project.image} 
                     alt={project.title}
                     fill
                     className="object-cover transition-transform duration-700 hover:scale-105"
                     sizes="(max-width: 768px) 100vw, 320px"
                     priority={false}
                   />
                ) : (
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-600 tracking-widest">NO PREVIEW</span>
                )}
              </div>

              <div className="flex-1 flex flex-col py-2 md:py-4 md:pr-4">
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <span className="inline-flex items-center px-2.5 py-1.5 rounded-sm bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-bold tracking-widest uppercase">
                    {project.category || "PROJECT"}
                  </span>
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-1.5 rounded-sm border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-[10px] font-medium uppercase tracking-wider bg-white dark:bg-transparent">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-[15px] text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <a 
                    href={`https://${project.link}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-sm text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-colors w-fit shadow-sm"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                </div>

                <div className="pt-6 border-t border-zinc-100 dark:border-white/5 flex items-center flex-wrap gap-x-2.5 gap-y-1 text-[10px] uppercase tracking-widest mt-auto">
                  <span className="font-bold text-zinc-900 dark:text-zinc-300 mr-1">TECH STACK /</span>
                  {project.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="font-semibold text-zinc-400 dark:text-zinc-500">{tag}</span>
                      {idx < project.tags.length - 1 && <span className="text-zinc-200 dark:text-zinc-800">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Projects List */}
      <div className="border border-zinc-200/80 dark:border-white/5 rounded-sm overflow-hidden bg-white dark:bg-zinc-900/20 shadow-sm dark:shadow-none">
        {otherProjects.map((project) => (
          <a 
            key={project.title}
            href={`https://${project.link}`}
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col md:flex-row md:items-start p-6 md:p-8 border-b border-zinc-100 dark:border-white/5 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-all duration-300"
          >
            <div className="w-full md:w-[35%] shrink-0 mb-4 md:mb-0 md:pr-6 pt-0.5">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-zinc-50 transition-colors">
                {project.title}
              </h3>
            </div>
            
            <div className="flex-1 flex items-start justify-between gap-6">
              <div className="pr-4">
                <p className="text-[11px] font-mono font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-2">
                  {project.category || "SOFTWARE"}
                  <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                  {project.tags[0]}
                </p>
                <p className="text-[15px] text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {project.description}
                </p>
              </div>
              
              <div className="shrink-0 pt-1">
                <ArrowUpRight className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
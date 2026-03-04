import React from 'react';
import { affiliations, socialLinks, speaking } from '@/data/portfolio';
import { ExternalLink, Linkedin, Github, Instagram, Mail, Calendar, BookOpen, ChevronRight, LucideIcon } from 'lucide-react';

const IconMap: Record<string, LucideIcon> = { Linkedin, Github, Instagram };

export default function ConnectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
      
      {/* 1. Affiliations */}
      <div className="space-y-4">
        <h3 className="font-bold text-zinc-900 dark:text-white text-sm">A member of</h3>
        {/* Changed space-y-0 to space-y-3 */}
        <div className="space-y-1 text-sm">
          {affiliations.map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
              // Changed rounded classes to simple rounded-lg and removed -mt-px
              className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-sm relative z-10"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-100 pr-4 leading-tight">{item.name}</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* 2. Social Links */}
      <div className="space-y-4">
        <h3 className="font-bold text-zinc-900 dark:text-white text-sm">Social Links</h3>
        {/* Changed space-y-0 to space-y-3 */}
        <div className="space-y-1 text-sm">
          {socialLinks.map((item, i) => {
            const Icon = IconMap[item.icon];
            return (
              <a 
                key={i} 
                href={item.link} 
                // Changed rounded classes to simple rounded-lg and removed -mt-px
                className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-sm relative z-10"
              >
                {Icon && <Icon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />}
                <span className="font-bold text-zinc-900 dark:text-white">{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* 3. Speaking */}
      <div className="space-y-4">
        <h3 className="font-bold text-zinc-900 dark:text-white text-sm">Speaking</h3>
        <div className="flex flex-col justify-between h-[calc(100%-2rem)] p-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm">
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
            {speaking.description}
          </p>
          <a href={speaking.link} className="flex items-center gap-1 text-sm font-bold text-zinc-900 dark:text-white mt-4 hover:underline">
            Get in touch <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 4. Action Cards */}
      <div className="space-y-4 lg:pt-9">
        {/* Changed space-y-0 to space-y-3 */}
        <div className="space-y-1">
          <a href="#" className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-lg relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Email</span>
              </div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">hello@example.com</p>
            </div>
          </a>
          
          <a href="#" className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-lg relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Let&apos;s Talk</span>
              </div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">Schedule a Call</p>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-300" />
          </a>

          <a href="#" className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-lg relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Blog</span>
              </div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">Read my blog</p>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-300" />
          </a>
        </div>
      </div>

    </div>
  );
}
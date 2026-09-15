import React from 'react';
import { affiliations, socialLinks, personalInfo } from '@/data/portfolio';
import { ExternalLink, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ConnectGrid() {
  return (
    <section className="space-y-6 pt-6 font-mono">
      <div className="flex items-center gap-2 text-xs tracking-widest text-zinc-700 dark:text-zinc-400 uppercase">
        <span>06</span>
        <span>—</span>
        <span>connect & affiliations</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 
        {/* 1. Affiliations */}
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Affiliations</h3>
          <div className="space-y-2">
            {affiliations.map((item, i) => (
              <a 
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all rounded-lg group"
              >
                <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100 pr-4 leading-snug group-hover:text-blue-500 transition-colors uppercase">
                  {item.name}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Social Links */}
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Socials</h3>
          <div className="space-y-2">
            {socialLinks.map((item, i) => (
              <a 
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all rounded-lg group"
              >
                <div className="relative w-4 h-4 shrink-0">
                  <Image 
                    src={item.icon}
                    alt={`${item.name} icon`}
                    fill
                    className="object-contain" 
                  />
                </div>
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 3. Quick Actions */}
        <div className="space-y-3">
          <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Direct Contact</h3>
          <div className="space-y-2">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col justify-between p-4 bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all rounded-lg group h-full"
            >
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Email</span>
              </div>
              <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
                {personalInfo.email}
              </p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
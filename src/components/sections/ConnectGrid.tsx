import React from 'react';
import { affiliations, socialLinks, personalInfo } from '@/data/portfolio';
import { ExternalLink, Mail, Calendar, ChevronRight } from 'lucide-react';
import Image from 'next/image'; 

export default function ConnectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
      
      {/* 1. Affiliations */}
      <div className="space-y-4">
        <h3 className="font-bold text-zinc-900 dark:text-white text-sm">A member of</h3>
        <div className="space-y-1 text-sm">
          {affiliations.map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
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
        <div className="space-y-1 text-sm">
          {socialLinks.map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-sm relative z-10"
            >
              {/* Updated to use Next.js Image */}
              <div className="relative w-5 h-5 shrink-0">
                <Image 
                  src={item.icon} 
                  alt={`${item.name} icon`} 
                  fill 
                  className="object-contain" 
                />
              </div>
              <span className="font-bold text-zinc-900 dark:text-white">{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* 3. Quick Actions */}
      <div className="space-y-4">
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Quick Actions</h3>
        <div className="space-y-2">
          
          {/* Email Action */}
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-lg relative z-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <Mail className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider">Email</span>
              </div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">{personalInfo.email}</p>
            </div>
          </a>
          
          {/* Schedule Action */}
          <a 
            href="#" 
            className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-lg relative z-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider">Let&apos;s Talk</span>
              </div>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">Schedule a Call</p>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-300 dark:text-zinc-600" />
          </a>
        </div>
      </div>
    </div>
  );
}
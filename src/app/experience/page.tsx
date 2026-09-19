// src/app/experience/page.tsx
import React from 'react';
import { experience, personalInfo } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, GitCommit, GitBranch, Building2 } from 'lucide-react';

// Generates a consistent fake Git hash based on the role and company
const generateHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).substring(0, 7).padStart(7, '0');
};

export default function ExperiencePage() {
  // Format the name for the GitHub username aesthetic (e.g., "Gil Bernard" -> "GilBernard")
  const gitUsername = personalInfo.name.split(' ').slice(0, 2).join('');

  return (
    <main className="max-w-[850px] mx-auto flex flex-col gap-10">
      
      {/* Header Section */}
      <div className="mb-2">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors uppercase mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
        
        {/* Terminal Command Header */}
        <div className="flex items-center gap-3 font-mono border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
          <span className="text-xs text-zinc-400 dark:text-zinc-500">[04]</span>
          <h1 className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold tracking-widest uppercase">
            Experience
          </h1>
        </div>
      </div>

      {/* GitHub-Style Commit Timeline */}
      <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800/80 ml-4 md:ml-6 space-y-10 pb-12">
        {experience.map((item, index) => {
          const hash = generateHash(item.role + item.company);
          const isHighlighted = (item as { highlight?: boolean }).highlight;
          const logo = (item as { logo?: string }).logo;
          
          return (
            <div key={index} className="relative pl-8 md:pl-10 group">
              
              {/* Git Commit Node Icon */}
              <div className="absolute -left-[17px] top-2 bg-white dark:bg-black rounded-full z-10">
                <GitCommit 
                  className={`w-8 h-8 transition-colors duration-300 ${
                    isHighlighted 
                      ? 'text-blue-500' 
                      : 'text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-500 dark:group-hover:text-zinc-500'
                  }`} 
                />
              </div>

              {/* Horizontal Connecting Line */}
              <div className="absolute left-0 top-6 w-8 h-[2px] bg-zinc-200 dark:bg-zinc-800/80 -z-10" />

              {/* Commit Box */}
              <div className="border border-zinc-200/80 dark:border-zinc-800/80 rounded-lg bg-white dark:bg-[#09090b] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                
                {/* Commit Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-zinc-50/80 dark:bg-zinc-900/50 border-b border-zinc-200/80 dark:border-zinc-800/80 font-mono text-xs">
                  <div className="flex items-center gap-2.5 text-zinc-600 dark:text-zinc-400">
                    <div className="w-5 h-5 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700 shrink-0">
                      <Image 
                        src="/image/tabsprofile.jpg" 
                        alt={gitUsername} 
                        width={20} 
                        height={20}
                        className="object-cover" 
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">{gitUsername}</span>
                      <span className="text-zinc-300 dark:text-zinc-700">|</span>
                      <span className="text-zinc-500 dark:text-zinc-400">{item.year}</span>
                    </div>
                  </div>
                  
                  {/* Fake Commit Hash */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2 py-1 bg-zinc-200/60 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-300 font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                      {hash}
                    </span>
                  </div>
                </div>

                {/* Commit Message & Body */}
                <div className="p-4 md:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                    {/* Organization Logo or Fallback */}
                    {logo ? (
                      <div className="w-11 h-11 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-center p-1.5 shrink-0 shadow-sm overflow-hidden">
                        <Image 
                          src={logo} 
                          alt={`${item.company} logo`} 
                          width={36} 
                          height={36} 
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 flex items-center justify-center shrink-0 shadow-sm">
                        <Building2 className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                      </div>
                    )}

                    <div>
                      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight mb-1 group-hover:text-blue-500 transition-colors">
                        {item.role}
                      </h2>
                      <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                         <GitBranch className="w-3.5 h-3.5" />
                         {item.company}
                      </div>
                    </div>
                  </div>

                  {/* Git Diff (Achievements) */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="bg-[#f6f8fa] dark:bg-[#0c0c0e] border border-zinc-200/60 dark:border-zinc-800/60 rounded-md p-3.5 md:p-4 font-mono text-[11px] sm:text-xs overflow-x-auto">
                      <div className="text-zinc-400 dark:text-zinc-500 mb-2 select-none">
                        @@ -0,0 +1,{item.achievements.length} @@
                      </div>
                      <div className="space-y-1.5">
                        {item.achievements.map((achievement, i) => (
                          <div 
                            key={i} 
                            className="flex items-start gap-3 text-[#116329] dark:text-green-400/90 leading-relaxed bg-[#e6ffec]/50 dark:bg-green-950/20 px-2 py-1 rounded-sm"
                          >
                            <span className="select-none opacity-60 shrink-0 font-bold">+</span>
                            <span className="whitespace-pre-wrap">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
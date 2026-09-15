import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function CertificationsPage() {
  return (
    <main className="max-w-[1000px] mx-auto flex flex-col gap-10">
      
      {/* Header section */}
      <div className="mb-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors uppercase mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
        <div className="flex items-center gap-3 font-mono border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
          <span className="text-xs text-zinc-400 dark:text-zinc-500">[05]</span>
          <h1 className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold tracking-widest uppercase">
            All Certifications
          </h1>
        </div>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => {
          const isExternal = !cert.image && !!cert.credentialUrl;
          const targetHref = isExternal ? cert.credentialUrl : `/certifications/${cert.slug}`;
          
          return (
            <Link 
              key={cert.slug} 
              href={targetHref}
              target={isExternal ? "_blank" : "_self"}
              className="flex flex-col justify-between p-6 bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-lg hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="flex gap-4 items-start mb-4">
                {cert.icon ? (
                  <div className="w-10 h-10 shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-white/10 rounded-lg flex items-center justify-center p-2 shadow-sm">
                    <Image 
                      src={cert.icon}
                      alt={`${cert.issuer} logo`}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 shrink-0 bg-zinc-100 dark:bg-zinc-800 rounded-lg" />
                )}
                
                <div>
                  <h2 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-blue-500 transition-colors">
                    {cert.title}
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-light">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center font-mono text-[10px] text-zinc-400 uppercase tracking-widest mt-4 pt-4 border-t border-zinc-200/60 dark:border-white/5">
                <span>{cert.date}</span>
                <span className="flex items-center gap-1 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  {isExternal ? "View Credential" : "View Details"}
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      
    </main>
  );
}
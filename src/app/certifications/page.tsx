import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

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

      {/* Grid of Certifications - Spacious Design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => {
          const isExternal = !cert.image && !!cert.credentialUrl;
          const targetHref = isExternal ? cert.credentialUrl : `/certifications/${cert.slug}`;
          
          return (
            <Link 
              key={cert.slug}
              href={targetHref}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : ""}
              className="group flex flex-col items-center text-center p-6 bg-white dark:bg-[#09090b] border border-zinc-200/80 dark:border-zinc-800/80 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              {/* Restored 40x40 (w-10 h-10) Icon container */}
              {cert.icon ? (
                <div className="w-10 h-10 shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-white/10 rounded-xl flex items-center justify-center p-2 shadow-sm mb-4">
                  <Image 
                    src={cert.icon}
                    alt={`${cert.issuer} logo`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 shrink-0 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-4" />
              )}
              
              {/* Restored larger typography */}
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-500 transition-colors mb-2 leading-snug">
                {cert.title}
              </h2>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono uppercase tracking-widest mb-6">
                {cert.issuer}
              </p>
              
              {/* VERIFY tag with a top border line */}
              <div className="mt-auto w-full pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex justify-center items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors uppercase">
                <span>&#10092;</span>
                <span>VERIFY</span>
                <span>&#10093;</span>
              </div>
            </Link>
          );
        })}
      </div>
      
    </main>
  );
}
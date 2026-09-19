import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';

export default function Certifications() {
  const displayedCerts = certifications.slice(0, 3);

  return (
    <section className="space-y-6 font-mono">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs tracking-widest text-zinc-700 dark:text-zinc-400 uppercase">
          <span>05</span>
          <span>—</span>
          <span>certifications</span>
        </div>
      </div>
      
      {/* Changed to a horizontal grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {displayedCerts.map((cert) => {
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
    </section>
  );
}
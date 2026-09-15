import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function Certifications() {
  // Only show the first 3 certifications on the homepage
  const displayedCerts = certifications.slice(0, 3);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-700 dark:text-zinc-400 uppercase">
          <span>05</span>
          <span>—</span>
          <span>certifications</span>
        </div>
        <Link 
          href="/certifications" 
          className="text-xs font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors tracking-wide"
        >
          View All &rarr;
        </Link>
      </div>
             
      <div className="space-y-4">
        {displayedCerts.map((cert) => {
          const isExternal = !cert.image && !!cert.credentialUrl;
          const targetHref = isExternal ? cert.credentialUrl : `/certifications/${cert.slug}`;

          return (
            <Link 
              key={cert.slug}
              href={targetHref}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : ""}
              className="group flex items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-white/5 last:border-0 last:pb-0 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                {/* Issuer Logo Icon */}
                {cert.icon && (
                  <div className="w-8 h-8 shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-white/10 rounded-lg flex items-center justify-center p-1.5 shadow-sm">
                    <Image 
                      src={cert.icon} 
                      alt={`${cert.issuer} logo`} 
                      width={20} 
                      height={20} 
                      className="object-contain" 
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-500 transition-colors line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                <span>{cert.date}</span>
                {isExternal && <ExternalLink className="w-3 h-3 group-hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" />}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function Certifications() {
  // Only show the first 3 certifications on the homepage
  const displayedCerts = certifications.slice(0, 6);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Recent Certifications</h2>
        <Link 
          href="/certifications" 
          className="text-sm text-zinc-600 hover:text-black dark:hover:text-white cursor-pointer transition-colors"
        >
          View All &gt;
        </Link>
      </div>
      
      <div className="flex flex-col space-y-3">
        {displayedCerts.map((cert) => {
          /**
           * LOGIC: 
           * 1. If an image is present, we ALWAYS go to the internal detail page (Jumpstart/OJT).
           * 2. If NO image is present but a URL exists, we go externally (Networking Essentials).
           */
          const isExternal = !cert.image && !!cert.credentialUrl;
          const targetHref = isExternal ? cert.credentialUrl : `/certifications/${cert.slug}`;

          return (
            <Link 
              key={cert.slug} 
              href={targetHref}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : ""}
              className="block px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-sm cursor-pointer group"
            >
              <div className="flex gap-3 items-center">
                
                {/* Icon Container - Only renders if the icon property exists */}
                {cert.icon && (
                  <div className="w-10 h-10 shrink-0 bg-white dark:bg-black border border-zinc-100 dark:border-zinc-800 rounded-lg flex items-center justify-center p-1.5 shadow-sm">
                    <Image 
                      src={cert.icon} 
                      alt={`${cert.issuer} logo`} 
                      width={28} 
                      height={28} 
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Text Content */}
                <div className="flex-1 flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-sm line-clamp-1">{cert.title}</h3>
                    <p className="text-xs text-zinc-500 mt-0.5">{cert.issuer}</p>
                  </div>
                  {isExternal && (
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 mt-1 shrink-0 ml-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                  )}
                </div>
                
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
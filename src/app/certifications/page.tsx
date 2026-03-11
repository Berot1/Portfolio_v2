// src/app/certifications/page.tsx
import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image'; // <-- Import Image
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function CertificationsPage() {
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-16 flex flex-col gap-10">
      
      {/* Header section */}
      <div className="flex items-center gap-6">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-black dark:text-zinc-300 hover:text-zinc-600 dark:hover:text-white transition-colors text-sm font-medium mt-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-black dark:text-white leading-none mt-0.5">
          All Certifications
        </h1>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certifications.map((cert) => {
          const isExternal = !cert.image && !!cert.credentialUrl;
          const targetHref = isExternal ? cert.credentialUrl : `/certifications/${cert.slug}`;

          return (
            <Link 
              key={cert.slug} 
              href={targetHref}
              target={isExternal ? "_blank" : "_self"}
              className="flex flex-col justify-between p-6 bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-sm hover:shadow-sm hover:border-zinc-200 dark:hover:border-zinc-700 transition-all cursor-pointer group"
            >
              <div className="flex gap-4 items-start mb-4">
                {/* Icon Container */}
                {cert.icon ? (
                  <div className="w-14 h-14 shrink-0 bg-white dark:bg-black border border-zinc-100 dark:border-zinc-800 rounded-lg flex items-center justify-center p-2">
                    <Image 
                      src={cert.icon} 
                      alt={`${cert.issuer} logo`} 
                      width={40} 
                      height={40} 
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 shrink-0 bg-zinc-100 dark:bg-zinc-800 rounded-sm" />
                )}

                {/* Text Content */}
                <div>
                  <h2 className="font-bold text-sm text-black dark:text-white leading-snug">
                    {cert.title}
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                    {cert.date}
                  </p>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="flex justify-end items-center text-xs text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                {isExternal ? "View Certificate" : "View Details"}
              </div>
            </Link>
          );
        })}
      </div>
      
    </main>
  );
}
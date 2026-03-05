import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => {
          const isExternal = !cert.image && !!cert.credentialUrl;
          const targetHref = isExternal ? cert.credentialUrl : `/certifications/${cert.slug}`;

          return (
            <Link 
              key={cert.slug} 
              href={targetHref}
              target={isExternal ? "_blank" : "_self"}
              className="flex flex-col p-6 bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-sm hover:shadow-sm hover:border-zinc-200 dark:hover:border-zinc-700 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-bold text-[17px] text-black dark:text-white">
                  {cert.title}
                </h2>
                {isExternal && (
                  <ExternalLink className="w-4 h-4 text-zinc-500 shrink-0 ml-2" />
                )}
              </div>
              <p className="text-sm text-black dark:text-zinc-400">
                {cert.issuer}
              </p>
            </Link>
          );
        })}
      </div>
      
    </main>
  );
}
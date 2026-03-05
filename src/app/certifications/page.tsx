import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CertificationsPage() {
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-16 flex flex-col gap-10">
      
      {/* Header section matching your exact design */}
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

      {/* Clean 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <Link 
            key={cert.slug} 
            href={`/certifications/${cert.slug}`}
            className="flex flex-col p-6 bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-sm hover:shadow-sm hover:border-zinc-200 dark:hover:border-zinc-700 transition-all cursor-pointer"
          >
            <h2 className="font-bold text-[17px] text-black dark:text-white mb-2">
              {cert.title}
            </h2>
            <p className="text-sm text-black dark:text-zinc-400">
              {cert.issuer}
            </p>
          </Link>
        ))}
      </div>
      
    </main>
  );
}
import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';

export default function Certifications() {
  // Only show the first 2 certifications on the homepage
  const displayedCerts = certifications.slice(0, 2);

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
        {displayedCerts.map((cert) => (
          <Link 
            key={cert.slug} 
            href={`/certifications/${cert.slug}`}
            className="block px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-sm cursor-pointer"
          >
            <h3 className="font-bold text-zinc-900 dark:text-white text-sm">{cert.title}</h3>
            <p className="text-xs text-zinc-500 mt-0.5">{cert.issuer}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
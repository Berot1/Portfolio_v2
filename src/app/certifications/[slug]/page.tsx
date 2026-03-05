import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import { ArrowLeft, Award, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import ZoomableImage from '@/components/ZoomableImage';

export default async function CertificationViewer({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const cert = certifications.find(c => c.slug === resolvedParams.slug);

  if (!cert) {
    notFound();
  }

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-16 flex flex-col gap-8">
      
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Link 
          href="/certifications" 
          className="flex items-center gap-2 text-zinc-600 hover:text-black dark:hover:text-white transition-colors text-sm font-medium w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Certifications
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          {cert.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
           <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              {cert.issuer}
           </div>
           <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {cert.date}
           </div>
        </div>
      </div>

      {/* Description */}
      <div className="prose dark:prose-invert">
         <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {cert.description}
         </p>
      </div>

      {/* Outer frame for padding and background */}
      <div className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-4 md:p-8">
        {/* The Full-Screen Zoomable Certificate Image */}
        <ZoomableImage 
          src={cert.image}
          alt={`${cert.title} Certificate`}
          // CHANGED: Added !cursor-pointer to override the default zoom cursor
          className="w-full aspect-[1.4/1] !cursor-pointer" 
          imageClassName="object-contain drop-shadow-sm" // Pure object-contain with no padding
        />
      </div>
      
    </main>
  );
}
import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Award, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function CertificationViewer({ params }: { params: Promise<{ slug: string }> }) {
  // 2. Await the params to unwrap them
  const resolvedParams = await params;
  
  // 3. Use the unwrapped slug
  const cert = certifications.find(c => c.slug === resolvedParams.slug);

  if (!cert) {
    notFound();
  }

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-16 flex flex-col gap-8">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link 
          href="/" 
          className="flex items-center mt-0.5 gap-2 text-zinc-600 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Certificate Details */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          {cert.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span className="font-medium">{cert.issuer}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{cert.date}</span>
          </div>
        </div>

        <p className="text-zinc-700 dark:text-zinc-300 max-w-2xl leading-relaxed pt-2">
          {cert.description}
        </p>
      </div>

      {/* Image Viewer */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm overflow-hidden ">
        <Image 
          src={cert.image} 
          alt={`${cert.title} Certificate`}
          fill
          className="object-contain"
          sizes="(max-width: 1000px) 100vw, 1000px"
          priority
        />
      </div>

    </main>
  );
}

export function generateStaticParams() {
  return certifications
    .filter((cert) => cert.slug)
    .map((cert) => ({
      slug: cert.slug,
    }));
}
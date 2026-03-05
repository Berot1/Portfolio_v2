import React from 'react';
import { certifications } from '@/data/portfolio';
import Link from 'next/link';
import { ArrowLeft} from 'lucide-react';
import ZoomableImage from '@/components/ZoomableImage';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CertificationDetailPage({ params }: Props) {
  const { slug } = await params;
  
  const cert = certifications.find((c) => c.slug === slug);

  if (!cert) {
    notFound();
  }

  return (
    <main className="max-w-[900px] mx-auto px-6 py-12 md:py-20 flex flex-col gap-8 -mt-10">
      {/* Navigation */}
      <Link 
        href="/certifications" 
        className="flex items-center gap-2 text-zinc-700 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Certifications
      </Link>

      {/* Title Section */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
          {cert.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-900 dark:text-zinc-200">{cert.issuer}</span>
          <span>•</span>
          <span>{cert.date}</span>
        </div>
      </div>

      {/* Description & Verification Link Block (Rendered Above Image) */}
      <div className="space-y-6">
        {cert.description && (
          <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>{cert.description}</p>
          </div>
        )}
      </div>

      {/* Certificate Image Frame (Rendered Below Description) */}
      {cert.image && (
        <div className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-4 md:p-8">
          <ZoomableImage 
            src={cert.image}
            alt={`${cert.title} Certificate`}
            className="w-full aspect-[1.4/1]" 
            imageClassName="object-contain drop-shadow-sm" 
          />
        </div>
      )}
    </main>
  );
}
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
    <main className="max-w-[900px] mx-auto flex flex-col gap-8">
      
      {/* Navigation matching monospace aesthetic */}
      <div>
        <Link 
          href="/certifications" 
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors uppercase mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Certifications
        </Link>
        <div className="flex items-center gap-3 font-mono border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
          <span className="text-xs text-zinc-400 dark:text-zinc-500">[CERT]</span>
          <h1 className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold tracking-widest uppercase">
            {cert.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono tracking-widest text-zinc-500 uppercase">
        <span className="font-bold text-zinc-900 dark:text-zinc-200">{cert.issuer}</span>
        <span>{'//'}</span>
        <span>{cert.date}</span>
      </div>

      {cert.description && (
        <div className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
          <p>{cert.description}</p>
        </div>
      )}

      {cert.image && (
        <div className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-xl p-4 md:p-8">
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
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ZoomableImage from '@/components/ZoomableImage';
import { getGalleryImages } from '@/utils/getGalleryImages';

export default function GalleryPage() {
  const dynamicGalleryImages = getGalleryImages();

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-16 flex flex-col gap-10">
      
      {/* Header section matching your other pages */}
      <div className="flex items-center gap-4">
        <Link 
          href="/" 
          className="flex items-center mt-0.5 gap-2 text-zinc-600 hover:text-black dark:hover:text-white transition-colors text-md font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-3xl font-bold text-black dark:text-white">
          Gallery
        </h1>
      </div>

      {/* 2-Column Grid Layout matching the provided design */}
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 md:gap-6">
        {dynamicGalleryImages.map((src, idx) => (
          <div 
            key={`${src}-${idx}`}
            className="relative w-full aspect-video rounded-sm overflow-hidden bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800"
          >
            <ZoomableImage 
              src={src} 
              alt={`Gallery Image ${idx + 1}`} 
              className="w-full h-full"
              imageClassName="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
      
    </main>
  );
}
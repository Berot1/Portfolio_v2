import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  // Placeholders for your actual images
  const images = [1, 2, 3, 4];

  return (
    <section className="space-y-6 pt-8">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Gallery</h2>
      
      <div className="relative group">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4">
          {images.map((img) => (
            <div key={img} className="shrink-0 w-64 md:w-80 h-64 bg-zinc-200 dark:bg-zinc-800 rounded-xl snap-start flex items-center justify-center relative overflow-hidden">
              <span className="text-zinc-400 font-medium">Image {img}</span>
              {/* Replace the above span with an actual next/image when ready */}
              {/* <Image src={`/gallery-${img}.jpg`} fill className="object-cover" alt="Gallery image" /> */}
            </div>
          ))}
        </div>
        
        {/* Navigation Hints (Optional) */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-4 h-4 text-zinc-900 dark:text-white" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-4 h-4 text-zinc-900 dark:text-white" />
        </button>
      </div>
    </section>
  );
}
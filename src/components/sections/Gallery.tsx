"use client";

import React, { useState } from 'react';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [1, 2, 3, 4];
  const displayImages = [...images, ...images, ...images]; 

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <section className="space-y-3 overflow-hidden">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-lg font-bold uppercase tracking-wider text-black dark:text-zinc-400">Gallery</h2>
      </div>
      
      <div className="relative group">
        <div 
          className="flex gap-3 w-max animate-scroll-horizontal hover:[animation-play-state:paused] py-2"
        >
          {displayImages.map((img, idx) => (
            <div 
              key={`${img}-${idx}`}
              onClick={() => setSelectedImage(img)}
              className="relative shrink-0 w-32 md:w-44 h-20 md:h-28 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-zoom-in"
            >
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                <Maximize2 className="text-white opacity-0 hover:opacity-100 transition-opacity w-4 h-4" />
              </div>
              <span className="text-zinc-400 font-mono text-[9px] uppercase tracking-tighter">Img {img}</span>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-black to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-black to-transparent z-20"></div>
      </div>

      {/* Lightbox remains full-screen for usability */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[110]">
            <span className="text-zinc-400 text-sm font-medium">
              {images.indexOf(selectedImage) + 1} of {images.length}
            </span>
            <button 
              className="p-2 bg-zinc-800/50 hover:bg-zinc-700 rounded-full text-white transition-all hover:rotate-90"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <button onClick={handlePrev} className="absolute left-4 z-[110] p-3 bg-zinc-800/50 hover:bg-zinc-700 rounded-full text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button onClick={handleNext} className="absolute right-4 z-[110] p-3 bg-zinc-800/50 hover:bg-zinc-700 rounded-full text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-4xl aspect-video bg-zinc-900/50 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-full flex items-center justify-center">
               <span className="text-zinc-500 text-lg font-bold">Image {selectedImage} Full View</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
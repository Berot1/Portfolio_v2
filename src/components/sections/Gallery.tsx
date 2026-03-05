"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { galleryImages } from '@/data/portfolio';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Triple the array for seamless scrolling animation in the thumbnail view
  const displayImages = [...galleryImages, ...galleryImages, ...galleryImages]; 

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
  }, [selectedIdx]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! + 1) % galleryImages.length);
  }, [selectedIdx]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Keyboard navigation support & scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (selectedIdx !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIdx, handlePrev, handleNext, handleClose]);

  return (
    <section className="space-y-3 overflow-hidden">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-lg font-bold uppercase tracking-wider text-black dark:text-zinc-400">Gallery</h2>
      </div>
      
      {/* Thumbnail Scrolling View */}
      <div className="relative group">
        <div className="flex gap-3 w-max animate-scroll-horizontal hover:[animation-play-state:paused] py-2">
          {displayImages.map((src, idx) => (
            <div 
              key={`${src}-${idx}`}
              onClick={() => setSelectedIdx(idx % galleryImages.length)}
              // CHANGED: Replaced cursor-zoom-in with cursor-pointer right here
              className="relative shrink-0 w-32 md:w-44 h-20 md:h-28 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 128px, 176px" />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                <Maximize2 className="text-white opacity-0 hover:opacity-100 transition-opacity w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-black to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-black to-transparent z-20"></div>
      </div>

      {/* Full-Screen Lightbox View using React Portal */}
      {typeof document !== 'undefined' && selectedIdx !== null && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-900/95 p-4 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Top Left Counter */}
          <div className="absolute top-4 left-4 z-[110] bg-zinc-800/80 px-4 py-2 rounded text-zinc-300 text-sm font-medium">
            {selectedIdx + 1} / {galleryImages.length}
          </div>

          {/* Top Right Close Button */}
          <button 
            className="absolute top-4 right-4 z-[110] p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded text-zinc-300 transition-colors"
            onClick={handleClose}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Navigation Arrow */}
          <button 
            onClick={handlePrev} 
            className="absolute left-4 z-[110] p-3 bg-zinc-800/50 hover:bg-zinc-700 rounded text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Right Navigation Arrow */}
          <button 
            onClick={handleNext} 
            className="absolute right-4 z-[110] p-3 bg-zinc-800/50 hover:bg-zinc-700 rounded text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Center Image Container */}
          <div 
            className="relative w-full h-full max-h-[85vh] flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={galleryImages[selectedIdx]} 
              alt={`Gallery Image ${selectedIdx + 1}`} 
              fill 
              className="object-contain"
              priority
            />
          </div>

          {/* Bottom Helper Text */}
          <div className="absolute bottom-6 z-[110] bg-zinc-800/80 px-4 py-2 rounded text-zinc-400 text-xs tracking-wide">
            Use arrow keys to navigate • ESC to close
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
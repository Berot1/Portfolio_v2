"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image, { StaticImageData } from 'next/image';
import { X, Maximize2 } from 'lucide-react';

interface ZoomableImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string; // <-- Added this
}

export default function ZoomableImage({ 
  src, 
  alt, 
  className = "", 
  imageClassName = "object-cover" // <-- Defaults to cover, but can be overridden
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleClose]);

  return (
    <>
      <div 
        className={`relative cursor-pointer overflow-hidden group ${className}`} 
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill 
          // Use the dynamic imageClassName here instead of hardcoding object-cover
          className={`${imageClassName} transition-transform duration-300 group-hover:scale-[1.02]`} 
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
          <Maximize2 className="text-white opacity-0 hover:opacity-100 transition-opacity w-5 h-5 drop-shadow-md" />
        </div>
      </div>

      {isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-900/95 p-4 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <button 
            className="absolute top-4 right-4 z-[110] p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded text-zinc-300 transition-colors"
            onClick={handleClose}
          >
            <X className="w-5 h-5" />
          </button>

          <div 
            className="relative w-full h-full max-h-[85vh] flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()} 
          >
            <Image 
              src={src} 
              alt={alt} 
              fill 
              className="object-contain" // The fullscreen view always uses contain
              priority 
            />
          </div>

          <div className="absolute bottom-6 z-[110] bg-zinc-800/80 px-4 py-2 rounded text-zinc-400 text-xs tracking-wide shadow-lg">
            ESC to close
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
import React from 'react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-center gap-6">
      <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
}
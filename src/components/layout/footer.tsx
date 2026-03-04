import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex gap-6">
        <a href="#" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm">
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm">
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>
      <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
}
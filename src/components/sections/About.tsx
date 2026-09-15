import React from 'react';
import { personalInfo } from '@/data/portfolio';

export default function About() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-700 dark:text-zinc-400 uppercase">
        <span>01</span>
        <span>—</span>
        <span>about</span>
      </div>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base font-light">
        {personalInfo.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
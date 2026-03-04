import React from 'react';
import { personalInfo } from '@/data/portfolio';

export default function About() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">About</h2>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {personalInfo.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
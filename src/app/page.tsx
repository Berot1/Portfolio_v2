import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import ConnectGrid from '@/components/sections/ConnectGrid';
import Link from 'next/link';

// Strict monospace header to match the sidebar
const SectionHeader = ({ 
  id, 
  title, 
  link, 
  linkText 
}: { 
  id: string; 
  title: string; 
  link?: string; 
  linkText?: string; 
}) => (
  <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3 mb-8">
    <div className="flex items-center gap-3 font-mono">
      <span className="text-xs text-zinc-400 dark:text-zinc-500">[{id}]</span>
      <h2 className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold tracking-widest uppercase">
        {title}
      </h2>
    </div>

    {link && linkText && (
      <Link
        href={link}
        className="font-mono text-[10px] text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200 transition-colors tracking-widest uppercase"
      >
        [{linkText}]
      </Link>
    )}
  </div>
);

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-20">
             
      <section id="overview">
        <Hero />
      </section>

      <section id="about">
        <SectionHeader id="01" title="ABOUT" />
        <About />
      </section>

      <section id="tech-stack">
        <SectionHeader id="02" title="TECH STACK" />
        <TechStack />
      </section>

      <section id="projects">
        <SectionHeader 
          id="03" 
          title="PROJECTS" 
          link="/projects" 
          linkText="VIEW ALL" 
        />
        <Projects />
      </section>

      <section id="experience">
        <SectionHeader 
          id="04" 
          title="EXPERIENCE" 
          link="/experience" 
          linkText="VIEW ALL" 
        />
        <Experience />
      </section>

      <section id="certifications">
        <SectionHeader 
          id="05" 
          title="CERTIFICATIONS" 
          link="/certifications" 
          linkText="VIEW ALL" 
        />
        <Certifications />
      </section>

      <section id="connect" className="pb-12">
        <SectionHeader id="06" title="CONNECT" />
        <ConnectGrid />
      </section>

    </div>
  );
}
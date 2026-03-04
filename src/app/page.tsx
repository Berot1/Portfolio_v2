import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import IDCard from '@/components/sections/IDCard';
import Certifications from '@/components/sections/Certifications';
import Recommendations from '@/components/sections/Recommendations';
import ConnectGrid from '@/components/sections/ConnectGrid';
import Gallery from '@/components/sections/Gallery';
import Footer from '@/components/layout/footer';
import { MessageSquare } from 'lucide-react';

// Reusable wrapper to create the structured "Bento Box" look
function SectionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 md:p-8 rounded-sm bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 transition-colors">
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-16 flex flex-col gap-6">
      
      {/* Hero Section (Unboxed for impact) */}
      <div className="mb-4">
        <Hero />
      </div>

      {/* Top Section: Standard 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <SectionBox><About /></SectionBox>
          <SectionBox><TechStack /></SectionBox>
          <SectionBox><Projects /></SectionBox>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          <IDCard /> {/* IDCard provides its own specific box background */}
          <SectionBox><Experience /></SectionBox>
        </div>
        
      </div>

      {/* Middle Section: Certifications & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SectionBox><Certifications /></SectionBox>
        <SectionBox><Recommendations /></SectionBox>
      </div>

      {/* Lower Section: 4-Column Connect Grid (Renders its own boxes) */}
      <ConnectGrid />

      {/* Full Width Bottom Section */}
      <SectionBox><Gallery /></SectionBox>

      <div className="pt-6">
        <Footer />
      </div>
      
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-zinc-900 text-white dark:bg-white dark:text-black px-5 py-3 rounded-lg font-bold text-sm flex items-center gap-2 shadow-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
          <MessageSquare className="w-4 h-4 fill-current" />
          Chat with Gil
        </button>
      </div>
    </main>
  );
}
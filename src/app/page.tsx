import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Recommendations from '@/components/sections/Recommendations';
import ConnectGrid from '@/components/sections/ConnectGrid';
import Gallery from '@/components/sections/Gallery';
import Footer from '@/components/layout/footer';
import Chat from '@/components/Chat';
import { getGalleryImages } from '@/utils/getGalleryImages';

// Reusable wrapper to create the structured "Bento Box" look
function SectionBox({ children }: { children: React.ReactNode }) {
  return (
    // Reduced padding from p-6 md:p-8 to p-5
    <div className="p-5 rounded-sm bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 transition-colors">
      {children}
    </div>
  );
}

const dynamicGalleryImages = getGalleryImages();

export default function Portfolio() {
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-8 md:py-12 flex flex-col gap-4">
      
      <div className="mb-2">
        <Hero />
      </div>

      {/* Top Section: Standard 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
          <SectionBox><About /></SectionBox>
          <SectionBox><TechStack /></SectionBox>
          <SectionBox><Projects /></SectionBox>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4">
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
      <SectionBox>
        <Gallery galleryImages={dynamicGalleryImages} />
      </SectionBox>

      <div className="pt-10">
        <Footer />
      </div>
      
      {/* Floating Chat Button */}
      <Chat />
    </main>
  );
}
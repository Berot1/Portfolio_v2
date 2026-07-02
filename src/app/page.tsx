import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import ConnectGrid from '@/components/sections/ConnectGrid';
import Gallery from '@/components/sections/Gallery';
import Footer from '@/components/layout/footer';
import Chat from '@/components/Chat';
import { getGalleryImages } from '@/utils/getGalleryImages';

/**
 * Reusable wrapper to maintain consistent Bento Box styling
 */
function SectionBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-5 rounded-sm bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 transition-colors ${className}`}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const galleryImages = getGalleryImages();

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-8 md:py-12 flex flex-col gap-4">
      
      {/* Hero Section */}
      <section className="mb-2">
        <Hero />
      </section>

      {/* Main Content: Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: About, Stack, Projects */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <SectionBox>
            <About />
          </SectionBox>
          <SectionBox>
            <TechStack />
          </SectionBox>
          <SectionBox>
            <Projects />
          </SectionBox>
        </div>

        {/* Right Column: Experience + Certifications */}
        <aside className="lg:col-span-4 flex flex-col gap-4">
          <SectionBox>
            <Experience />
          </SectionBox>
          <SectionBox>
            <Certifications />
          </SectionBox>
        </aside>
      </div>

      {/* Social/Connection Grid */}
      <ConnectGrid />

      {/* Gallery Section */}
      <SectionBox>
        <Gallery galleryImages={galleryImages} />
      </SectionBox>

      {/* Footer */}
      <footer className="pt-10">
        <Footer />
      </footer>
      
      {/* Floating Chat */}
      <Chat />
    </main>
  );
}
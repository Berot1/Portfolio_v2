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
 * Premium Bento Box Wrapper
 * Inspired by modern minimal design systems (Apple/Nike)
 */
function SectionBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-8 rounded-lg bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 ${className}`}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const galleryImages = getGalleryImages();

  return (
    <main className="max-w-[1100px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-8">
      
      {/* Hero Section: High emphasis on clarity */}
      <section>
        <Hero />
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Primary Content: About, Tech, Projects */}
        <div className="lg:col-span-8 flex flex-col gap-6">
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

        {/* Sidebar: Professional History */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <SectionBox className="h-full">
            <Experience />
          </SectionBox>
          <SectionBox>
            <Certifications />
          </SectionBox>
        </aside>
      </div>

      {/* Social / Connect Section */}
      <section>
        <ConnectGrid />
      </section>

      {/* Immersive Gallery Section */}
      <SectionBox>
        <Gallery galleryImages={galleryImages} />
      </SectionBox>

      {/* Footer */}
      <footer className="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <Footer />
      </footer>
      
      {/* Floating Interaction */}
      <Chat />
    </main>
  );
}
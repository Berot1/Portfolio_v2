import type { Metadata } from "next";
// @ts-expect-error Next.js processes this stylesheet import at build time.
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Gil Bernard",
  description: "Portfolio of Gil Bernard, Software Engineer and creator of KneuraSense.",
  icons: {
    icon: "/image/tabsprofile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen w-full overflow-hidden bg-white text-zinc-900 dark:bg-black dark:text-zinc-300 font-sans antialiased transition-colors duration-300 selection:bg-black selection:text-white dark:selection:bg-zinc-800">
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          {/* Increased width to w-[220px] to fit the keyboard shortcuts on one line */}
          <aside className="hidden md:flex flex-col w-[220px] shrink-0 h-full border-r border-zinc-200/80 dark:border-white/5 bg-white dark:bg-[#09090b] z-20">
            <Sidebar />
          </aside>

          <main className="flex-1 h-full overflow-y-auto relative z-10 canvas-grid custom-scrollbar scroll-smooth">
            <div className="max-w-[800px] mx-auto px-6 py-16 md:px-12 md:py-24">
              {children}
            </div>
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
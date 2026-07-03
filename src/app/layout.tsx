import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils"; // Make sure this import is here
import { DotPattern } from "@/components/magicui/dot-pattern"; // Make sure this import is here

export const metadata: Metadata = {
  title: "Gil Bernard",
  description: "Portfolio of Gil Bernard, Software Engineer and creator of KneuraSense.",
  icons: {
    icon: "/image/tabsprofile.jpg",
    shortcut: "/image/tabsprofile.jpg",
    apple: "/image/tabsprofile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative bg-white text-zinc-900 dark:bg-black dark:text-zinc-300 font-sans antialiased transition-colors duration-300 selection:bg-black selection:text-white dark:selection:bg-zinc-800">
        
        {/* Background Logic placed directly here */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black">
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              // Combines a linear cross-fade with scattered radial bursts for a balanced, uniquely random gradient effect
              "[mask-image:linear-gradient(to_bottom_right,black_10%,transparent_40%,black_90%),radial-gradient(ellipse_at_center,black,transparent_60%),radial-gradient(circle_at_20%_20%,black,transparent_30%),radial-gradient(circle_at_80%_80%,black,transparent_30%)]",
              // Slightly bumped up the opacity to accommodate the heavier masking
              "fill-zinc-500/30 dark:fill-zinc-400/30"
            )}
          />
        </div>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
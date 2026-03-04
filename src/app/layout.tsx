import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Gil Bernard | Software Engineer",
  description: "Portfolio of Gil Bernard, Software Engineer and creator of KneuraSense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* We use both standard and dark: classes here.
        By default it's light mode (bg-white), and dark: handles dark mode.
      */}
      <body className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-300 font-sans antialiased transition-colors duration-300 selection:bg-black selection:text-white dark:selection:bg-zinc-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
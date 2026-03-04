import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Gil Bernard | Software Engineer",
  description: "Portfolio of Gil Bernard, Software Engineer and creator of KneuraSense.",
  icons: {
    icon: "/tabProfile.jpg",
    shortcut: "/tabProfile.jpg",
    apple: "/tabProfile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-300 font-sans antialiased transition-colors duration-300 selection:bg-black selection:text-white dark:selection:bg-zinc-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
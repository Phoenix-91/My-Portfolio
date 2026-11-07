import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: { default: "Paramveer Rana | Full Stack Developer", template: "%s | Paramveer Rana" },
  description: "Portfolio of Paramveer Rana, a full stack developer and AI enthusiast from Chandigarh building scalable web applications.",
  openGraph: { title: "Paramveer Rana | Full Stack Developer", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}><body className="font-sans">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
      <Sidebar /><TopBar />
      <main id="main" className="overflow-x-hidden px-4 pb-28 pt-16 md:pb-12 md:pl-[19.5rem] md:pr-[2.4rem] md:pt-[5.4rem]"><div className="mx-auto max-w-[110rem]">{children}</div></main>
    </body></html>
  );
}

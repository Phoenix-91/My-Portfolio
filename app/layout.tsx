import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: "Paramveer's Portfolio", description: 'Full Stack Developer · AI Enthusiast · Cloud & DevOps' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}

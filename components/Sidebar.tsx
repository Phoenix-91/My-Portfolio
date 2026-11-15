'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Github, Laptop, Linkedin, Mail, Code2 } from 'lucide-react';
import { nav, profile } from '@/lib/data';
import Heatmap from './Heatmap';
import Art from './Art';

export default function Sidebar() {
  const path = usePathname();
  return (
    <>
      <nav className="sticky top-10 z-30 flex gap-1 overflow-x-auto border-b border-line bg-panel px-2 py-2 md:hidden" aria-label="Primary">
        {nav.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs ${path === href ? 'bg-[#26263a] text-white' : 'text-mut'}`}><Icon size={14} />{label}</Link>
        ))}
      </nav>
      <aside className="sticky top-10 hidden h-[calc(100vh-40px)] w-[200px] shrink-0 flex-col gap-3 overflow-hidden border-r border-line bg-panel px-3 py-5 md:flex">
        <div className="px-2 pb-3 font-serif text-[28px] font-bold italic leading-none">P/</div>
        <nav className="flex flex-col gap-0.5" aria-label="Primary">
          {nav.map(({ href, label, icon: Icon }) => {
            const on = path === href;
            return (
              <Link key={href} href={href} className={`relative flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors ${on ? 'text-white' : 'text-mut hover:bg-[#1f1f22] hover:text-white'}`}>
                {on && <motion.span layoutId="navpill" className="absolute inset-0 rounded-lg bg-[#26263a]" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                <Icon size={16} className={`relative ${on ? 'text-ac' : ''}`} /><span className="relative">{label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="card mt-2 !p-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold"><Github size={14} />GitHub Stats</div>
          <p className="mt-2 text-[11px] text-mut">Total Contributions</p>
          <p className="mb-2 text-xl font-semibold">1.2k+ <span className="text-sm text-[#3fb950]">↗</span></p>
          <Heatmap weeks={12} gap={2} />
        </div>
        <div className="card mt-auto !p-2 text-center">
          <Art src="/images/cat.png" className="mb-1.5 h-[80px] rounded-lg" fallback="linear-gradient(135deg,#2a2630,#15151a)" />
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-mut">Keep coding... <Laptop size={12} /></p>
        </div>
        <div className="px-1 pt-1">
          <p className="text-xs font-semibold">{profile.name}</p>
          <p className="text-[11px] text-mut">Full Stack Developer</p>
          <div className="mt-3 flex gap-4 text-mut">
            <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={15} /></a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
            <a href={`https://${profile.leetcode}`} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><Code2 size={15} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={15} /></a>
          </div>
        </div>
      </aside>
    </>
  );
}

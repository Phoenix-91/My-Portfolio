'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Cloud, ExternalLink, Globe, LayoutGrid, Plus, Sparkles, type LucideIcon } from 'lucide-react';
import { featuredPoints, projects } from '@/lib/data';
import Art from './Art';
import ProjectCard from './ProjectCard';

const cats: { name: string; icon: LucideIcon }[] = [{ name: 'All', icon: LayoutGrid }, { name: 'Web Apps', icon: Globe }, { name: 'AI / ML', icon: Sparkles }, { name: 'DevOps', icon: Cloud }, { name: 'Other', icon: Plus }];

export default function ProjectsView() {
  const [cat, setCat] = useState('All');
  const f = projects[0];
  const list = projects.slice(1).filter((p) => cat === 'All' || p.cat === cat);
  return (
    <div className="px-5 sm:px-9">
      <section className="card grid items-center gap-5 !p-5 lg:grid-cols-[170px_1.25fr_1fr_1.15fr]" style={{ background: 'linear-gradient(135deg,#1b1731,#131318)' }}>
        <Art src="/images/astronaut.png" className="hidden h-[130px] rounded-xl lg:block" />
        <div>
          <span className="mb-2 inline-block rounded-md border border-[#3d3680] bg-[#2a2550] px-2.5 py-0.5 text-[11px]">Featured Project</span>
          <h2 className="flex items-center gap-2 text-xl font-bold">{f.name}<ExternalLink size={13} className="text-mut" /></h2>
          <p className="mb-1.5 text-[13px] font-semibold text-[#c8c8ce]">{f.sub}</p>
          <p className="text-xs leading-relaxed text-mut">{f.desc}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">{f.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
          <span className="btn mt-3 !px-3 !py-1.5 !text-xs">View Project <ArrowRight size={12} /></span>
        </div>
        <ul className="space-y-3 text-xs">{featuredPoints.map((p) => <li key={p} className="flex items-center gap-2"><Check size={14} className="text-mut" />{p}</li>)}</ul>
        <Art src={f.image} className="h-[135px] rounded-lg border border-line" />
      </section>

      <div className="mb-4 mt-5 flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" className="flex flex-wrap gap-1.5">
          {cats.map(({ name, icon: Icon }) => (
            <button key={name} role="tab" aria-selected={cat === name} onClick={() => setCat(name)} className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${cat === name ? 'border-line bg-[#26263a] text-white' : 'border-transparent text-mut hover:text-white'}`}><Icon size={13} />{name}</button>
          ))}
        </div>
        <span className="flex items-center gap-1 text-xs text-mut">Sort by: Latest <ChevronDown size={13} /></span>
      </div>

      <motion.div layout className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div layout key={p.slug} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}><ProjectCard p={p} /></motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {list.length === 0 && <p className="card text-center text-[13px] text-mut">No projects in “{cat}” yet. Pick another category to see more.</p>}

      <section className="card relative mt-5 flex flex-wrap items-center justify-between gap-4 overflow-hidden !p-0 pr-5">
        <div className="flex items-center">
          <Art src="/images/cta.png" className="h-[68px] w-[140px] shrink-0 sm:w-[190px]" />
          <div className="pl-4"><p className="flex items-center gap-2 text-[13px]"><ArrowRight size={13} />Let’s Build Something Amazing</p><p className="text-sm font-medium text-[#a9a4f5]">Explore more of my work and feel free to reach out!</p></div>
        </div>
        <Link href="/contact" className="btn">Go to Contact <ArrowRight size={14} /></Link>
      </section>
    </div>
  );
}

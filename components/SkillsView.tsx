'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BarChart3, Quote } from 'lucide-react';
import { skillGroups, skillTabs, stack } from '@/lib/data';
import Ring from './Ring';
import Stat from './Stat';

export default function SkillsView() {
  const [tab, setTab] = useState('All Skills');
  const list = skillGroups.filter((g) => tab === 'All Skills' || g.tab === tab);
  return (
    <div className="px-5 sm:px-9">
      <div role="tablist" className="mb-4 flex gap-6 overflow-x-auto border-b border-line">
        {skillTabs.map((t) => (
          <button key={t} role="tab" aria-selected={t === tab} onClick={() => setTab(t)} className={`relative whitespace-nowrap pb-2.5 text-[13px] ${t === tab ? 'font-semibold text-white' : 'text-mut hover:text-white'}`}>
            {t}{t === tab && <motion.span layoutId="skilltab" className="absolute inset-x-0 -bottom-px h-0.5 bg-ac" />}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map(({ name, desc, tags, icon: Icon, ghost: Ghost, color }) => (
            <motion.article layout key={name} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }} className="card relative min-h-[142px] overflow-hidden">
              <h2 className="h3"><Icon size={18} style={{ color }} />{name}</h2>
              <p className="max-w-[210px] text-xs leading-relaxed text-mut">{desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">{tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              <Ghost size={84} strokeWidth={1.2} className="pointer-events-none absolute right-4 top-6 text-white opacity-[0.07]" />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="mt-4 grid gap-3.5 lg:grid-cols-[1.35fr_1fr]">
        <section className="card !p-5">
          <h2 className="h3"><BarChart3 size={16} className="text-[#4c8dff]" />Tech Stack Overview</h2>
          <div className="flex flex-wrap items-center gap-7">
            <div className="text-center"><Ring value={90} size={104} /><p className="mt-1.5 text-[11px] text-mut">Overall Skills</p></div>
            <div className="grid flex-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              <div className="space-y-3">{stack.filter((_, i) => i < 3).map((s) => <Stat key={s.label} {...s} />)}</div>
              <div className="space-y-3">{stack.filter((_, i) => i >= 3).map((s) => <Stat key={s.label} {...s} />)}</div>
            </div>
          </div>
        </section>
        <section className="card flex min-h-[150px] flex-col justify-between !p-5" style={{ background: 'linear-gradient(135deg,#2a2a2e,#141416)' }}>
          <Quote size={18} className="text-mut" />
          <p className="font-serif text-lg italic">“Code. Build. Innovate.”</p>
          <p className="text-right text-xs text-mut">— Paramveer Rana</p>
        </section>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
const tabs = ["All Projects", "Full Stack", "AI/ML"];
export default function ProjectsView() {
  const [tab, setTab] = useState(tabs[0]);
  const list = tab === tabs[0] ? projects : projects.filter((p) => p.category === tab);
  return (
    <>
      <div role="tablist" aria-label="Project filter" data-reveal className="mb-[1.8rem] flex flex-wrap gap-2">
        {tabs.map((t) => (<button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
          className={`rounded-xl border px-4 py-2 text-sm transition ${tab === t ? "border-accent/50 bg-accent/10 text-accent" : "border-white/10 text-zinc-400 hover:text-white"}`}>{t}</button>))}
      </div>
      <motion.div layout className="grid gap-[1.6rem] md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article key={p.name} layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} whileHover={{ y: -4 }} className="card overflow-hidden">
              {p.image ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={p.image} alt={`${p.name} screenshot`} className="aspect-video w-full object-cover" />
                : <div className="grid aspect-video place-items-center bg-gradient-to-br from-zinc-900 to-zinc-800 text-3xl font-semibold text-white">{p.name}</div>}
              <div className="p-[1.8rem]"><h2 className="flex items-center gap-2 font-semibold text-white">{p.name}<span className="chip py-0.5 text-[.7rem]">{p.category}</span></h2>
                <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>
                <div className="mt-4 flex gap-5 text-sm"><a href={p.github} className="flex items-center gap-1.5 text-zinc-300 hover:text-accent"><Github size={14} />Code</a>
                  {p.live && <a href={p.live} className="flex items-center gap-1.5 text-zinc-300 hover:text-accent"><ExternalLink size={14} />Live demo</a>}</div></div>
            </motion.article>))}
        </AnimatePresence>
        {!list.length && <p className="card p-[2rem] text-zinc-400 md:col-span-2">No {tab} projects yet. Check back soon.</p>}
      </motion.div>
    </>
  );
}

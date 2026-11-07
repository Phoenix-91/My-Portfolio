"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CornerDownLeft } from "lucide-react";
import { nav, profile } from "@/lib/data";
// Top-right status pill + command palette (Ctrl/⌘ + K) for keyboard navigation.
export default function TopBar() {
  const router = useRouter(); const [open, setOpen] = useState(false); const [q, setQ] = useState(""); const [idx, setIdx] = useState(0); const input = useRef<HTMLInputElement>(null);
  const items = useMemo(() => [
    ...nav.map((n) => ({ label: n.label, hint: "Go to page", run: () => router.push(n.href) })),
    { label: "Email me", hint: profile.email, run: () => (location.href = `mailto:${profile.email}`) },
    { label: "Download resume", hint: "PDF", run: () => window.open(profile.resume, "_blank") },
    { label: "GitHub", hint: "Open profile", run: () => window.open(profile.socials.github, "_blank") },
  ], [router]);
  const list = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o); } if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, []);
  useEffect(() => { if (open) { setQ(""); setIdx(0); setTimeout(() => input.current?.focus(), 30); } }, [open]);
  const go = (i: number) => { list[i]?.run(); setOpen(false); };
  return (
    <>
      <div className="fixed right-3 top-3 z-30 flex gap-3 text-sm md:right-[2.4rem] md:top-[1.7rem] md:text-[1rem]">
        <button onClick={() => setOpen(true)} aria-label="Open command menu (Ctrl+K)" className="card flex h-[3.6rem] min-w-[3.6rem] items-center justify-center gap-2 px-3 transition hover:border-white/25 md:h-[3.6rem]"><Search size={14} /><kbd className="hidden text-[.8rem] text-zinc-500 lg:inline">Ctrl K</kbd></button>
        <span className="card flex items-center gap-2 px-[1.4rem]"><i className="h-2 w-2 animate-pulse rounded-full bg-accent" />Available for internships</span>
      </div>
      <AnimatePresence>{open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-start bg-black/60 p-4 pt-[15vh] backdrop-blur-sm" onClick={() => setOpen(false)}>
          <motion.div role="dialog" aria-modal="true" aria-label="Command menu" initial={{ y: -12, scale: .97 }} animate={{ y: 0, scale: 1 }} exit={{ y: -8, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="card mx-auto w-full max-w-lg bg-zinc-950/95 p-2">
            <input ref={input} value={q} onChange={(e) => { setQ(e.target.value); setIdx(0); }} placeholder="Type a command or search…" aria-label="Search commands" className="w-full bg-transparent px-3 py-3 text-sm outline-none"
              onKeyDown={(e) => { if (e.key === "ArrowDown") { e.preventDefault(); setIdx((idx + 1) % (list.length || 1)); } if (e.key === "ArrowUp") { e.preventDefault(); setIdx((idx - 1 + list.length) % (list.length || 1)); } if (e.key === "Enter") go(idx); }} />
            <ul className="mt-1 max-h-72 overflow-auto border-t border-white/10 pt-1">{list.map((it, i) => (
              <li key={it.label}><button onMouseEnter={() => setIdx(i)} onClick={() => go(i)} className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm ${i === idx ? "bg-accent/10 text-accent" : "text-zinc-300"}`}>{it.label}<span className="flex items-center gap-2 text-xs text-zinc-500">{it.hint}{i === idx && <CornerDownLeft size={12} />}</span></button></li>))}
              {!list.length && <li className="px-3 py-4 text-sm text-zinc-500">No results.</li>}</ul>
          </motion.div>
        </motion.div>)}</AnimatePresence>
    </>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, GraduationCap, PlusCircle, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { nav, profile } from "@/lib/data";
const icons: Record<string, typeof Home> = { home: Home, about: User, skills: GraduationCap, projects: PlusCircle, contact: Mail };
export default function Sidebar() {
  const path = usePathname();
  const soc = [[FaGithub, profile.socials.github, "GitHub"], [FaLinkedinIn, profile.socials.linkedin, "LinkedIn"], [FaXTwitter, profile.socials.x, "X"], [Mail, `mailto:${profile.email}`, "Email"]] as const;
  return (
    <aside className="card fixed inset-x-3 bottom-3 z-40 flex items-center justify-around p-2 md:inset-x-auto md:inset-y-[1.5rem] md:left-[2rem] md:w-[11.9rem] md:flex-col md:items-stretch md:justify-start md:p-[1.4rem]">
      <Link href="/" aria-label="Home" className="hidden pb-[2.4rem] text-[3.4rem] font-black italic leading-none text-accent md:block">P</Link>
      <nav aria-label="Main" className="flex w-full justify-around gap-1 md:flex-col md:justify-start">
        {nav.map((n) => { const I = icons[n.id]; const on = n.href === "/" ? path === "/" : path.startsWith(n.href); return (
          <Link key={n.id} href={n.href} aria-current={on ? "page" : undefined} aria-label={n.label}
            className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors md:py-[.95rem] md:text-[1.05rem] ${on ? "text-accent" : "text-zinc-400 hover:text-white"}`}>
            {on && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 rounded-xl bg-accent/10 ring-1 ring-accent/15" />}
            <I size={17} className="relative shrink-0" /><span className="relative hidden md:inline">{n.label}</span></Link>); })}
      </nav>
      <div className="mt-auto hidden md:block">
        <p className="border-t border-white/[.08] pt-[1.4rem] text-[1rem] leading-snug text-zinc-400">Let&apos;s build something amazing together. 🚀</p>
        <Link href="/contact" className="btn mt-[1.2rem] w-full justify-center border border-accent/50 py-[.9rem] text-[1rem] text-accent hover:bg-accent/10">Hire Me →</Link>
        <div className="mt-[3rem] flex justify-between px-1 text-zinc-300">{soc.map(([I, h, l]) => <a key={l} href={h} aria-label={l} className="transition hover:-translate-y-0.5 hover:text-white"><I size={17} /></a>)}</div>
        <p className="mt-[1.2rem] text-[.85rem] leading-relaxed text-zinc-600">© 2026 Paramveer Rana<br />Built with Next.js</p>
      </div>
    </aside>
  );
}

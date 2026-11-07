"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, Code2, GraduationCap, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiDocker, SiAmazonwebservices, SiGithub } from "react-icons/si";
import { profile, projects, featuredSkills } from "@/lib/data";
import Keyboard from "./Keyboard"; import ActivityGrid from "./ActivityGrid"; import SkillChip from "./SkillChip"; import AboutArt from "./AboutArt";
const stack = [SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiDocker, SiAmazonwebservices, SiGithub];
const statIcons = [Code2, GraduationCap, GraduationCap];
const dot = <i className="h-2 w-2 rounded-full bg-accent" />;
export default function Hero() {
  const [i, setI] = useState(0); const p = projects[i]; const multi = projects.length > 1;
  const go = (d: number) => setI((i + d + projects.length) % projects.length);
  return (
    <section id="home" aria-labelledby="hero-title" className="relative scroll-mt-4">
      <div className="grid grid-cols-1 items-center md:grid-cols-[1.2fr_1fr]">
        <div data-reveal className="min-w-0">
          <span className="card inline-flex items-center gap-2 px-[1.8rem] py-[.8rem] text-base">{dot}Hello, I&apos;m</span>
          <h1 id="hero-title" className="mt-[1rem] text-4xl font-bold tracking-tight text-white md:text-[4.5rem] md:leading-none">{profile.name} <span className="text-zinc-400">{profile.surname}</span></h1>
          <p className="mt-[1rem] text-lg font-medium text-zinc-200 md:text-[1.3rem]">{profile.title}</p>
          <p className="mt-[1rem] max-w-[32rem] text-[1.05rem] leading-relaxed text-zinc-300">{profile.tagline}</p>
          <div className="mt-[1.4rem] flex flex-wrap gap-4">
            <Link href="/projects" className="btn bg-accent text-black hover:brightness-110 md:px-[2rem] md:py-[.9rem]">View My Projects <ArrowRight size={14} /></Link>
            <a href={profile.resume} download className="btn border border-white/15 hover:bg-white/5 md:px-[2rem] md:py-[.9rem]"><Download size={14} />Download Resume</a>
          </div>
          <div className="mt-[1.5rem] flex flex-wrap items-center gap-x-[2.2rem] gap-y-4 text-zinc-400">{stack.map((I, k) => <I key={k} size={26} aria-hidden className={k === 0 ? "text-sky-300/80" : ""} />)}<span className="border-l border-white/10 whitespace-nowrap pl-[1.6rem] text-sm text-zinc-500">And more...</span></div>
        </div>
        <Keyboard />
      </div>

      <div className="mt-[1.2rem] grid gap-[1.4rem] md:grid-cols-[1.27fr_1fr]">
        <div className="card flex gap-[1.4rem] p-[1.6rem]">
          <div className="min-w-0 flex-1"><h2 className="h2">About Me</h2><p className="mt-[1.2rem] text-[.95rem] leading-snug text-zinc-300">{profile.bio}</p>
            <dl className="mt-[1.2rem] grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/[.06] bg-white/[.03] py-[.7rem]">
              {profile.stats.map((s, k) => { const I = statIcons[k]; return <div key={s.v} className="flex items-center gap-[.6rem] whitespace-nowrap px-[.9rem]"><I size={16} className="shrink-0 text-zinc-300" />
                <div><dd className="text-sm font-semibold text-white">{s.v}</dd><dt className="text-xs text-zinc-500">{s.l}</dt></div></div>; })}</dl></div>
          <div className="hidden w-[11.6rem] shrink-0 overflow-hidden rounded-xl border border-white/10 sm:block"><AboutArt /></div>
        </div>
        <div className="card p-[1.6rem]"><div className="flex items-center justify-between"><h2 className="h2">Skills</h2><Link href="/skills" className="text-xs text-zinc-400 hover:text-white">View all →</Link></div>
          <ul className="mt-[1.2rem] grid grid-cols-2 gap-[.6rem] sm:grid-cols-4">{featuredSkills.map((s) => <SkillChip key={s} name={s} />)}</ul></div>
      </div>
      <div className="mt-[1.2rem] grid gap-[1.4rem] md:grid-cols-[1.5fr_1fr]">
        <div className="card p-[1.6rem]"><div className="flex items-center justify-between"><h2 className="h2">Featured Projects</h2><Link href="/projects" className="text-xs text-zinc-400 hover:text-white">View all →</Link></div>
          <div className="mt-[1.2rem] flex gap-[1.4rem]">
            <div className="hidden w-[20rem] shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 text-lg font-semibold text-white sm:grid" aria-hidden>{p.name}</div>
            <div className="min-w-0"><h3 className="flex items-center gap-2 text-base font-semibold text-white">{p.name}<ExternalLink size={12} className="text-accent" /></h3>
              <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>
              <div className="mt-3 flex items-center justify-between"><Link href="/projects" className="btn border border-white/15 px-[1.6rem] py-[.7rem] text-xs hover:bg-white/5">Explore Project →</Link>
                <div className="flex items-center gap-2" role="group" aria-label="Featured project navigation">
                  <button onClick={() => go(-1)} disabled={!multi} aria-label="Previous project" className="grid h-[2.4rem] w-[2.4rem] place-items-center rounded-full border border-white/15 disabled:opacity-40"><ChevronLeft size={12} /></button>
                  <button onClick={() => go(1)} disabled={!multi} aria-label="Next project" className="grid h-[2.4rem] w-[2.4rem] place-items-center rounded-full border border-white/15 disabled:opacity-40"><ChevronRight size={12} /></button></div></div></div>
          </div></div>
        <div className="card p-[1.6rem]"><h2 className="h2">GitHub Activity <i className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" /></h2><ActivityGrid weeks={26} />
          </div>
      </div>
    </section>
  );
}

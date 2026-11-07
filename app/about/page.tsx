import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutArt from "@/components/AboutArt";
import ActivityGrid from "@/components/ActivityGrid";
import Counter from "@/components/Counter";
import { profile, education, experience } from "@/lib/data";
export const metadata: Metadata = { title: "About", description: "About Paramveer Rana: MCA student at Chandigarh University, full stack developer and AI enthusiast." };
const Logo = ({ src, alt }: { src: string; alt: string }) => /* eslint-disable-next-line @next/next/no-img-element */ <img src={src} alt={alt} className="h-[6rem] w-[6rem] shrink-0 rounded-xl object-contain ring-1 ring-white/10" />;
const Timeline = ({ children }: { children: React.ReactNode }) => (<ol className="relative ml-2 space-y-[1.4rem] pl-8"><span data-line className="absolute bottom-2 left-0 top-2 w-px bg-white/15" />{children}</ol>);
export default function About() {
  return (
    <>
      <PageHeader title="About Me" sub="A developer from Chandigarh who enjoys building products and learning new technology." />
      <div className="grid gap-[1.6rem] lg:grid-cols-[1.4fr_1fr]">
        <div className="card flex gap-[1.6rem] p-[2rem]">
          <div className="flex-1"><p className="leading-relaxed text-zinc-300">{profile.bio}</p>
            <dl className="mt-[2rem] grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/[.06] bg-white/[.03] p-3"><dd className="text-xl font-semibold text-white"><Counter to={10} suffix="+" /></dd><dt className="text-xs text-zinc-500">Projects</dt></div>
              {profile.stats.slice(1).map((s) => (<div key={s.v} className="rounded-xl border border-white/[.06] bg-white/[.03] p-3"><dd className="text-xl font-semibold text-white">{s.v}</dd><dt className="text-xs text-zinc-500">{s.l}</dt></div>))}</dl></div>
          <div className="hidden w-[14rem] shrink-0 overflow-hidden rounded-xl border border-white/10 sm:block"><AboutArt /></div>
        </div>
        <div className="card p-[2rem]"><h2 className="h2">GitHub Activity</h2><ActivityGrid /></div>
      </div>
      <h2 data-reveal className="h2 mb-[1.6rem] mt-[3rem]">Education</h2>
      <Timeline>{education.map((e) => (
        <li key={e.degree} className="card relative flex items-center gap-[1.6rem] p-[1.6rem]"><i className="absolute -left-[2.35rem] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent" />
          <Logo src="/logos/cu.png" alt="Chandigarh University logo" />
          <div><p className="text-xs text-zinc-500">{e.period} · {e.status}</p><h3 className="font-semibold text-white">{e.degree}</h3><p className="text-sm text-zinc-400">{e.school}</p></div></li>))}</Timeline>
      <h2 data-reveal className="h2 mb-[1.6rem] mt-[3rem]">Experience</h2>
      <Timeline>{experience.map((e) => (
        <li key={e.org} className="card relative flex items-center gap-[1.6rem] p-[1.6rem]"><i className="absolute -left-[2.35rem] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent" />
          <Logo src={e.logo} alt={`${e.org} logo`} />
          <div><p className="text-xs text-zinc-500">Internship{e.period && ` · ${e.period}`}</p><h3 className="font-semibold text-white">{e.role} <span className="font-normal text-zinc-400">· {e.org}</span></h3>{e.note && <p className="mt-1 text-sm text-zinc-400">{e.note}</p>}</div></li>))}</Timeline>
    </>
  );
}

import Link from 'next/link';
import { ArrowRight, BarChart3, Compass, ExternalLink, Github, GraduationCap, Globe, Laptop, Linkedin, Mail, RefreshCw, Rocket, User, Briefcase, Wrench } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Art from '@/components/Art';
import Fade from '@/components/Fade';
import Heatmap from '@/components/Heatmap';
import Timeline from '@/components/Timeline';
import { academics, experience, homeChips, nav, profile, projects } from '@/lib/data';

const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
const dots = ['#5bc0eb', '#e8e8ea', '#4c8dff', '#7ac74f', '#9aa0a6', '#3fb950', '#ffd43b', '#ee4c2c', '#b36bf2', '#ff9900', '#2496ed', '#326ce5'];

export default function HomePage() {
  return (
    <>
      <TopBar title="Portfolio" home />
      <Art src="/images/banner.gif" pixelated position="center 40%" fallback="linear-gradient(180deg,#080c1a,#1b2342 65%,#0e1325)" className="h-[140px] lg:h-[150px]" />
      <Fade className="mx-auto max-w-[1280px] px-5 pb-12 sm:px-9">
        <Art src="/images/avatar.png" fallback="linear-gradient(135deg,#2c2c34,#18181d)" className="-mt-[46px] h-[88px] w-[88px] rounded-2xl border-[3px] border-bg" />
        <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="flex items-center gap-3 text-[30px] font-bold leading-tight"><Laptop size={30} className="text-[#cfd3da]" />{profile.name}</h1>
            <p className="mt-1 text-[13px] text-mut">{profile.role.join('  ·  ')}</p>
            <p className="mt-5 border-l-2 border-[#555] pl-3 text-[13px] italic text-mut">“{profile.quote}”</p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs"><i className="h-2 w-2 rounded-full bg-[#3fb950]" />Available for Opportunities</span>
        </div>
        <hr className="my-7 border-line" />

        <div className="grid gap-7 lg:grid-cols-[170px_1fr_270px]">
          <aside className="hidden flex-col lg:flex">
            <p className="h3"><Compass size={16} />NAVIGATION</p>
            <nav className="flex flex-col gap-0.5">
              {nav.slice(1).map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className="flex items-center gap-2.5 rounded-md px-1 py-1.5 text-[13px] text-[#c8c8ce] hover:text-white"><Icon size={15} />{label}</Link>
              ))}
            </nav>
            <Art src="/images/desk.png" className="mt-6 h-[88px] rounded-lg" />
            <p className="mt-2 flex items-center gap-1.5 text-[11px] text-mut">Code. Build. Repeat. <RefreshCw size={11} /></p>
            <svg viewBox="0 0 200 130" className="mt-auto pt-10 opacity-60" aria-hidden>
              <path d="M0 130 L55 40 L80 70 L105 30 L170 130Z" fill="#2a2a2e" />
              <path d="M105 30 L118 52 L100 46 L92 60Z" fill="#3a3a40" />
              {[20, 40, 130, 150, 172].map((x, i) => <path key={x} d={`M${x} 130 L${x + 9} ${96 - (i % 2) * 10} L${x + 18} 130Z`} fill="#222226" />)}
            </svg>
          </aside>

          <div className="min-w-0 space-y-9 lg:border-x lg:border-line lg:px-7">
            <section>
              <div className="mb-3 flex items-center justify-between"><p className="h3 !mb-0"><BarChart3 size={16} className="text-[#4c8dff]" />GitHub Activity</p><span className="text-xs text-mut">Total Contributions: 1,200+ ↗</span></div>
              <div className="mb-1.5 flex justify-between text-[10px] text-mut">{months.map((m) => <span key={m}>{m}</span>)}</div>
              <Heatmap weeks={52} />
            </section>
            <div className="grid gap-9 md:grid-cols-2">
              <section>
                <p className="h3"><User size={16} className="text-mut" />About Me</p>
                <p className="text-[13px] leading-relaxed text-[#c8c8ce]">I’m a BCA student at Chandigarh University, passionate about building impactful products, exploring AI, and solving real-world problems through code.</p>
                <Link href="/about" className="mt-4 inline-block text-xs text-mut hover:text-white">Learn more →</Link>
              </section>
              <section>
                <p className="h3"><Briefcase size={16} className="text-mut" />Experience &amp; Education</p>
                <Timeline items={experience} />
              </section>
            </div>
            <section>
              <div className="mb-3 flex items-center justify-between"><p className="h3 !mb-0"><Rocket size={16} className="text-[#e5675a]" />Featured Projects</p><Link href="/projects" className="text-xs text-mut hover:text-white">View all →</Link></div>
              <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                {projects.slice(0, 4).map((p) => (
                  <Link key={p.slug} href="/projects" className="card block overflow-hidden !p-0 transition-colors hover:border-[#444]">
                    <Art src={p.image} className="h-[66px]" />
                    <div className="p-2.5">
                      <p className="flex items-center justify-between text-xs font-semibold">{p.name}<ExternalLink size={10} className="text-mut" /></p>
                      <p className="text-[10px] text-mut">{p.sub}</p>
                      <div className="mt-1.5 flex gap-1.5">{p.tags.slice(0, 2).map((t) => <span key={t} className="chip !px-2 !text-[9px]">{t}</span>)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <p className="h3"><Wrench size={16} className="text-mut" />Technical Skills</p>
              <div className="flex flex-wrap gap-2">
                {homeChips.map((c, i) => <span key={c} className="chip flex items-center gap-1.5 !px-3 !py-1.5"><i className="h-2 w-2 rounded-full" style={{ background: dots[i] }} />{c}</span>)}
                <span className="chip !px-3 !py-1.5">+ 7 more...</span>
              </div>
            </section>
            <Art src="/images/space.png" className="h-[84px] rounded-xl" fallback="linear-gradient(135deg,#0a1230,#2a3a78)" />
            <section>
              <p className="h3"><GraduationCap size={16} className="text-mut" />Academics</p>
              <Timeline items={academics} />
            </section>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6">
          <div className="flex items-start gap-4"><Mail size={20} className="mt-0.5 text-mut" /><div><p className="font-semibold">Let’s Connect</p><p className="text-xs text-mut">Open for internships, collaborations and exciting opportunities!</p></div></div>
          <div className="flex flex-wrap gap-2.5">
            <a className="btn" href={`https://${profile.github}`}><Github size={15} />GitHub</a>
            <a className="btn" href={`https://${profile.linkedin}`}><Linkedin size={15} />Linkedin</a>
            <a className="btn" href={`mailto:${profile.email}`}><Mail size={15} />Email</a>
            <a className="btn" href={`https://${profile.site}`}><Globe size={15} />Portfolio</a>
          </div>
        </div>
      </Fade>
    </>
  );
}

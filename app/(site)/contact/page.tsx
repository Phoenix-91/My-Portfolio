import { AtSign, BarChart3, FileText, Github, Lightbulb, Linkedin, Mail, MessageSquare, Send, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { ContactForm, CopyEmail } from '@/components/ContactClient';
import Fade from '@/components/Fade';
import PageHeader from '@/components/PageHeader';
import Ring from '@/components/Ring';
import { profile } from '@/lib/data';

const rows: { icon: LucideIcon; label: string; text: string; href: string; tile: string; copy?: boolean }[] = [
  { icon: Mail, label: 'Email', text: profile.email, href: `mailto:${profile.email}`, tile: '#5a5fc4', copy: true },
  { icon: Github, label: 'GitHub', text: profile.github, href: `https://${profile.github}`, tile: '#2b2b30' },
  { icon: Linkedin, label: 'LinkedIn', text: profile.linkedin, href: `https://${profile.linkedin}`, tile: '#1e5a99' },
  { icon: FileText, label: 'Portfolio', text: profile.site, href: `https://${profile.site}`, tile: '#4a4f7a' },
];

export default function ContactPage() {
  return (
    <Fade>
      <PageHeader icon={<AtSign size={22} className="text-[#4c9be8]" />} title="Let’s Connect" sub="I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision." />
      <div className="grid gap-4 px-5 sm:px-9 xl:grid-cols-[1fr_1fr_290px]">
        <section className="card !p-5">
          <h2 className="h3"><Mail size={16} className="text-ac" />Direct Contact &amp; Social Media</h2>
          <ul className="mt-4 space-y-5">
            {rows.map(({ icon: Icon, label, text, href, tile, copy }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg" style={{ background: tile }}><Icon size={20} /></span>
                <div className="min-w-0"><p className="text-[13px] font-semibold">{label}</p>
                  <p className="flex items-center gap-2 text-[13px]"><a href={href} className="truncate text-[#6fa3ff] underline underline-offset-2">{text}</a>{copy && <CopyEmail />}</p></div>
              </li>
            ))}
          </ul>
        </section>
        <section className="card !p-5"><h2 className="h3"><MessageSquare size={16} className="text-mut" />Send a Message</h2><ContactForm /></section>
        <div className="space-y-4">
          <section className="card"><h2 className="h3"><BarChart3 size={16} className="text-[#4c8dff]" />Tech Stack Overview</h2><div className="flex items-center gap-3"><Ring value={90} size={52} stroke={10} /><span className="text-[13px]">AI/ML (90%)</span></div></section>
          <section className="card"><h2 className="h3"><Lightbulb size={16} className="text-[#f5c542]" />A Dev’s Philosophy</h2><p className="text-[13px] font-bold">“Building scalable solutions, one commit at a time.”</p><p className="mt-1 text-[13px] text-[#c8c8ce]">Clean code, performance, and continuous improvement.</p></section>
          <section className="card"><h2 className="h3"><MessageSquare size={16} className="text-mut" />Let’s Build</h2><p className="text-[13px] leading-relaxed text-[#c8c8ce]">I am actively seeking roles in Full Stack Development, AI/ML, and Cloud engineering. If you have an exciting project or opportunity, let’s talk!</p><a href={`mailto:${profile.email}`} className="btn mt-3 !px-3 !py-1.5 !text-xs">Reach Out <Send size={12} /></a></section>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-end gap-2 px-5 sm:px-9">
        <a className="btn !px-3 !py-1.5 !text-xs" href={`https://${profile.github}`}><Github size={13} />GitHub</a>
        <a className="btn !px-3 !py-1.5 !text-xs" href={`https://${profile.linkedin}`}><Linkedin size={13} />LinkedIn</a>
        <a className="btn !px-3 !py-1.5 !text-xs" href={`mailto:${profile.email}`}><Mail size={13} />Email</a>
        <Link className="btn !px-3 !py-1.5 !text-xs" href="/">Portfolio</Link>
      </div>
    </Fade>
  );
}

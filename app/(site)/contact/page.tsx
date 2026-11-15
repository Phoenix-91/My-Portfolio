import { AtSign, Code2, Github, Lightbulb, Linkedin, Mail, MessageSquare, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { ContactForm, CopyEmail } from '@/components/ContactClient';
import Fade from '@/components/Fade';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

const rows: { icon: LucideIcon; label: string; text: string; href: string; tile: string; copy?: boolean }[] = [
  { icon: Mail, label: 'Email', text: profile.email, href: `mailto:${profile.email}`, tile: '#5a5fc4', copy: true },
  { icon: Github, label: 'GitHub', text: profile.github, href: `https://${profile.github}`, tile: '#2b2b30' },
  { icon: Linkedin, label: 'LinkedIn', text: 'Paramveer Rana', href: `https://${profile.linkedin}`, tile: '#1e5a99' },
  { icon: Code2, label: 'LeetCode', text: 'Phoenix-91', href: `https://${profile.leetcode}`, tile: '#FFA116' },
];

export default function ContactPage() {
  return (
    <Fade>
      <PageHeader icon={<AtSign size={22} className="text-[#4c9be8]" />} title="Let's Connect" sub="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision." />
      <div className="grid gap-4 px-5 sm:px-9 xl:grid-cols-[1fr_1fr_290px]">
        <section className="card !p-5">
          <h2 className="h3"><Mail size={16} className="text-ac" />Direct Contact &amp; Social Media</h2>
          <ul className="mt-4 space-y-5">
            {rows.map(({ icon: Icon, label, text, href, tile, copy }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg" style={{ background: tile }}><Icon size={20} /></span>
                <div className="min-w-0"><p className="text-[13px] font-semibold">{label}</p>
                  <p className="flex items-center gap-2 text-[13px]"><a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} className="truncate text-[#6fa3ff] underline underline-offset-2">{text}</a>{copy && <CopyEmail />}</p></div>
              </li>
            ))}
          </ul>
        </section>
        <section className="card !p-5"><h2 className="h3"><MessageSquare size={16} className="text-mut" />Send a Message</h2><ContactForm /></section>
        <div className="space-y-4">
          <section className="card"><h2 className="h3"><Lightbulb size={16} className="text-[#f5c542]" />A Dev&apos;s Philosophy</h2><p className="text-[13px] font-bold">&quot;Building scalable solutions, one commit at a time.&quot;</p><p className="mt-1 text-[13px] text-[#c8c8ce]">Clean code, performance, and continuous improvement.</p></section>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-end gap-2 px-5 sm:px-9">
        <a className="btn !px-3 !py-1.5 !text-xs" href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer"><Github size={13} />GitHub</a>
        <a className="btn !px-3 !py-1.5 !text-xs" href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer"><Linkedin size={13} />LinkedIn</a>
        <a className="btn !px-3 !py-1.5 !text-xs" href={`https://${profile.leetcode}`} target="_blank" rel="noopener noreferrer"><Code2 size={13} />LeetCode</a>
        <a className="btn !px-3 !py-1.5 !text-xs" href={`mailto:${profile.email}`}><Mail size={13} />Email</a>
        <Link className="btn !px-3 !py-1.5 !text-xs" href="/">Portfolio</Link>
      </div>
    </Fade>
  );
}

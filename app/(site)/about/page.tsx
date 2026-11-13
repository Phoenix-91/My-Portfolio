import { Info, MessageSquare, Lightbulb, UserRound, Tent, BarChart3, BookOpen, Headphones, Mountain, PenLine, User } from 'lucide-react';
import Art from '@/components/Art';
import Fade from '@/components/Fade';
import PageHeader from '@/components/PageHeader';
import Stat from '@/components/Stat';
import { stack } from '@/lib/data';

const beyond = [[BookOpen, 'Reading sci-fi novels'], [Headphones, 'Listening to lofi music'], [Mountain, 'Hiking in the foothills of the Himalayas'], [PenLine, 'Occasional blogging']] as const;

export default function AboutPage() {
  return (
    <Fade>
      <PageHeader icon={<Info size={22} className="text-[#4c9be8]" />} title="About Me" />
      <div className="grid gap-4 px-5 sm:px-9 lg:grid-cols-[1fr_290px]">
        <div className="space-y-4">
          <section className="card !p-5">
            <h2 className="h3"><User size={16} className="text-mut" />Origin Story</h2>
            <p className="mb-3 text-[13px] leading-relaxed">Hi, I’m <b>Paramveer</b>, a <b>Full Stack Developer</b> from Chandigarh, India. My journey into tech started with a curiosity about how things work, leading me to a Bachelor of Computer Applications (BCA) at Chandigarh University.</p>
            <p className="text-[13px] leading-relaxed text-[#c8c8ce]">From my first React project to exploring AI, cloud and DevOps, I enjoy turning ideas into products that ship — and learning something new with every commit.</p>
          </section>
          <div className="grid gap-4 md:grid-cols-3">
            <section className="card">
              <h2 className="h3"><UserRound size={16} className="text-mut" />Who I Am</h2>
              <p className="text-[13px] leading-relaxed text-[#c8c8ce]">Passionate about building impactful software, exploring artificial intelligence, and solving real-world challenges through code.</p>
            </section>
            <section className="card">
              <h2 className="h3"><Lightbulb size={16} className="text-[#f5c542]" />A Dev’s Philosophy</h2>
              <p className="mb-2 text-[13px] font-bold">“Building scalable solutions, one commit at a time.”</p>
              <p className="text-[13px] leading-relaxed text-[#c8c8ce]">Clean code, performance, and continuous improvement.</p>
            </section>
            <section className="card relative">
              <h2 className="h3"><Tent size={16} className="text-[#f5a142]" />Beyond the Screen</h2>
              <p className="mb-2 text-xs text-[#c8c8ce]">When I’m not coding, you’ll find me:</p>
              <ul className="space-y-1.5 pr-14 text-[13px]">{beyond.map(([Icon, t]) => <li key={t} className="flex items-start gap-2"><Icon size={14} className="mt-0.5 shrink-0 text-mut" />{t}</li>)}</ul>
              <Art src="/images/cat.png" className="absolute bottom-3 right-3 h-[58px] w-[58px] rounded-lg" fallback="linear-gradient(135deg,#2a2630,#15151a)" />
            </section>
          </div>
        </div>
        <div className="space-y-4">
          <section className="card">
            <h2 className="h3"><BarChart3 size={16} className="text-[#4c8dff]" />Tech Stack Overview</h2>
            <p className="text-[13px] font-semibold">Top Skills</p>
            <div className="mb-4 mt-2 flex flex-wrap gap-2">{['Next.js', 'Backend', 'TypeScript', 'AI/Tools', 'Machine Learning'].map((t) => <span key={t} className="chip">{t}</span>)}</div>
            <p className="mb-2 text-[13px] font-semibold">Interest Areas</p>
            <div className="space-y-2.5">{stack.slice(0, 3).map((s) => <Stat key={s.label} {...s} />)}</div>
          </section>
          <section className="card">
            <h2 className="h3"><MessageSquare size={16} className="text-mut" />Let’s Build</h2>
            <p className="text-[13px] leading-relaxed text-[#c8c8ce]">I am actively seeking roles in Full Stack Development, AI/ML, and Cloud engineering. If you have an exciting project or opportunity, let’s talk!</p>
          </section>
        </div>
      </div>
    </Fade>
  );
}

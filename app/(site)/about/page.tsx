import { Info, Lightbulb, UserRound, Tent, BookOpen, Briefcase, GraduationCap, Headphones, Mountain, PenLine, User } from 'lucide-react';
import Art from '@/components/Art';
import Fade from '@/components/Fade';
import PageHeader from '@/components/PageHeader';
import Timeline from '@/components/Timeline';
import { academics, experience } from '@/lib/data';

const beyond = [[BookOpen, 'Reading sci-fi novels'], [Headphones, 'Listening to lofi music'], [Mountain, 'Hiking in the foothills of the Himalayas'], [PenLine, 'Occasional blogging']] as const;

export default function AboutPage() {
  return (
    <Fade>
      <PageHeader icon={<Info size={22} className="text-[#4c9be8]" />} title="About Me" />
      <div className="grid gap-4 px-5 sm:px-9 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {/* Who I Am */}
          <section className="card !p-5">
            <h2 className="h3"><User size={16} className="text-mut" />Origin Story</h2>
            <p className="mb-3 text-[13px] leading-relaxed">Hi, I&apos;m <b>Paramveer</b>, a <b>Full Stack Developer</b> from Chandigarh, India. My journey into tech started with a curiosity about how things work, leading me to a Bachelor of Computer Applications (BCA) at Chandigarh University.</p>
            <p className="text-[13px] leading-relaxed text-[#c8c8ce]">From my first React project to exploring AI, cloud and DevOps, I enjoy turning ideas into products that ship — and learning something new with every commit.</p>
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <section className="card">
              <h2 className="h3"><UserRound size={16} className="text-mut" />Who I Am</h2>
              <p className="text-[13px] leading-relaxed text-[#c8c8ce]">Passionate about building impactful software, exploring artificial intelligence, and solving real-world challenges through code.</p>
            </section>
            <section className="card">
              <h2 className="h3"><Lightbulb size={16} className="text-[#f5c542]" />A Dev&apos;s Philosophy</h2>
              <p className="mb-2 text-[13px] font-bold">&quot;Building scalable solutions, one commit at a time.&quot;</p>
              <p className="text-[13px] leading-relaxed text-[#c8c8ce]">Clean code, performance, and continuous improvement.</p>
            </section>
          </div>

          {/* Academics & Experience */}
          <div className="grid gap-4 md:grid-cols-2">
            <section className="card !p-5">
              <h2 className="h3"><GraduationCap size={16} className="text-[#7ab4ff]" />Academics</h2>
              <Timeline items={academics} />
            </section>
            <section className="card !p-5">
              <h2 className="h3"><Briefcase size={16} className="text-[#c9a66b]" />Experience</h2>
              <Timeline items={experience} />
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <section className="card relative">
            <h2 className="h3"><Tent size={16} className="text-[#f5a142]" />Beyond the Screen</h2>
            <p className="mb-2 text-xs text-[#c8c8ce]">When I&apos;m not coding, you&apos;ll find me:</p>
            <ul className="space-y-1.5 pr-14 text-[13px]">{beyond.map(([Icon, t]) => <li key={t} className="flex items-start gap-2"><Icon size={14} className="mt-0.5 shrink-0 text-mut" />{t}</li>)}</ul>
            <Art src="/images/cat.png" className="absolute bottom-3 right-3 h-[58px] w-[58px] rounded-lg" fallback="linear-gradient(135deg,#2a2630,#15151a)" />
          </section>
        </div>
      </div>
    </Fade>
  );
}

import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
import Fade from '@/components/Fade';
import PageHeader from '@/components/PageHeader';
import SkillsView from '@/components/SkillsView';

export default function SkillsPage() {
  return (
    <Fade>
      <PageHeader icon={<Wrench size={22} className="text-[#7ab4ff]" />} title="Skills" sub="Technologies and tools I work with ✨" action={<Link href="/projects" className="btn">Explore My Projects <ArrowRight size={14} /></Link>} />
      <SkillsView />
    </Fade>
  );
}

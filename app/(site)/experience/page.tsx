import { Briefcase } from 'lucide-react';
import Fade from '@/components/Fade';
import PageHeader from '@/components/PageHeader';
import Timeline from '@/components/Timeline';
import { experience } from '@/lib/data';

export default function ExperiencePage() {
  return (
    <Fade>
      <PageHeader icon={<Briefcase size={22} className="text-[#c9a66b]" />} title="Experience" sub="Where I’ve worked and what I’ve learned." />
      <div className="px-5 sm:px-9"><section className="card !p-6"><Timeline items={experience} big /></section></div>
    </Fade>
  );
}

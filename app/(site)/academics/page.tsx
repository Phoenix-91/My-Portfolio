import { GraduationCap } from 'lucide-react';
import Fade from '@/components/Fade';
import PageHeader from '@/components/PageHeader';
import Timeline from '@/components/Timeline';
import { academics } from '@/lib/data';

export default function AcademicsPage() {
  return (
    <Fade>
      <PageHeader icon={<GraduationCap size={22} className="text-[#7ab4ff]" />} title="Academics" sub="My education so far." />
      <div className="px-5 sm:px-9"><section className="card !p-6"><Timeline items={academics} big /></section></div>
    </Fade>
  );
}

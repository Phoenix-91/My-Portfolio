import { Rocket } from 'lucide-react';
import Fade from '@/components/Fade';
import PageHeader from '@/components/PageHeader';
import ProjectsView from '@/components/ProjectsView';

export default function ProjectsPage() {
  return (
    <Fade>
      <PageHeader avatar="code" icon={<Rocket size={22} className="text-[#e5675a]" />} title="Projects" sub="A collection of projects that I’ve built, from ideas to production." />
      <ProjectsView />
    </Fade>
  );
}

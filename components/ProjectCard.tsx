import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/lib/data';
import Art from './Art';

export default function ProjectCard({ p, compact = false }: { p: Project; compact?: boolean }) {
  return (
    <article className="card flex flex-col overflow-hidden !p-0">
      <Art src={p.image} className={compact ? 'h-[84px]' : 'h-[110px]'} />
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="flex items-center gap-1.5 text-[13px] font-semibold">{p.name}<ExternalLink size={11} className="text-mut" /></h3>
        <p className="text-[11px] leading-snug text-mut">{compact ? p.sub : p.desc}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">{p.tags.slice(0, compact ? 2 : 4).map((t) => <span key={t} className="chip !text-[10px]">{t}</span>)}</div>
        {!compact && p.github && (
          <p className="mt-auto pt-2 text-[11px] text-mut">
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white"><Github size={11} />GitHub ↗</a>
          </p>
        )}
      </div>
    </article>
  );
}

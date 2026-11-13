import type { TimelineItem } from '@/lib/data';

export default function Timeline({ items, big = false }: { items: TimelineItem[]; big?: boolean }) {
  return (
    <ol className={big ? 'space-y-7' : 'space-y-4'}>
      {items.map((t, i) => (
        <li key={t.title} className="relative flex gap-3 pl-5">
          <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[#666]" />
          {i < items.length - 1 && <span className="absolute left-[3.5px] top-4 h-[calc(100%+0.25rem)] w-px bg-line" />}
          {t.when && <span className="w-[104px] shrink-0 text-xs text-mut">{t.when}</span>}
          <div>
            <b className={big ? 'text-base font-semibold' : 'text-[13px] font-semibold'}>{t.title}</b>
            <p className="text-xs text-mut">{t.place}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

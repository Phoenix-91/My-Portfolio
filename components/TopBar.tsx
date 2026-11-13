import { ChevronLeft, ChevronRight, Laptop, Menu, MoreHorizontal, RotateCw, Search } from 'lucide-react';

export default function TopBar({ title, home = false }: { title: string; home?: boolean }) {
  return (
    <header className="sticky top-0 z-40 flex h-10 items-center justify-between border-b border-line bg-[#151515] px-4 text-xs">
      <div className="flex items-center gap-3.5">
        <span className="flex gap-1.5" aria-hidden>
          <i className="block h-3 w-3 rounded-full bg-[#ff5f57]" /><i className="block h-3 w-3 rounded-full bg-[#febc2e]" /><i className="block h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        {home ? <Menu size={15} className="text-mut" /> : (<span className="flex gap-2 text-mut"><ChevronLeft size={15} /><ChevronRight size={15} /><RotateCw size={13} /></span>)}
        <span className="flex items-center gap-1.5 text-[#d4d4d8]"><Laptop size={13} />{title}</span>
      </div>
      <div className="flex items-center gap-3.5 text-mut">
        <Search size={14} /><MoreHorizontal size={15} />
        <span className="rounded-md border border-line px-2.5 py-1 text-[11px] text-[#d4d4d8]">Built with Notion</span>
      </div>
    </header>
  );
}

'use client';
import { motion } from 'framer-motion';

export default function Stat({ label, value, color, labelClass = 'w-[68px]' }: { label: string; value: number; color: string; labelClass?: string }) {
  return (
    <div className="flex items-center gap-2.5 text-xs">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
      <span className={`${labelClass} shrink-0 text-[#c8c8ce]`}>{label}</span>
      <span className="h-[5px] flex-1 overflow-hidden rounded-full bg-[#2a2a2e]">
        <motion.span className="block h-full rounded-full" style={{ background: color }} initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 0.8, ease: 'easeOut' }} />
      </span>
      <span className="w-8 text-right text-mut">{value}%</span>
    </div>
  );
}

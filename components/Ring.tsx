'use client';
import { motion } from 'framer-motion';

export default function Ring({ value, size = 96, stroke = 9, className = '' }: { value: number; size?: number; stroke?: number; className?: string }) {
  return (
    <div className={`relative grid shrink-0 place-items-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r="42" fill="none" stroke="#2a2a2e" strokeWidth={stroke} />
        <motion.circle cx="50" cy="50" r="42" fill="none" stroke="url(#rg)" strokeWidth={stroke} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: value / 100 }} transition={{ duration: 1, ease: 'easeOut' }} />
        <defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8fb4ff" /><stop offset="1" stopColor="#5b8def" /></linearGradient></defs>
      </svg>
      <b className="absolute font-semibold" style={{ fontSize: size * 0.22 }}>{value}%</b>
    </div>
  );
}

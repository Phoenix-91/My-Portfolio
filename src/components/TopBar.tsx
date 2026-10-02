'use client';
import { useNow } from '@/hooks/useNow';
import { DAYS, MONTHS, pad } from '@/lib/date';

export default function TopBar() {
  const n = useNow();
  return (
    <div className="top">
      <div className="in">
        <span>{n ? <><b>{DAYS[n.getDay()]}</b>, {n.getDate()} {MONTHS[n.getMonth()]} {n.getFullYear()}</> : '\u00a0'}</span>
        <span>{n ? `${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}` : '\u00a0'}</span>
      </div>
    </div>
  );
}

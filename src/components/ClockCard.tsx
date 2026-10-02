'use client';
import { useNow } from '@/hooks/useNow';
import { pad } from '@/lib/date';

export default function ClockCard() {
  const n = useNow();
  const h = n?.getHours() ?? 0;
  const m = n?.getMinutes() ?? 0;
  let pc = 0;
  if (n) {
    const y = n.getFullYear();
    const a = +new Date(y, 0, 1);
    pc = Math.round(((+n - a) / (+new Date(y + 1, 0, 1) - a)) * 100);
  }
  return (
    <div className="card">
      <h3>Right now</h3>
      <div className="clock">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="29" fill="none" stroke="var(--line)" strokeWidth="3" />
          <path d="M32 6v4M32 54v4M6 32h4M54 32h4" stroke="var(--mute)" strokeWidth="2" />
          <line x1="32" y1="32" x2="32" y2="18" stroke="var(--text)" strokeWidth="3" strokeLinecap="square" transform={`rotate(${(h % 12) * 30 + m / 2} 32 32)`} />
          <line x1="32" y1="32" x2="32" y2="11" stroke="var(--blue)" strokeWidth="2" strokeLinecap="square" transform={`rotate(${m * 6} 32 32)`} />
          <rect x="30" y="30" width="4" height="4" fill="var(--orange)" />
        </svg>
        <div>
          <div id="digital">{n ? `${pad(h)}:${pad(m)}` : '--:--'}</div>
          <div style={{ color: 'var(--mute)', fontSize: 12 }}>local time</div>
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: 12, color: 'var(--mute)' }}>Year {pc}% complete</div>
      <div className="bar"><i style={{ width: `${pc}%` }} /></div>
    </div>
  );
}

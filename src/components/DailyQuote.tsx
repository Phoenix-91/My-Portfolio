'use client';
import PixelImage from './PixelImage';
import { A } from '@/data/assets';
import { useNow } from '@/hooks/useNow';
import { quoteFor } from '@/lib/quote';
import { DAYS, MONTHS } from '@/lib/date';

/** Changes every day (local time). The cat lounges on top of the card. */
export default function DailyQuote() {
  const now = useNow(60_000);
  const q = now ? quoteFor(now) : null;
  return (
    <div className="card quote">
      <PixelImage a={A.cat} className="cat" />
      <h3>Quote of the day{now ? ` · ${DAYS[now.getDay()].slice(0, 3)} ${now.getDate()} ${MONTHS[now.getMonth()].slice(0, 3)}` : ''}</h3>
      <blockquote>{q ? `“${q.text}”` : '\u00a0'}</blockquote>
      <cite>{q ? `— ${q.author}` : '\u00a0'}</cite>
    </div>
  );
}

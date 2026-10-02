import { QUOTES } from '@/data/quotes';
import type { Quote } from '@/types';

/** Same quote all day (local time), next one tomorrow. */
export function quoteFor(d: Date): Quote {
  const day = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000);
  return QUOTES[day % QUOTES.length];
}

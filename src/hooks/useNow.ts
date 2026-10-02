'use client';
import { useEffect, useState } from 'react';

/** Current time, ticking. Null on the server and first paint to avoid hydration mismatch. */
export function useNow(ms = 1000): Date | null {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}

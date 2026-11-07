"use client";
import { useCallback, useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { githubUser } from "@/lib/data";
type Day = { date: string; count: number; level: number };
const lv = ["bg-white/[.06]", "bg-white/20", "bg-white/40", "bg-white/65", "bg-white"];
// Live GitHub contribution graph (fetched from /api/github, cached for an hour).
export default function ActivityGrid({ weeks = 53 }: { weeks?: number }) {
  const [days, setDays] = useState<Day[] | null>(null); const [err, setErr] = useState(false);
  const load = useCallback(async () => {
    setErr(false); setDays(null);
    try { const r = await fetch("/api/github"); const j = await r.json(); if (!r.ok) throw new Error(); setDays(j.days); } catch { setErr(true); }
  }, []);
  useEffect(() => { load(); }, [load]);
  if (err) return (<p role="alert" className="mt-4 text-sm text-zinc-400">Couldn&apos;t load GitHub activity. <button onClick={load} className="ml-1 inline-flex items-center gap-1 text-white underline"><RefreshCw size={12} />Retry</button></p>);
  let cells: (Day | null)[] = [];
  if (days) { cells = [...Array(new Date(days[0].date + "T00:00:00Z").getUTCDay()).fill(null), ...days]; while (cells.length % 7) cells.push(null); cells = cells.slice(-weeks * 7); }
  const total = cells.reduce((a, d) => a + (d?.count ?? 0), 0);
  return (
    <>
      <div aria-hidden className="mt-4 grid grid-flow-col grid-rows-7 gap-[3px]" style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0,1fr))` }}>
        {(days ? cells : Array.from({ length: weeks * 7 }, () => null)).map((d, i) => (
          <i key={i} title={d ? `${d.count} contributions on ${d.date}` : undefined} className={`aspect-square rounded-[2px] ${days ? (d ? lv[d.level] : "") : "animate-pulse bg-white/[.06]"}`} />))}
      </div>
      <p role="status" className="mt-3 flex justify-between text-xs text-zinc-500"><span>{days ? `${total} contributions in the last ${weeks >= 52 ? "year" : "6 months"}` : "Loading…"}</span><a href={`https://github.com/${githubUser}`} className="hover:text-white">@{githubUser}</a></p>
    </>
  );
}

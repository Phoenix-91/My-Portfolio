"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const r = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const o = { v: 0 }; const t = gsap.to(o, { v: to, duration: 1.4, delay: 0.3, ease: "power2.out", onUpdate: () => { if (r.current) r.current.textContent = Math.round(o.v) + suffix; } });
    return () => { t.kill(); };
  }, [to, suffix]);
  return <span ref={r}>{to}{suffix}</span>;
}

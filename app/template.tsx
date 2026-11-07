"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;
// Re-mounts on every navigation, so each page gets a staggered GSAP entrance.
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useIso(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo("[data-reveal], .card", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.06, clearProps: "transform,opacity" });
      gsap.fromTo("[data-line]", { scaleY: 0, transformOrigin: "top" }, { scaleY: 1, duration: 1, ease: "power2.out", delay: 0.2 });
    }, ref);
    return () => mm.revert();
  }, []);
  return <div ref={ref}>{children}</div>;
}

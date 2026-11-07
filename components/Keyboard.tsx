"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
// Isometric 3D keycap cluster drawn in SVG, with orbit ring.
const S = 40, P = (x: number, y: number, z: number) => `${((x - y) * 0.866 * S).toFixed(1)},${(((x + y) * 0.5) * S - z * S).toFixed(1)}`;
type B = { x: number; y: number; w: number; d: number; z: number; h: number; big?: boolean };
const boxes: B[] = [{ x: 0.1, y: 0.1, w: 4.2, d: 4.2, z: 0, h: 0.6 }, { x: 0.3, y: 0.3, w: 2.6, d: 2.6, z: 0.6, h: 1.9, big: true }];
[0.3, 1.3, 2.3].forEach((v) => { boxes.push({ x: 3.1, y: v, w: 0.9, d: 0.9, z: 0.6, h: 0.6 }, { x: v, y: 3.3, w: 0.9, d: 0.9, z: 0.6, h: 0.6 }); });
const poly = (pts: string[], f: string, s = "rgba(255,255,255,.08)") => <polygon points={pts.join(" ")} fill={f} stroke={s} strokeWidth=".8" strokeLinejoin="round" />;
export default function Keyboard() {
  const root = useRef<HTMLDivElement>(null), float = useRef<SVGGElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(root.current, { transformPerspective: 900 });
      gsap.from(root.current, { opacity: 0, scale: 0.92, duration: 1, ease: "power3.out" });
      gsap.to(float.current, { y: -9, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".twinkle", { opacity: 0.15, duration: 1.4, yoyo: true, repeat: -1, stagger: 0.6 });
      const rx = gsap.quickTo(root.current, "rotationY", { duration: 0.8 }), ry = gsap.quickTo(root.current, "rotationX", { duration: 0.8 });
      const mv = (e: MouseEvent) => { rx((e.clientX / innerWidth - 0.5) * 10); ry(-(e.clientY / innerHeight - 0.5) * 8); };
      window.addEventListener("mousemove", mv); return () => window.removeEventListener("mousemove", mv);
    }, root);
    return () => mm.revert();
  }, []);
  return (
    <div ref={root} aria-hidden className="relative mx-auto w-full max-w-[40rem]">
      <svg viewBox="0 0 520 340" className="w-full overflow-visible">
        <ellipse cx="260" cy="205" rx="255" ry="80" transform="rotate(-14 260 190)" fill="none" stroke="rgba(255,255,255,.16)" />
        <ellipse cx="260" cy="160" rx="150" ry="115" fill="rgba(255,255,255,.05)" />
        <g ref={float}><g transform="translate(260,118)">
          {[...boxes].sort((a, b) => a.x + a.y - (b.x + b.y)).map((b, i) => { const t = b.z + b.h, big = b.big; return (
            <g key={i}>
              {poly([P(b.x, b.y + b.d, b.z), P(b.x + b.w, b.y + b.d, b.z), P(b.x + b.w, b.y + b.d, t), P(b.x, b.y + b.d, t)], "#0c0d0f")}
              {poly([P(b.x + b.w, b.y + b.d, b.z), P(b.x + b.w, b.y, b.z), P(b.x + b.w, b.y, t), P(b.x + b.w, b.y + b.d, t)], "#060708")}
              {poly([P(b.x, b.y, t), P(b.x + b.w, b.y, t), P(b.x + b.w, b.y + b.d, t), P(b.x, b.y + b.d, t)], big ? "#15171a" : "#111315", big ? "rgba(255,255,255,.3)" : undefined)}
              {big && <text transform={`translate(${((b.x + b.w / 2) - (b.y + b.d / 2)) * 0.866 * S},${(((b.x + b.w / 2) + (b.y + b.d / 2)) * 0.5) * S - t * S}) matrix(.866 .5 -.866 .5 0 0)`}
                fontSize={S * 1.7} fontWeight="900" fontStyle="italic" textAnchor="middle" dominantBaseline="central" fill="var(--accent)" style={{ filter: "drop-shadow(0 0 5px rgba(255,255,255,.35))" }}>P</text>}
            </g>); })}
        </g></g>
        <circle className="twinkle" cx="130" cy="60" r="1.5" fill="var(--accent)" /><circle className="twinkle" cx="440" cy="40" r="1.5" fill="var(--accent)" />
      </svg>
    </div>
  );
}

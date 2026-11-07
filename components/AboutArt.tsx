// Original night-skyline illustration (SVG), no external image needed.
export default function AboutArt() {
  const bs = [[0,70,16,90],[14,50,14,110],[28,82,18,78],[48,40,12,120],[62,62,16,98],[78,76,14,84],[92,48,16,112],[108,72,12,88]];
  return (
    <svg viewBox="0 0 120 150" className="h-full w-full" role="img" aria-label="Developer silhouette against a night skyline" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0f0f10" /><stop offset="1" stopColor="#222224" /></linearGradient></defs>
      <rect width="120" height="150" fill="url(#sky)" />
      {bs.map(([x,y,w,h],i)=><g key={i}><rect x={x} y={y} width={w} height={h} fill="#0a0a0b" />{[0,1,2,3].map(r=><rect key={r} x={x+3+(r%2)*6} y={y+6+r*14} width="2" height="3" fill="#d4d4d8" opacity={(i+r)%3?.7:.15} />)}</g>)}
      <rect x="55" y="28" width="3" height="14" fill="#0a0a0b" />
      <path d="M26 150 C28 118 40 106 60 106 C80 106 92 118 94 150Z" fill="#050505" />
      <circle cx="60" cy="92" r="14" fill="#050505" /><path d="M44 96 C46 76 74 76 76 96 C70 88 50 88 44 96Z" fill="#161618" />
    </svg>
  );
}

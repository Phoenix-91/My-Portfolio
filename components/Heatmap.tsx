export default function Heatmap({ weeks = 52, gap = 3 }: { weeks?: number; gap?: number }) {
  const cells = Array.from({ length: weeks * 7 }, (_, i) => {
    const r = Math.abs(Math.sin((i + 1) * 12.9898) * 43758.5453) % 1;
    return r > 0.94 ? 4 : r > 0.86 ? 3 : r > 0.7 ? 2 : r > 0.5 ? 1 : 0;
  });
  return (
    <div className="grid grid-flow-col grid-rows-7" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)`, gap }} aria-hidden>
      {cells.map((l, i) => <i key={i} className={`l${l} aspect-square rounded-[2px]`} />)}
    </div>
  );
}

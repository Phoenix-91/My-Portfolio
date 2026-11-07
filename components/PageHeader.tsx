export default function PageHeader({ title, sub }: { title: string; sub?: string }) {
  return (<header data-reveal className="mb-[2.4rem]"><h1 className="text-3xl font-bold tracking-tight text-white md:text-[2.8rem] md:leading-tight">{title}</h1>{sub && <p className="mt-2 max-w-[52rem] text-zinc-400">{sub}</p>}</header>);
}

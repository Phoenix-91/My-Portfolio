import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SkillChip from "@/components/SkillChip";
import { skillGroups, aiTech } from "@/lib/data";
export const metadata: Metadata = { title: "Skills", description: "Frontend, backend, database, DevOps and AI/ML skills of Paramveer Rana." };
export default function Skills() {
  return (
    <>
      <PageHeader title="Full Stack Development" sub="Building scalable web applications and exploring AI and modern development." />
      <div className="grid gap-[1.4rem] sm:grid-cols-2 xl:grid-cols-4">
        {Object.entries(skillGroups).map(([cat, items]) => (
          <div key={cat} className="card p-[1.6rem] transition hover:-translate-y-1 hover:border-white/20"><h2 className="font-semibold text-white">{cat}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2">{items.map((s) => <SkillChip key={s} name={s} />)}</ul></div>))}
      </div>
      <h2 data-reveal className="mb-[1.6rem] mt-[4rem] text-2xl font-bold text-white md:text-[2.2rem]">AI/ML &amp; Problem Solving</h2>
      <div className="grid gap-[1.4rem] md:grid-cols-[1.6fr_1fr]">
        <div className="card p-[1.6rem]"><h3 className="font-semibold text-white">AI/ML Technologies</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">{aiTech.map((s) => <SkillChip key={s} name={s} />)}</ul></div>
        <div className="card p-[1.6rem]"><h3 className="font-semibold text-white">Problem Solving</h3><p className="mt-3 text-sm leading-relaxed text-zinc-400">Regular data-structures and algorithms practice, focused on clean, efficient solutions.</p></div>
      </div>
    </>
  );
}

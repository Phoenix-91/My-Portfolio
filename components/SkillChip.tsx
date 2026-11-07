import { skillIcons } from "@/lib/icons";
export default function SkillChip({ name }: { name: string }) {
  const m = skillIcons[name];
  return (<li className="chip w-full gap-[.45rem] px-[.6rem] py-[.4rem] text-[.75rem]">{m && <m.Icon size={12} color={m.color} />}<span className="whitespace-nowrap">{name}</span></li>);
}

import { ICONS } from '@/data/icons';

export default function SkillIcon({ name }: { name: string }) {
  if (name === 'cicd') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
        <path d="M12 12C9 6 3 6 3 12s6 6 9 0 9-6 9 0-6 6-9 0z" />
      </svg>
    );
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={ICONS[name]} /></svg>;
}

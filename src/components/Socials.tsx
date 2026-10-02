import { SITE } from '@/data/site';

const ICON = {
  github: 'M8 0a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.200.8a7.600 7.600 0 0 1 4 0c1.500-1 2.200-.8 2.200-.8.4 1.100.2 1.900.1 2.100.5.6.8 1.300.8 2.100 0 3.100-1.900 3.700-3.600 3.900.3.3.5.8.5 1.500v2.200c0 .2.1.5.6.4A8 8 0 0 0 8 0z',
  linkedin: 'M1 5.500h3V15H1V5.500zM2.500 1a1.700 1.700 0 1 1 0 3.400 1.700 1.700 0 0 1 0-3.400zM6 5.500h2.900v1.300c.4-.8 1.400-1.500 2.900-1.500 3 0 3.600 2 3.600 4.600V15h-3v-4.600c0-1.100 0-2.500-1.500-2.500s-1.800 1.200-1.800 2.400V15H6V5.500z',
  leetcode: 'M10.500 1.500 9.700 2.300 3 9a2.500 2.500 0 0 0 0 3.500l1 1a2.500 2.500 0 0 0 3.500 0l1.800-1.800-1-1-1.800 1.800a1 1 0 0 1-1.500 0l-1-1a1 1 0 0 1 0-1.500l6.700-6.700-1.200-1.100zM9.500 8.500h5v1.500h-5V8.500z',
  email: 'M1 3h14v10H1V3zm1.500 1.500v.3L8 8.800l5.500-4v-.3h-11zm11 2.200L8 10.700 2.500 6.700v5.800h11V6.700z',
};

const LINKS = [
  { label: 'GitHub', href: SITE.github, icon: ICON.github },
  { label: 'LinkedIn', href: SITE.linkedin, icon: ICON.linkedin },
  { label: 'LeetCode', href: SITE.leetcode, icon: ICON.leetcode },
  { label: 'Email', href: SITE.email, icon: ICON.email },
];

export default function Socials() {
  return (
    <div className="card links">
      <h3>Find me</h3>
      {LINKS.map((l) => (
        <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d={l.icon} /></svg>
          {l.label}
        </a>
      ))}
    </div>
  );
}

import type { Project } from '@/types';
import { SITE } from './site';

export const PROJECTS: Project[] = [
  { title: 'Project One', glyph: '</>', blurb: 'A short description of what this project does and the stack behind it.', live: '#', code: SITE.github },
  { title: 'Project Two', glyph: '{ }', blurb: 'Another build. Mention the problem it solves and one thing you learned.', live: '#', code: SITE.github },
  { title: 'Project Three', glyph: '>_', blurb: 'A third project, maybe a tool or a game, with a line about how it works.', live: '#', code: SITE.github },
];

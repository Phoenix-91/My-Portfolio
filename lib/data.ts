import { Atom, Bot, Boxes, Briefcase, Cloud, Database, GraduationCap, Github, Hexagon, Home, Leaf, Mail, Server, User, Wrench, type LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Paramveer Rana',
  role: ['Full Stack Developer', 'AI Enthusiast', 'Cloud & DevOps'],
  quote: 'Building scalable solutions, one commit at a time.',
  email: 'paramveerpc2211@gmail.com',
  github: 'github.com/phoenix-91',
  githubUsername: 'phoenix-91',
  linkedin: 'www.linkedin.com/in/paramveer-rana-719545324',
  leetcode: 'leetcode.com/u/Phoenix-91',
  site: 'paramveer.dev',
};

export const nav: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/skills', label: 'Skills', icon: Wrench },
  { href: '/projects', label: 'Projects', icon: Boxes },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export const COLORS = { blue: '#5b8def', green: '#3fb950', purple: '#9b6bf2', sky: '#7ab4ff' };

/* ── Skills ── */

export interface Skill {
  name: string;
  icon: string;         // react-icons identifier
  color: string;
}
export interface SkillGroup {
  tab: string;
  name: string;
  desc: string;
  skills: Skill[];
  icon: LucideIcon;
  ghost: LucideIcon;
  color: string;
}

export const skillGroups: SkillGroup[] = [
  {
    tab: 'Frontend', name: 'Frontend', desc: 'Building beautiful and responsive user interfaces.',
    skills: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#ffffff' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
    ],
    icon: Atom, ghost: Atom, color: '#4cc2ff',
  },
  {
    tab: 'Backend', name: 'Backend', desc: 'Scalable and robust server-side applications.',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { name: 'Express', icon: 'SiExpress', color: '#ffffff' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
    ],
    icon: Server, ghost: Hexagon, color: '#5b8def',
  },
  {
    tab: 'Backend', name: 'Database', desc: 'Managing and optimizing data for performance.',
    skills: [
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
      { name: 'Redis', icon: 'SiRedis', color: '#DC382D' },
    ],
    icon: Database, ghost: Leaf, color: '#5b8def',
  },
  {
    tab: 'AI / ML', name: 'AI / ML', desc: 'Building intelligent systems and exploring AI.',
    skills: [
      { name: 'NumPy', icon: 'SiNumpy', color: '#013243' },
      { name: 'Pandas', icon: 'SiPandas', color: '#150458' },
      { name: 'Matplotlib', icon: 'SiPlotly', color: '#3F4F75' },
    ],
    icon: Bot, ghost: Bot, color: '#b36bf2',
  },
  {
    tab: 'DevOps', name: 'DevOps & Cloud', desc: 'Deploying and scaling applications in the cloud.',
    skills: [
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5' },
      { name: 'AWS', icon: 'FaAws', color: '#FF9900' },
      { name: 'Linux', icon: 'SiLinux', color: '#FCC624' },
      { name: 'Nginx', icon: 'SiNginx', color: '#009639' },
      { name: 'CI/CD', icon: 'SiGithubactions', color: '#2088FF' },
    ],
    icon: Cloud, ghost: Cloud, color: '#4aa3ff',
  },
  {
    tab: 'Tools', name: 'Tools & Others', desc: 'Productivity and development tools I use daily.',
    skills: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'GitHub', icon: 'SiGithub', color: '#ffffff' },
    ],
    icon: Wrench, ghost: Github, color: '#5b8def',
  },
];

export const skillTabs = ['All Skills', 'Frontend', 'Backend', 'AI / ML', 'DevOps', 'Tools'];

export const homeChips = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express',
  'MongoDB', 'PostgreSQL', 'Redis', 'Python', 'NumPy', 'Pandas',
  'Docker', 'Kubernetes', 'AWS', 'Linux', 'Nginx', 'Git', 'CI/CD', 'Tailwind CSS',
];

export const stack = [
  { label: 'Frontend', value: 90, color: COLORS.blue },
  { label: 'Backend', value: 85, color: COLORS.sky },
  { label: 'AI / ML', value: 80, color: COLORS.green },
  { label: 'DevOps', value: 75, color: COLORS.green },
  { label: 'Tools', value: 90, color: COLORS.purple },
  { label: 'Database', value: 85, color: COLORS.sky },
];

/* ── Projects ── */

export interface Project {
  slug: string;
  name: string;
  sub: string;
  desc: string;
  tags: string[];
  cat: 'Web Apps' | 'AI / ML' | 'DevOps' | 'Other';
  image: string;
  github?: string;
}

export const projects: Project[] = [
  {
    slug: 'nexus-ai', name: 'Nexus AI', sub: 'AI Interview Preparation Platform',
    desc: 'An intelligent platform to prepare for interviews with AI-powered mock interviews, resume analysis and ATS checker.',
    tags: ['Next.js', 'TypeScript', 'Groq', 'MongoDB', 'Clerk', 'Tailwind'],
    cat: 'AI / ML', image: '/images/nexus.png',
    github: 'https://github.com/Phoenix-91/Nexus_AI.git',
  },
  {
    slug: 'typerush', name: 'TypeRush', sub: 'Typing Battle Game',
    desc: 'A real-time competitive typing battle game to challenge your speed and accuracy.',
    tags: ['React', 'Node.js', 'WebSocket', 'Tailwind'],
    cat: 'Web Apps', image: '/images/projects/chatflow.png',
    github: 'https://github.com/Phoenix-91/Typing-battle-',
  },
  {
    slug: 'papermind-ai', name: 'PaperMind AI', sub: 'Research Paper RAG',
    desc: 'AI-powered research paper assistant using Retrieval-Augmented Generation for deep paper analysis.',
    tags: ['Python', 'LangChain', 'FAISS', 'Groq'],
    cat: 'AI / ML', image: '/images/projects/mindsync.png',
    github: 'https://github.com/Phoenix-91/research-Rag.git',
  },
  {
    slug: 'pdf-rag', name: 'PDF RAG', sub: 'Chat with PDFs',
    desc: 'Chat with your PDF documents using RAG and Groq.',
    tags: ['Python', 'Flask', 'FAISS'],
    cat: 'AI / ML', image: '/images/projects/pdf-rag.png',
    github: 'https://github.com/Phoenix-91/pdf_RAG.git',
  },
];

export const featuredPoints = ['Real-time AI voice interviews', 'Resume analysis & ATS score', '30-day action plan', 'Multi-LLM support'];

/* ── Experience & Academics ── */

export interface TimelineItem { when?: string; title: string; place: string }
export const experience: TimelineItem[] = [
  { when: '2024 (3 Months)', title: 'React JS Developer Intern', place: 'The Entrepreneurship Network (TEN)' },
];
export const academics: TimelineItem[] = [
  { title: 'Chandigarh University', place: 'MCA (2026 – 2028)' },
  { title: 'Chandigarh University', place: 'BCA (2023 – 2026)' },
];

import { Atom, Bot, Boxes, Briefcase, Cloud, Database, GraduationCap, Github, Hexagon, Home, Leaf, Mail, Server, User, Wrench, type LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Paramveer Rana',
  role: ['Full Stack Developer', 'AI Enthusiast', 'Cloud & DevOps'],
  quote: 'Building scalable solutions, one commit at a time.',
  email: 'paramveer.rana.dev@email.com',
  github: 'github.com/paramveer-rana',
  linkedin: 'linkedin.com/in/paramveer-rana-dev',
  site: 'paramveer.dev',
};

export const nav: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/skills', label: 'Skills', icon: Wrench },
  { href: '/projects', label: 'Projects', icon: Boxes },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/academics', label: 'Academics', icon: GraduationCap },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export const COLORS = { blue: '#5b8def', green: '#3fb950', purple: '#9b6bf2', sky: '#7ab4ff' };

export interface SkillGroup { tab: string; name: string; desc: string; tags: string[]; icon: LucideIcon; ghost: LucideIcon; color: string }
export const skillGroups: SkillGroup[] = [
  { tab: 'Frontend', name: 'Frontend', desc: 'Building beautiful and responsive user interfaces.', tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'], icon: Atom, ghost: Atom, color: '#4cc2ff' },
  { tab: 'Backend', name: 'Backend', desc: 'Scalable and robust server-side applications.', tags: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI'], icon: Server, ghost: Hexagon, color: '#5b8def' },
  { tab: 'Backend', name: 'Database', desc: 'Managing and optimizing data for performance.', tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'], icon: Database, ghost: Leaf, color: '#5b8def' },
  { tab: 'AI / ML', name: 'AI / ML', desc: 'Building intelligent systems and exploring AI.', tags: ['PyTorch', 'TensorFlow', 'LangChain', 'Groq'], icon: Bot, ghost: Bot, color: '#b36bf2' },
  { tab: 'DevOps', name: 'DevOps & Cloud', desc: 'Deploying and scaling applications in the cloud.', tags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'], icon: Cloud, ghost: Cloud, color: '#4aa3ff' },
  { tab: 'Tools', name: 'Tools & Others', desc: 'Productivity and development tools I use daily.', tags: ['Git', 'GitHub', 'Linux', 'VS Code', 'Figma'], icon: Wrench, ghost: Github, color: '#5b8def' },
];
export const skillTabs = ['All Skills', 'Frontend', 'Backend', 'AI / ML', 'DevOps', 'Tools'];
export const homeChips = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Python', 'PyTorch', 'Machine Learning', 'AWS', 'Docker', 'Kubernetes'];

export const stack = [
  { label: 'Frontend', value: 90, color: COLORS.blue },
  { label: 'Backend', value: 85, color: COLORS.sky },
  { label: 'AI / ML', value: 80, color: COLORS.green },
  { label: 'DevOps', value: 75, color: COLORS.green },
  { label: 'Tools', value: 90, color: COLORS.purple },
  { label: 'Database', value: 85, color: COLORS.sky },
];

export interface Project { slug: string; name: string; sub: string; desc: string; tags: string[]; cat: 'Web Apps' | 'AI / ML' | 'DevOps' | 'Other'; image: string }
export const projects: Project[] = [
  { slug: 'nexus-ai', name: 'Nexus.AI', sub: 'AI Interview Preparation Platform', desc: 'An intelligent platform to prepare for interviews with AI-powered mock interviews, resume analysis and ATS checker.', tags: ['Next.js', 'TypeScript', 'Groq', 'MongoDB', 'Clerk', 'Tailwind'], cat: 'AI / ML', image: '/images/nexus.png' },
  { slug: 'chatflow', name: 'ChatFlow', sub: 'Real-time Chat App', desc: 'Real-time AI chatbot with multi-language translation and WebSockets.', tags: ['Next.js', 'Tailwind', 'MongoDB'], cat: 'Web Apps', image: '/images/projects/chatflow.png' },
  { slug: 'mindsync', name: 'MindSync', sub: 'Wellbeing Journal', desc: 'A wellbeing journal to track mood, habits and mental health.', tags: ['HTML', 'CSS', 'JS', 'PHP'], cat: 'Web Apps', image: '/images/projects/mindsync.png' },
  { slug: 'pdf-rag', name: 'PDF RAG', sub: 'Chat with PDFs', desc: 'Chat with your PDF documents using RAG and Groq.', tags: ['Python', 'Flask', 'FAISS'], cat: 'AI / ML', image: '/images/projects/pdf-rag.png' },
  { slug: 'recipe-ai', name: 'Recipe AI', sub: 'AI Recipes', desc: 'Get personalized recipes with AI recommendations.', tags: ['Next.js', 'OpenAI', 'Tailwind'], cat: 'AI / ML', image: '/images/projects/recipe-ai.png' },
];
export const featuredPoints = ['Real-time AI voice interviews', 'Resume analysis & ATS score', '30-day action plan', 'Multi-LLM support'];

export interface TimelineItem { when?: string; title: string; place: string }
export const experience: TimelineItem[] = [
  { when: '2024 – Present', title: 'BCA', place: 'Chandigarh University' },
  { when: '2024 (3 Months)', title: 'React JS Developer Intern', place: 'The Entrepreneurship Network (TEN)' },
];
export const academics: TimelineItem[] = [
  { title: 'Chandigarh University', place: 'BCA (2023 – 2026)' },
  { title: 'Sharda Sarvhit Kari Model School', place: '12th – Science (Non-Medical)' },
];

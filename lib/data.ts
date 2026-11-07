// All site content lives here. Replace TODO values with your real ones.
export const profile = {
  name: "Paramveer", surname: "Rana",
  title: "Full Stack Developer • AI Enthusiast • Problem Solver",
  tagline: "I build scalable web applications and explore the intersection of AI and modern development.",
  bio: "Hi, I'm Paramveer Rana, a BCA graduate and MCA student at Chandigarh University and passionate developer from Chandigarh. I love building products, solving complex problems, and constantly learning new technologies — from full-stack development to AI/ML.",
  email: "you@example.com", // TODO
  resume: "/resume.pdf",     // TODO: add public/resume.pdf
  socials: { github: "https://github.com/Phoenix-91", linkedin: "https://linkedin.com/in/", x: "https://x.com/" }, // TODO
  stats: [{ v: "10+", l: "Projects" }, { v: "MCA", l: "(2026–2028)" }, { v: "BCA", l: "(2023–2026)" }],
};
export const githubUser = "Phoenix-91";
export const nav = [
  { id: "home", label: "Home", href: "/" }, { id: "about", label: "About", href: "/about" }, { id: "skills", label: "Skills", href: "/skills" },
  { id: "projects", label: "Projects", href: "/projects" }, { id: "contact", label: "Contact", href: "/contact" },
];
export const featuredSkills = ["React","Next.js","TypeScript","Tailwind CSS","Node.js","Express","MongoDB","PostgreSQL","Redis","AWS","Docker","Kubernetes","Nginx","Git","Linux","Python","NumPy","Pandas","AI/ML","LLM APIs"];
export const skillGroups: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Python"],
  Databases: ["MongoDB", "PostgreSQL", "Redis"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "Nginx", "Git", "Linux"],
};
export const aiTech = ["Python", "NumPy", "Pandas", "PyTorch", "TensorFlow", "LLM APIs"]; // TODO: remove any you don't use
export const projects = [
  { name: "Nexus.AI", category: "AI/ML", desc: "An advanced AI platform for interview preparation with real-time voice conversation, ATS checker and personalized learning path.",
    stack: ["Next.js", "React", "Groq", "Clerk", "Tailwind"], image: "", github: "https://github.com/Phoenix-91", live: "" }, // TODO: image in /public + real links; add more projects
];
export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Chandigarh University", period: "2026 – 2028", status: "Pursuing" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Chandigarh University", period: "2023 – 2026", status: "Completed" },
];
// TODO: add your internship role, dates and what you worked on
export const experience = [{ role: "Intern", org: "The Entrepreneurship Network", period: "", note: "", logo: "/logos/ten.png" }];

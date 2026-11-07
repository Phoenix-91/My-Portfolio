import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiAmazonwebservices, SiDocker, SiKubernetes, SiPython, SiGit, SiLinux, SiTailwindcss, SiPytorch, SiTensorflow, SiNumpy, SiPandas, SiRedis, SiNginx } from "react-icons/si";
import { Sparkles, Bot } from "lucide-react";
import type { ComponentType } from "react";
export const skillIcons: Record<string, { Icon: ComponentType<{ size?: number | string; color?: string }>; color: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" }, "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" }, TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" }, Express: { Icon: SiExpress, color: "#E5E5E5" }, MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4E8DC8" }, AWS: { Icon: SiAmazonwebservices, color: "#FF9900" }, Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" }, Python: { Icon: SiPython, color: "#FFD43B" }, 
  Git: { Icon: SiGit, color: "#F05032" }, Linux: { Icon: SiLinux, color: "#FCC624" }, "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  NumPy: { Icon: SiNumpy, color: "#4D77CF" }, Pandas: { Icon: SiPandas, color: "#8F7CF0" }, Redis: { Icon: SiRedis, color: "#DC382D" }, Nginx: { Icon: SiNginx, color: "#009639" },
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" }, TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" }, "LLM APIs": { Icon: Bot, color: "#D4D4D8" },
  "AI/ML": { Icon: Sparkles, color: "#D4D4D8" },
};

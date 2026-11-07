import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectsView from "@/components/ProjectsView";
export const metadata: Metadata = { title: "Projects", description: "Selected full-stack and AI/ML projects by Paramveer Rana." };
export default function Projects() { return (<><PageHeader title="Projects Showroom" sub="Things I've built: full-stack apps and AI-powered products." /><ProjectsView /></>); }

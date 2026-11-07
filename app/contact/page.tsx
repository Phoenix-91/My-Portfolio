import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm, { CopyEmail } from "@/components/ContactForm";
import { nav, profile } from "@/lib/data";
export const metadata: Metadata = { title: "Contact", description: "Get in touch with Paramveer Rana for internships and projects." };
export default function Contact() {
  const soc = [[Github, profile.socials.github, "GitHub"], [Linkedin, profile.socials.linkedin, "LinkedIn"], [Twitter, profile.socials.x, "X"]] as const;
  return (
    <>
      <PageHeader title="Connect with Me" sub="Open to internships and interesting projects. Send a message and I'll get back to you." />
      <div className="card bg-gradient-to-br from-white/[.06] via-transparent to-transparent p-[2.2rem]">
        <h2 className="mb-5 text-lg font-semibold text-white">Contact Me</h2>
        <div className="grid gap-[2.4rem] md:grid-cols-[1fr_1.6fr]">
          <div className="space-y-4 text-sm"><CopyEmail />
            {soc.map(([I, h, l]) => (<a key={l} href={h} className="flex items-center gap-2 text-zinc-300 hover:text-white"><I size={15} />{l}</a>))}</div>
          <ContactForm /></div>
      </div>
      <footer data-reveal className="mt-[3rem] grid gap-8 border-t border-white/[.08] pt-8 text-sm text-zinc-400 sm:grid-cols-3">
        <div><p className="mb-3 font-medium text-white">Navigate</p><ul className="space-y-2">{nav.map((n) => <li key={n.id}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}</ul></div>
        <div><p className="mb-3 font-medium text-white">Elsewhere</p><ul className="space-y-2"><li><a href={profile.socials.github} className="hover:text-white">GitHub</a></li><li><a href={profile.socials.linkedin} className="hover:text-white">LinkedIn</a></li><li><a href={`mailto:${profile.email}`} className="hover:text-white">Email</a></li></ul></div>
        <p className="text-xs text-zinc-600">© 2026 Paramveer Rana. Built with Next.js, GSAP and Framer Motion.</p>
      </footer>
    </>
  );
}

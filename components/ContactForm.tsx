"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/lib/data";
export function CopyEmail() {
  const [ok, setOk] = useState(false);
  return (<button onClick={async () => { try { await navigator.clipboard.writeText(profile.email); setOk(true); setTimeout(() => setOk(false), 1800); } catch {} }} className="flex items-center gap-2 text-zinc-300 hover:text-white" aria-label="Copy email address">
    {ok ? <Check size={15} className="text-accent" /> : <Copy size={15} />}{profile.email}<span role="status" className="sr-only">{ok ? "Copied" : ""}</span></button>);
}
export default function ContactForm() {
  const [s, setS] = useState<"idle" | "sending" | "sent" | "error">("idle"); const [err, setErr] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setS("sending"); setErr(""); const form = e.currentTarget;
    try { const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form).entries())) });
      const j = await r.json(); if (!r.ok) throw new Error(j.error); setS("sent"); form.reset();
    } catch (x: any) { setErr(x.message || "Something went wrong."); setS("error"); }
  }
  const f = "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent";
  return (
    <form onSubmit={submit} aria-busy={s === "sending"} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div><label htmlFor="n" className="sr-only">Name</label><input id="n" name="name" required placeholder="Name" className={f} /></div>
        <div><label htmlFor="e" className="sr-only">Email</label><input id="e" name="email" type="email" required placeholder="Email" className={f} /></div></div>
      <label htmlFor="s" className="sr-only">Subject</label><input id="s" name="subject" placeholder="Subject" className={f} />
      <label htmlFor="m" className="sr-only">Message</label><textarea id="m" name="message" required minLength={10} rows={5} placeholder="Message" className={f} />
      <button disabled={s === "sending"} className="btn w-full justify-center bg-accent text-black hover:brightness-110 disabled:opacity-60">{s === "sending" ? "Sending…" : "Send message"}</button>
      <p role="status" className="min-h-5 text-sm">{s === "sent" && <span className="text-accent">Message sent. I&apos;ll reply soon.</span>}{s === "error" && <span className="text-red-400">{err} You can also email {profile.email} directly.</span>}</p>
    </form>
  );
}

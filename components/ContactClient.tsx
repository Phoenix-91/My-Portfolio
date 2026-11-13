'use client';
import { useState, type FormEvent } from 'react';
import { Check, Copy, Mail, Send, Tag, User, Pencil } from 'lucide-react';
import { profile } from '@/lib/data';

export function CopyEmail() {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setDone(true); setTimeout(() => setDone(false), 1500); } catch { /* clipboard unavailable */ }
  };
  return <button onClick={copy} aria-label="Copy email" className="text-mut hover:text-white">{done ? <Check size={13} className="text-[#3fb950]" /> : <Copy size={13} />}</button>;
}

const field = 'flex items-center gap-2 rounded-lg border border-line bg-[#1d1d20] px-3 py-2 text-[13px] focus-within:border-ac';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(d.get('subject')))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div><label htmlFor="n" className="mb-1.5 block text-xs">Name</label><div className={field}><User size={14} className="text-mut" /><input id="n" name="name" required placeholder="Name" className="w-full bg-transparent outline-none placeholder:text-mut" /></div></div>
        <div className="sm:pt-[22px]"><div className={field}><Mail size={14} className="text-mut" /><input name="email" type="email" required placeholder="Email Address" aria-label="Email address" className="w-full bg-transparent outline-none placeholder:text-mut" /></div></div>
      </div>
      <div><label htmlFor="s" className="mb-1.5 block text-xs">Subject</label><div className={field}><Tag size={14} className="text-mut" /><input id="s" name="subject" required placeholder="Subject" className="w-full bg-transparent outline-none placeholder:text-mut" /></div></div>
      <div className={`${field} items-start`}><Pencil size={14} className="mt-0.5 text-mut" /><textarea name="message" required rows={5} placeholder="Your Message" aria-label="Message" className="w-full resize-y bg-transparent outline-none placeholder:text-mut" /></div>
      <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4a52a8] py-2.5 text-[13px] font-semibold transition-colors hover:bg-[#5560c4]"><Send size={14} />Send Message</button>
      {sent && <p className="text-xs text-mut" role="status">Your mail app should open with the message ready to send.</p>}
    </form>
  );
}

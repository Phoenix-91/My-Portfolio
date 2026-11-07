import { NextResponse } from "next/server";
// Sends via Resend's REST API. Set RESEND_API_KEY and CONTACT_TO_EMAIL in .env.local
export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json().catch(() => ({}));
  if (!name || !/^\S+@\S+\.\S+$/.test(email || "") || (message || "").length < 10)
    return NextResponse.json({ error: "Enter your name, a valid email and a message of at least 10 characters." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ error: "The contact form isn't configured yet." }, { status: 503 });
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "Portfolio <onboarding@resend.dev>", to, reply_to: email, subject: `${subject || "Portfolio message"} — ${name}`, text: message }) });
  return r.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Couldn't send the message." }, { status: 502 });
}

import { NextResponse } from "next/server";
import { getResend, mailConfig } from "@/lib/resend";
import { escapeHtml, validateContact } from "@/lib/contact";
import type { ContactResponse } from "@/types/contact";


/* Tiny in-memory rate limit: 5 messages / 10 min / IP.
   Per server instance — fine for a portfolio; use Upstash/Redis for a strict limit on serverless. */
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const MAX = 5;
const MAX_BODY = 16 * 1024; // bytes — the form never needs more

function limited(ip: string) {
  const now = Date.now();

  // keep the map small: forget IPs whose last hit is outside the window
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (now - (times[times.length - 1] ?? 0) > WINDOW) hits.delete(key);
    }
  }

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX;
}

function clientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function reply(body: ContactResponse, status = 200) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return reply({ success: false, message: "Invalid request." }, 415);
  }

  let raw: unknown;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY) return reply({ success: false, message: "Message is too large." }, 413);
    raw = JSON.parse(text);
  } catch {
    return reply({ success: false, message: "Invalid request." }, 400);
  }

  const body = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const { ok, errors, data } = validateContact(body);

  // Honeypot filled → pretend it worked, send nothing.
  if (data.hp) return reply({ success: true, message: "Message sent." });

  if (!ok) {
    return reply({ success: false, message: "Please fix the highlighted fields.", errors }, 422);
  }

  if (limited(clientIp(request))) {
    return reply({ success: false, message: "Too many messages. Please try again later." }, 429);
  }

  const { to, from } = mailConfig();
  const subject = `New enquiry${data.topic ? ` · ${data.topic}` : ""} — ${data.name}`;

  try {
    const { error } = await getResend().emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        ...(data.phone ? [`Phone: ${data.phone}`] : []),
        ...(data.topic ? [`Topic: ${data.topic}`] : []),
        "",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px">
          <h2 style="margin:0 0 16px">New contact form message</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
          ${data.topic ? `<p><strong>Topic:</strong> ${escapeHtml(data.topic)}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
        </div>`,
    });

    if (error) {
      // e.g. unverified domain, or test sender used with a different recipient
      console.error("Resend error:", error);
      return reply({ success: false, message: "Couldn’t send your message. Please try again." }, 502);
    }

    return reply({ success: true, message: "Message sent." });
  } catch (err) {
    console.error("Contact route error:", err);
    return reply({ success: false, message: "Email service isn’t available right now." }, 500);
  }
}

import { site } from "@/content/site";
import type { ContactErrors, ContactPayload } from "@/types/contact";

/** Shared by the form (instant feedback) and the API route (the real check). */

export const CONTACT_LIMITS = { name: 80, email: 120, phone: 30, message: 4000 } as const;

/** The only topics the form can send — the route rejects anything else. */
export const CONTACT_TOPICS = [...site.offers, "Something else"] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+()\-\s.]{6,30}$/;

/** One line only: control characters (incl. CR/LF) would let someone inject mail headers. */
const oneLine = (v: unknown) =>
  String(v ?? "")
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001F\u007F\u2028\u2029]+/g, " ")
    .trim();

/** Message keeps its line breaks, loses every other control character. */
const multiLine = (v: unknown) =>
  String(v ?? "")
    .replace(/\r\n?/g, "\n")
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();

export function validateContact(input: Partial<Record<keyof ContactPayload, unknown>>): {
  ok: boolean;
  errors: ContactErrors;
  data: ContactPayload;
} {
  const topic = oneLine(input.topic);

  const data: ContactPayload = {
    name: oneLine(input.name),
    email: oneLine(input.email),
    phone: oneLine(input.phone),
    topic: (CONTACT_TOPICS as readonly string[]).includes(topic) ? topic : "",
    message: multiLine(input.message),
    hp: oneLine(input.hp),
  };

  const errors: ContactErrors = {};

  if (data.name.length < 2) errors.name = "Please tell me your name.";
  else if (data.name.length > CONTACT_LIMITS.name) errors.name = "That name is too long.";

  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email.";
  else if (data.email.length > CONTACT_LIMITS.email) errors.email = "That email is too long.";

  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = "Use digits, spaces and + only.";

  if (data.message.length < 10) errors.message = "Add a few more words (10+ characters).";
  else if (data.message.length > CONTACT_LIMITS.message)
    errors.message = "Message is too long — keep it under 4000 characters.";

  return { ok: Object.keys(errors).length === 0, errors, data };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

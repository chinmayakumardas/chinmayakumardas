import { Resend } from "resend";
import { site } from "@/content/site";

let client: Resend | null = null;

/** Created on first use, so a missing key never breaks `next build`. */
export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Missing RESEND_API_KEY environment variable.");
  client ??= new Resend(apiKey);
  return client;
}

/**
 * Where contact mail goes and who it appears to come from. Set in `.env`:
 *   CONTACT_TO_EMAIL    inbox that receives enquiries   (default: site.email)
 *   CONTACT_FROM_EMAIL  "Name <address@your-domain>"     (default: Resend's test sender)
 *
 * Resend's test sender (onboarding@resend.dev) only delivers to the email that owns the
 * Resend account. To send anywhere else, verify your domain in Resend and set CONTACT_FROM_EMAIL.
 */
export function mailConfig() {
  return {
    to: process.env.CONTACT_TO_EMAIL?.trim() || site.email,
    from: process.env.CONTACT_FROM_EMAIL?.trim() || "Portfolio <onboarding@resend.dev>",
  };
}

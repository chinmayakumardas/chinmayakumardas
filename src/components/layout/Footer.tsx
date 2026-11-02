import Link from "next/link";
import { site, socialLinks } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";

/* ------------------------------------------------------------------ */
/* Content — same three link columns as the reference footer.          */
/* Change labels / hrefs here only.                                    */
/* ------------------------------------------------------------------ */

const tagline =
  "We help you grow your online or offline business with our cost-effective solutions.";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

/* Soft film-grain, drawn inline so there is no extra image to load. */
const grain =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const linkClass =
  "block text-[13px] font-medium leading-none text-white";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#141414] text-white">
      {/* grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{ backgroundImage: grain }}
      />

      <div className="flex min-h-[420px] w-full flex-col justify-between gap-16 px-[var(--page-x)] pb-8 pt-12 sm:min-h-[480px] sm:pt-16 lg:min-h-[540px] lg:pt-24 lg:pb-10">
        {/* ---------- top: tagline + contact ---------- */}
      <div className="max-w-[26rem]">
  <p className="text-[16px] leading-[1.3] tracking-[-0.03em] text-white/60 md:text-[20px]">
    {tagline}
  </p>

  <a
    href={`mailto:${site.email}`}
    className="mt-7 block break-all text-[clamp(1.2rem,2vw,1.65rem)] font-medium leading-tight tracking-[-0.04em] text-white"
  >
    <FlipText>{site.email}</FlipText>
  </a>

  <p className="mt-2 text-[12px] font-medium text-white/60">
    Based in {site.location}
  </p>
</div>

        {/* ---------- bottom: link columns + credit ---------- */}
        <div className="grid grid-cols-2 items-end gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkClass}>
                  <FlipText>{l.label}</FlipText>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkClass}>
                  <FlipText>{l.label}</FlipText>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <FlipText>{s.label}</FlipText>
                </a>
              </li>
            ))}
          </ul>

          <p className="col-span-2 text-[13px] font-medium leading-[1.6] text-white sm:col-span-3 lg:col-span-1 lg:text-right">
            <span className="text-white/60">Made in India by </span>
            {site.name}
            <br />
            <span className="text-white/60">
              © {site.year} All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
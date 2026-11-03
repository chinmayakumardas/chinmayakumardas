import Link from "next/link";
import { site, socialLinks } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { RiseText } from "@/components/common/RevealText";
import { BackToTop } from "./BackToTop";
import { ArrowUpRight, Heart } from "lucide-react";
/* ------------------------------------------------------------------ */
/* Content — change labels / hrefs here only.                          */
/* ------------------------------------------------------------------ */

const statement = "Websites that sell, from idea to launch. Designed and built around your goals.";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const colTitle = "mb-4 text-[14px] font-medium tracking-[-0.02em] text-[#8a8a8a]";
const linkClass = "inline-flex items-center gap-1.5 text-[15px] font-medium leading-none tracking-[-0.03em] text-[#0a0a0a]";

export function Footer() {
  return (
    <footer className="w-full px-[var(--page-x)] pb-[var(--page-x)] pt-1">
      <div className="relative isolate flex flex-col overflow-hidden rounded-[var(--radius-header)] bg-[#ececef] text-[#0a0a0a] lg:min-h-[calc(100svh-4.25rem)]">
        {/* ---------- top: statement + contact | link columns ---------- */}
        <div className="grid gap-12 p-5 pt-10 sm:p-7 sm:pt-12 lg:grid-cols-2 lg:gap-8 lg:p-8 lg:pt-10">
          <div className="max-w-[34rem]">
            <p className="type-statement">
              <SplitReveal text={statement} />
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-8 block break-all text-[clamp(1.1rem,1.6vw,1.4rem)] font-medium leading-tight tracking-[-0.04em]"
            >
              <FlipText>{site.email}</FlipText>
            </a>
            <p className="mt-1.5 text-[13px] tracking-[-0.02em] text-[#6b6b6b]">Based in {site.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:pl-[10%]">
            <div>
              <p className={colTitle}>Social</p>
              <ul className="space-y-3.5">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      <FlipText>{s.label}</FlipText>
                      <ArrowUpRight className="size-3.5 text-[#6b6b6b]" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={colTitle}>Navigation</p>
              <ul className="space-y-3.5">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={linkClass}>
                      <FlipText>{l.label}</FlipText>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={colTitle}>Legal</p>
              <ul className="space-y-3.5">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={linkClass}>
                      <FlipText>{l.label}</FlipText>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


{/* ---------- giant name (decorative) ---------- */}
<p
  aria-hidden
  className="type-display mt-auto select-none overflow-hidden whitespace-nowrap px-5 pt-16 text-[13.2vw] leading-[0.85] sm:px-7 lg:px-8 lg:pt-10"
>
  <RiseText text={site.name} />
</p>

{/* ---------- bottom bar: copyright · tagline · back to top ---------- */}
<div className="grid items-center gap-4 p-5 pt-6 text-[13px] tracking-[-0.02em] text-[#6b6b6b] sm:p-7 sm:pt-6 md:grid-cols-[1fr_auto_1fr] lg:p-8 lg:pt-6">
  <p>© {site.year}</p>

  <p className="flex items-center gap-1 md:justify-self-center">
    Made with
    <Heart
      className="size-3 fill-red-500 text-red-500"
      aria-label="love"
    />
    by Chinmaya
  </p>

  <div className="md:justify-self-end">
    <BackToTop />
  </div>
</div>

      

      
      </div>
    </footer>
  );
}

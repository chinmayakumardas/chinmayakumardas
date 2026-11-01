import Link from "next/link";
import { site, socialLinks } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";

const linkClass = "text-[13px] text-white";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="flex min-h-[340px] w-full flex-col justify-between gap-16 px-[var(--page-x)] pb-7 pt-12 sm:min-h-[380px] sm:pt-14">
        <div className="max-w-md">
          <p className="text-[15px] leading-relaxed text-white/60 sm:text-[16px]">
            Creative front-end developer building landing pages, UI/UX and
            custom software for brands that want to grow.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 block break-all text-[clamp(1.1rem,3.2vw,1.65rem)] font-semibold tracking-tight text-white"
          >
            <FlipText>{site.email}</FlipText>
          </a>
          <a
            href={site.phoneHref}
            className="mt-1.5 block text-[14px] text-white/70"
          >
            <FlipText>{site.phone}</FlipText>
          </a>
          <p className="mt-1 text-[13px] text-white/45">
            {site.availability} · {site.location}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          <div>
            <p className="mb-3 text-[12px] text-white/40">Quick links</p>
            <ul className="space-y-2">
              {site.nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    <FlipText>{item.label}</FlipText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[12px] text-white/40">Legal</p>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className={linkClass}>
                  <FlipText>Terms &amp; Conditions</FlipText>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[12px] text-white/40">Social</p>
            <ul className="space-y-2">
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
          </div>

          <p className="col-span-2 self-end text-[12px] leading-relaxed text-white/80 sm:col-span-1 sm:text-right">
            Designed &amp; built by {site.name}
            <br />
            <span className="text-white/45">
              © {site.year} All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

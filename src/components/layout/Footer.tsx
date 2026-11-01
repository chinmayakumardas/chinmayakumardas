import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="max-w-md">
          <p className="text-[16px] leading-relaxed text-white/55 sm:text-[17px]">
            We help you grow your online or offline business with our
            cost-effective solutions.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 block text-[clamp(1.35rem,4vw,1.75rem)] font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
          >
            {site.email}
          </a>
          <p className="mt-1.5 text-[13px] text-white/35">{site.location}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          <ul className="space-y-2.5">
            <li>
              <Link
                href="/about"
                className="text-[13px] text-white/40 transition-colors hover:text-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="text-[13px] text-white/40 transition-colors hover:text-white"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="text-[13px] text-white/40 transition-colors hover:text-white"
              >
                Blog
              </Link>
            </li>
          </ul>
          <ul className="space-y-2.5">
            <li>
              <span className="text-[13px] text-white/40">
                Terms & Conditions
              </span>
            </li>
            <li>
              <span className="text-[13px] text-white/40">Privacy Policy</span>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[13px] text-white/40 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="space-y-2.5">
            {Object.entries(site.social).map(([key, href]) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] capitalize text-white/40 transition-colors hover:text-white"
                >
                  {key === "x" ? "Twitter/X" : key}
                </a>
              </li>
            ))}
          </ul>
          <p className="col-span-2 text-[12px] text-white/25 sm:col-span-1 sm:text-right">
            Made in Dubai by Soam
            <br />© {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

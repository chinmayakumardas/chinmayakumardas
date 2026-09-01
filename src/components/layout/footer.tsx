import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MagneticLink } from "@/components/ui/magnetic-link";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "X / Twitter", href: "https://x.com/" },
];

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// TODO: replace with your real email once data/site.ts is wired up
const CONTACT_EMAIL = "hello@chinmayadas.dev";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-deep">
      <div className="container-portfolio pb-10 pt-20 md:pt-28">
        {/* Statement + CTA */}
        <div className="flex flex-col gap-10 border-b border-border pb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            Have a project in mind?
            <br />
            <span className="text-muted-foreground">
              Let&apos;s build something people remember.
            </span>
          </h2>

          <MagneticLink href={`mailto:${CONTACT_EMAIL}`} className="w-fit shrink-0">
            Start a project
          </MagneticLink>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="mb-4 text-xs text-muted-foreground">Contact</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors duration-300 hover:text-accent"
            >
              {CONTACT_EMAIL}
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs text-muted-foreground">Navigate</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs text-muted-foreground">Elsewhere</p>
            <ul className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs text-muted-foreground">Status</p>
            <div className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-accent" />
              <span className="text-sm text-foreground">
                Available for freelance work
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Chinmaya Das. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex w-fit items-center gap-1.5 transition-colors duration-300 hover:text-accent"
          >
            Back to top
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
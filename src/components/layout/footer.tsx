import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Button, Input } from "@/components/ui";

const companyLinks = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Contact us", "/contact"],
];

const productLinks = [
  ["Selected projects", "/projects"],
  ["Services", "/services"],
  ["Project scope", "/services"],
];

const resourceLinks = [
  ["Insights", "/projects"],
  ["AI Practices", "/services"],
  ["Design Workflows", "/projects"],
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="footer-grid">
        <div className="footer-grid-statement border-b border-border p-6 md:p-8">
          <p className="type-label text-brand">Chinmaya Kumar Das / 2026</p>
          <h2 className="type-display mt-5 max-w-sm text-[clamp(2rem,3vw,3.6rem)] font-bold uppercase leading-[0.88]">
            An AI engineer that helps businesses build better digital products.
          </h2>
        </div>

        <FooterLinkColumn title="Company" links={companyLinks} />
        <FooterLinkColumn title="Product" links={productLinks} />
        <FooterLinkColumn title="Resources" links={resourceLinks} />

        <div className="footer-mark-panel row-span-2 flex min-h-72 items-center justify-center border-b border-border p-8 lg:border-b-0">
          <svg
            viewBox="0 0 160 160"
            className="w-44 text-foreground"
            fill="none"
            role="img"
            aria-label="Chinmaya Kumar Das mark"
          >
            <path
              d="M28 50 62 30l34 20v60l-34 20-34-20V50ZM62 30v80M28 50l34 20 34-20M96 50l34 20v60l-34 20M62 110l34 20"
              stroke="currentColor"
              strokeWidth="5"
            />
          </svg>
        </div>

        <div className="footer-grid-subscribe border-b border-border p-5 md:p-6">
          <p className="type-label text-muted-foreground">Subscribe</p>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Notes on product design, AI engineering, and frontend systems. Sign
            up for occasional updates.
          </p>
          <form className="mt-7 flex border border-border">
            <Input
              aria-label="Email address"
              type="email"
              placeholder="Enter your email"
              className="h-10 rounded-none border-0"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="h-10 w-11 rounded-none border-l border-border"
            >
              <FiArrowUpRight aria-hidden="true" />
            </Button>
          </form>
        </div>

        <div className="footer-grid-address border-b border-border p-5 md:p-6">
          <p className="type-label text-muted-foreground">Address</p>
          <p className="mt-5 text-sm">
            Bhubaneswar,
            <br />
            Odisha, India
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 text-sm hover:text-brand"
          >
            Direction <FiArrowUpRight />
          </Link>
        </div>

        <div className="footer-grid-business border-b border-border p-5 md:p-6">
          
          <div className="mt-7  pt-5">
            <p className="type-label text-muted-foreground">
              General inquiries
            </p>
            <a
              className="mt-5 block text-sm hover:text-brand"
              href="mailto:hello@chinmayakumardas.com"
            >
              chinmayakumardas2000@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-grid-social border-b border-border p-5 md:p-6">
          <p className="type-label text-muted-foreground">Social</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <a href="#" className="hover:text-brand">
              Website
            </a>
            <a href="#" className="hover:text-brand">
              Dribbble
            </a>
            <a href="#" className="hover:text-brand">
              FWA
            </a>
            <a href="#" className="hover:text-brand">
              Awwwards
            </a>
            <a href="#" className="hover:text-brand">
              Instagram
            </a>
            <a href="#" className="hover:text-brand">
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="blueprint-wordmark overflow-hidden border-b border-border px-4 py-3 md:px-8">
        <p aria-hidden="true">CHINMAYA</p>
      </div>

      <div className="footer-legal">
        <span>
          © {new Date().getFullYear()} Chinmaya Kumar Das. All rights reserved.
        </span>
        <Link href="/privacy">Privacy policy</Link>
        <Link href="/terms">Terms &amp; conditions</Link>
        <Link href="/cookies">Cookie policy</Link>
      </div>
    </footer>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: string[][];
}) {
  return (
    <div className="footer-grid-links border-b border-border p-5 md:p-6">
      <p className="type-label text-muted-foreground">{title}</p>
      <nav className="mt-7 flex flex-col gap-4 text-sm">
        {links.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className={
              label === "Contact us" ? "text-brand" : "hover:text-brand"
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

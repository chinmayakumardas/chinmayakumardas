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
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] grid-rows-[minmax(9rem,auto)_minmax(9rem,auto)] border-b border-border max-lg:grid-cols-2 max-lg:grid-rows-[auto] max-sm:block [&>*]:border-r [&>*]:border-border max-sm:[&>*]:border-r-0">
        <div className="col-[1] row-[1] border-b border-border p-6 md:p-8 max-lg:col-auto max-lg:row-auto">
          <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-brand">Chinmaya Kumar Das / 2026</p>
          <h2 className="mt-5 max-w-sm font-display text-[clamp(2rem,3vw,3.6rem)] font-bold uppercase leading-[0.88] tracking-[-0.055em]">
            An AI engineer that helps businesses build better digital products.
          </h2>
        </div>

        <FooterLinkColumn title="Company" links={companyLinks} className="col-[2] row-[1]" />
        <FooterLinkColumn title="Product" links={productLinks} className="col-[3] row-[1]" />
        <FooterLinkColumn title="Resources" links={resourceLinks} className="col-[4] row-[1]" />

        <div className="col-[5] row-span-2 flex min-h-72 items-center justify-center border-b border-border p-8 lg:border-b-0 max-lg:col-auto max-lg:row-auto max-lg:min-h-72 max-sm:min-h-64">
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

        <div className="col-[1] row-[2] border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto">
          <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">Subscribe</p>
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

        <div className="col-[2] row-[2] border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto">
          <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">Address</p>
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

        <div className="col-[3] row-[2] border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto">
          
          <div className="mt-7  pt-5">
            <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">
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

        <div className="col-[4] row-[2] border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto">
          <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">Social</p>
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

      <div className="overflow-hidden border-b border-border px-4 py-3 md:px-8">
        <p aria-hidden="true">CHINMAYA</p>
      </div>

      <div className="grid min-h-11 grid-cols-[1fr_auto_auto_auto] items-center font-label text-[0.625rem] uppercase tracking-[0.08em] text-muted-foreground max-sm:grid-cols-2 [&>*]:flex [&>*]:h-full [&>*]:items-center [&>*]:border-l [&>*]:border-border [&>*]:px-4 [&>a:hover]:text-brand max-sm:[&>:first-child]:col-span-full max-sm:[&>:first-child]:min-h-11 max-sm:[&>:first-child]:border-b max-sm:[&>:first-child]:border-l-0 max-sm:[&>:first-child]:px-4 max-sm:[&>:nth-child(3)]:border-l">
        <span className="border-l-0 pl-[var(--content-gutter)] max-sm:pl-4">
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
  className,
}: {
  title: string;
  links: string[][];
  className?: string;
}) {
  return (
    <div className={`${className ?? ""} border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto`}>
      <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">{title}</p>
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

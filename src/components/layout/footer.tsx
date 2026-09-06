import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Button, Input } from "@/components/ui";
import { socials } from "@/data/social";

const profileLinks = [
  ["Home", "/"],
  ["About me", "/about"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const resourceLinks: Array<[string, string | null]> = [
  ["UI Library", null],
  ["Developer Utils", null],
];

const legalLinks = [
  ["Privacy policy", "/privacy"],
  ["Terms & conditions", "/terms"],
  ["Cookie policy", "/cookies"],
];

export function Footer() {
  // Filter relevant social links for the footer
  const footerSocials = socials.filter((social) =>
    ["GITHUB", "LINKEDIN", "INSTAGRAM", "BEHANCE"].includes(social.label),
  );

  return (
    <footer className="border-t border-border bg-background">
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] grid-rows-[minmax(9rem,auto)_minmax(9rem,auto)] border-b border-border max-lg:grid-cols-2 max-lg:grid-rows-[auto] max-sm:block [&>*]:border-r [&>*]:border-border max-sm:[&>*]:border-r-0">
        {/* Left Column: Large Personal Intro */}
        <div className="col-[1] row-[1] border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto flex flex-col justify-start">
          <h2 className="max-w-sm font-display text-[clamp(1.5rem,2.5vw,1.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.055em]">
            Creative -developer building innovative interfaces and AI-powered
            experiences.
          </h2>
        </div>

        {/* Column 2: Profile Navigation */}
        <FooterLinkColumn
          title="Profile"
          links={profileLinks}
          className="col-[2] row-[1]"
        />

        {/* Column 3: Resources */}
        <FooterLinkColumn
          title="Resources"
          links={resourceLinks}
          className="col-[3] row-[1]"
        />

        {/* Column 4: Legal */}
        <FooterLinkColumn
          title="Legal"
          links={legalLinks}
          className="col-[4] row-[1]"
        />

        {/* Right Column: Brand/Social */}
        <div className="col-[5] row-span-2 flex flex-col items-center justify-center border-b border-border p-8 lg:border-b-0 max-lg:col-auto max-lg:row-auto max-lg:min-h-72 max-sm:min-h-64">
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

        {/* Bottom Left: Connect */}
        <div className="col-[1] row-[2] border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto">
          <p className=" max-w-sm text-sm leading-relaxed text-muted-foreground">
            Exploring UI/UX, software engineering, design systems, and the craft
            of building thoughtful digital products.
          </p>

          <form className="mt-7 flex max-w-md border border-border">
            <Input
              aria-label="Email address"
              type="email"
              placeholder="Your email address"
              className="h-10 rounded-none border-0 bg-transparent text-sm focus-visible:ring-0"
            />

            <Button
              type="submit"
              variant="ghost"
              size="icon"
              aria-label="Subscribe"
              className="h-10 w-11 shrink-0 rounded-none border-l border-border hover:bg-muted"
            >
              <FiArrowUpRight aria-hidden="true" />
            </Button>
          </form>

          <p className="mt-3 text-[0.6875rem] text-muted-foreground/70">
            Occasional updates. No noise.
          </p>
        </div>

        {/* Bottom Column 2: Location */}
        <div className="col-[2] row-[2] border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto">
          <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">
            Based in
          </p>
          <p className="mt-5 text-sm">
            Bhubaneswar,
            <br />
            Odisha, India
          </p>
          <Link
            href="https://maps.app.goo.gl/nizTwUGTJ7oxJDHT9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-sm hover:text-brand"
          >
            View location <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        {/* Bottom Column 3: Email */}
        <div className="col-[3] row-[2] border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto">
          <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">
            Email
          </p>
          <a
            className="mt-5 block text-sm hover:text-brand"
            href="mailto:chinmayakumardas2000@gmail.com"
          >
            chinmayakumardas2000@gmail.com
          </a>
        </div>

        {/* Bottom Column 4: Social */}
        <div className="col-[4] row-[2] border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto">
          <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">
            Social
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            {footerSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large Name Section */}
      <div className="overflow-hidden border-b border-border px-4 py-8 md:px-8 md:py-12">
        <p
          aria-hidden="true"
          className="w-full whitespace-nowrap text-center text-[clamp(4rem,17vw,18rem)] font-bold leading-[0.72] tracking-[-0.085em]"
        >
          CHINMAYA
        </p>
      </div>

      {/* Legal Footer Bar */}
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
  links: Array<[string, string | null]>;
  className?: string;
}) {
  return (
    <div
      className={`${className ?? ""} border-b border-border p-5 md:p-6 max-lg:col-auto max-lg:row-auto flex flex-col justify-start`}
    >
      <p className="font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <nav className="mt-7 flex flex-col gap-4 text-sm">
        {links.map(([label, href]) => {
          if (href === null) {
            return (
              <div key={label} className="inline-flex items-center gap-2">
                <span className="text-muted-foreground">{label}</span>
                <span className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                  Coming soon
                </span>
              </div>
            );
          }
          const isExternal = href.startsWith("http");
          return isExternal ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand"
            >
              {label}
            </a>
          ) : (
            <Link key={label} href={href} className="hover:text-brand">
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

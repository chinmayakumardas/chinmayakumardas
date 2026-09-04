import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Selected work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-portfolio grid gap-10 py-12 md:grid-cols-[1.5fr_0.7fr_0.8fr] md:py-16">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
            Let&apos;s build the next useful thing
          </p>
          <h2 className="type-display mt-5 max-w-xl text-[clamp(2.25rem,4vw,4.5rem)] font-bold uppercase leading-[0.9]">
            Have a difficult problem?
          </h2>
          <Link href="/contact" className="brand-button mt-8 px-4 py-3">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Explore
          </p>
          <nav className="mt-5 flex flex-col gap-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Connect
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            <a
              href="mailto:hello@chinmayakumardas.com"
              className="hover:text-brand"
            >
              Email
            </a>
            <a href="https://github.com" className="hover:text-brand">
              GitHub
            </a>
            <a href="https://linkedin.com" className="hover:text-brand">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="container-portfolio flex flex-col gap-2 border-t border-border py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} Chinmaya Kumar Das</span>
        <span>Built with care / Bhubaneswar, India</span>
      </div>
    </footer>
  );
}

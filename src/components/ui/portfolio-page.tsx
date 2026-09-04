import Link from "next/link";

interface PortfolioItem {
  label: string;
  title: string;
  description: string;
}

interface PortfolioPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: PortfolioItem[];
  actionLabel?: string;
  actionHref?: string;
}

export function PortfolioPage({
  eyebrow,
  title,
  intro,
  items,
  actionLabel = "Start a conversation",
  actionHref = "/contact",
}: PortfolioPageProps) {
  return (
    <main>
      <section className="container-portfolio border-b border-border py-14 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
              {eyebrow}
            </p>
            <h1 className="type-display mt-6 max-w-5xl text-[clamp(2.65rem,5.5vw,5.4rem)] font-bold uppercase leading-[0.9]">
              {title}
            </h1>
          </div>
          <div className="flex flex-col justify-end border-t border-border pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
            <Link
              href={actionHref}
              className="mt-8 flex items-center justify-between border-t border-border pt-4 font-mono text-xs uppercase tracking-[0.14em] text-brand"
            >
              {actionLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-portfolio grid md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.label}
            className={`min-h-64 border-b border-border py-8 md:p-10 ${
              index % 2 === 1 ? "md:border-l md:pl-10" : "md:pr-10"
            }`}
          >
            <div className="flex items-start justify-between gap-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </span>
              <span className="font-mono text-[10px] text-brand">
                0{index + 1}
              </span>
            </div>
            <h2 className="mt-16 max-w-md text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.03em] md:text-4xl">
              {item.title}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

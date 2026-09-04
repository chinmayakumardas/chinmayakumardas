import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="blueprint-surface hero-visual relative flex items-center justify-center border-b border-border px-4 py-8 md:px-12">
        <div className="relative z-10 flex w-full items-center justify-center">
          <svg
            viewBox="0 0 760 420"
            role="img"
            aria-labelledby="hero-visual-title hero-visual-description"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="hero-visual-title">
              Chinmaya Kumar Das digital systems mark
            </title>
            <desc id="hero-visual-description">
              A technical architectural diagram representing product systems,
              interface structure, and connected ideas.
            </desc>
            <rect
              x="72"
              y="52"
              width="616"
              height="316"
              stroke="currentColor"
              strokeOpacity=".28"
            />
            <path
              d="M72 132H688M72 212H688M72 292H688M226 52V368M380 52V368M534 52V368"
              stroke="currentColor"
              strokeOpacity=".16"
              strokeDasharray="4 7"
            />
            <path
              d="M136 308V168L224 112L312 168V308M224 112V308M136 228H312M448 308V168L536 112L624 168V308M536 112V308M448 228H624"
              stroke="currentColor"
              strokeWidth="2"
              strokeOpacity=".72"
            />
            <path
              d="M312 308V122H448V308M312 182H448M380 122V308"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M224 112L380 64L536 112M224 308L380 350L536 308"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect x="365" y="176" width="30" height="30" fill="var(--brand)" />
            <circle cx="136" cy="168" r="5" fill="var(--brand)" />
            <circle cx="624" cy="168" r="5" fill="var(--brand)" />
            <path d="M72 368H688" stroke="currentColor" strokeWidth="2" />
            <text
              x="88"
              y="86"
              fill="currentColor"
              fillOpacity=".65"
              fontFamily="var(--font-geist-mono)"
              fontSize="10"
              letterSpacing="2"
            >
              CHINMAYA / SYSTEMS / 2026
            </text>
            <text
              x="526"
              y="348"
              fill="currentColor"
              fillOpacity=".65"
              fontFamily="var(--font-geist-mono)"
              fontSize="10"
              letterSpacing="2"
            >
              BUILD / SHIP / REFINE
            </text>
          </svg>
          <div className="absolute bottom-8 left-4 z-20 flex items-center gap-2 border border-border bg-background p-1.5 md:bottom-12 md:left-10">
            <Image
              src="/images/profile.png"
              alt="Portrait of Chinmaya Kumar Das"
              width={42}
              height={42}
              className="h-10 w-10 object-cover"
            />
            <span className="type-label pr-2 text-foreground">
              Chinmaya / builder
            </span>
          </div>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-primary-foreground">
            Building useful digital systems
          </span>
          <span className="absolute left-1/2 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-brand md:block" />
        </div>

        <span className="type-label absolute left-4 top-4 z-10 text-muted-foreground md:left-8 md:top-8">
          AI engineer / product builder
        </span>
        <span className="type-label absolute right-4 top-4 z-10 text-muted-foreground md:right-8 md:top-8">
          01 — 04
        </span>
        <span className="type-label absolute bottom-4 left-4 z-10 text-brand md:bottom-8 md:left-8">
          Interface / intelligence / impact
        </span>
        <span className="type-label absolute bottom-4 right-4 z-10 text-muted-foreground md:bottom-8 md:right-8">
          Bhubaneswar, India
        </span>
      </div>

      <div className="grid md:grid-cols-[1.35fr_1fr_0.42fr]">
        <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
          <h1 className="type-display max-w-3xl text-[clamp(2rem,3.8vw,4.25rem)] font-bold uppercase leading-[0.92]">
            Digital products that feel inevitable.
          </h1>
        </div>

        <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
          <p className="type-body max-w-md text-muted-foreground">
            Chinmaya Kumar Das designs and builds clear, capable software for
            teams turning ambitious ideas into useful products.
          </p>
          <Button
            asChild
            variant="link"
            size="sm"
            className="mt-8 h-auto px-0 font-mono text-xs uppercase tracking-[0.14em] text-brand"
          >
            <Link href="/projects">
              View selected work <FiArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="flex items-end justify-between p-6 md:flex-col md:items-start md:justify-between md:p-8">
          <span className="type-label text-muted-foreground">
            Bhubaneswar, India
          </span>
          <Link href="/contact" className="brand-button px-3 py-2">
            Contact <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

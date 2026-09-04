import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="blueprint-surface relative flex min-h-120 items-center justify-center border-b border-border px-6 py-12 md:min-h-136 md:px-12">
        <div className="relative z-10 w-full max-w-3xl border border-border bg-primary/5 p-3 md:p-5">
          <div className="relative aspect-4/3 overflow-hidden border border-border bg-primary">
            <Image
              src="/images/profile.png"
              alt="Chinmaya Kumar Das"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 70vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-primary px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground">
              Chinmaya Kumar Das / 2026
            </span>
          </div>
        </div>

        <span className="type-label absolute left-4 top-4 z-10 text-muted-foreground md:left-8 md:top-8">
          AI engineer / product builder
        </span>
        <span className="type-label absolute right-4 top-4 z-10 text-muted-foreground md:right-8 md:top-8">
          01 — 04
        </span>
        <span className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-primary-foreground md:block">
          Building useful digital systems
        </span>
      </div>

      <div className="grid md:grid-cols-[1.35fr_1fr_0.42fr]">
        <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
          <h1 className="type-display max-w-3xl text-[clamp(2.35rem,4.5vw,5rem)] font-bold uppercase leading-[0.9]">
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
              View selected work <ArrowUpRight aria-hidden="true" />
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

import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Button, PageFrameDecor } from "@/components/ui";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="hero-visual relative border-b border-border px-4 py-4 md:px-12 md:py-5">
        <PageFrameDecor />

        <div className="relative mx-auto grid min-w-0 max-w-6xl border border-border md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="grid min-w-0 border-b border-border md:border-b-0 md:border-r">
            <div className="border-b border-border p-6 sm:p-8 md:p-10">
              <p className="type-label mb-6 text-muted-foreground">
                Creative developer / UI/UX
              </p>
              <h1 className="type-display max-w-2xl wrap-break-word text-[clamp(1.85rem,4.2vw,3.9rem)] font-bold uppercase leading-[0.92]">
                I make websites
                <br />
                that generate leads.
              </h1>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Clear strategy, sharp design, and reliable technology for brands
                that want more than a good-looking website.
              </p>
            </div>

            <div className="grid min-w-0 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="min-w-0 border-b border-border p-6 sm:border-b-0 sm:border-r sm:p-8">
                
                <p className="max-w-md text-base leading-relaxed">
                  I turn complex ideas into clear, useful experiences with a
                  strong eye for interaction, visual systems, and detail.
                </p>
                <div
                  className="mt-6 overflow-hidden border-y border-border py-3"
                  aria-label="Core skills"
                >
                  <div className="hero-marquee flex w-max gap-6 whitespace-nowrap font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                    <span>UI/UX Design</span>
                    <span aria-hidden="true">+</span>
                    <span>Creative Development</span>
                    <span aria-hidden="true">+</span>
                    <span>AI Products</span>
                    <span aria-hidden="true">+</span>
                    <span>React &amp; Next.js</span>
                    <span aria-hidden="true">+</span>
                    <span>UI/UX Design</span>
                    <span aria-hidden="true">+</span>
                    <span>Creative Development</span>
                    <span aria-hidden="true">+</span>
                    <span>AI Products</span>
                    <span aria-hidden="true">+</span>
                    <span>React &amp; Next.js</span>
                  </div>
                </div>
              </div>

              <div className="flex items-end p-6 sm:p-8">
                <Button asChild className="h-11 gap-3 px-5">
                  <Link href="/contact">
                    Start a project
                    <FiArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-80 items-end justify-center overflow-hidden bg-secondary/40 px-6 pt-10 sm:min-h-88 md:min-h-136">
            <div className="absolute left-5 top-5 type-label text-muted-foreground">
              Available for select work
            </div>
            <Image
              src="/images/profile.png"
              alt="Illustrated portrait of Chinmaya Kumar Das"
              width={460}
              height={540}
              priority
              className="relative h-auto max-h-136 w-full max-w-md object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

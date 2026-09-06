import Image from "next/image";
import Link from "next/link";
import { PageFrameDecor } from "@/components/ui";

export function Hero() {
  return (
    <section>
      <div className="relative h-[calc(100svh-var(--header-height))] overflow-hidden border-b border-border">
        <div className="grid h-full min-w-0 grid-rows-[minmax(0,1fr)_clamp(14rem,30vh,18rem)] max-md:grid-rows-[minmax(0,1fr)_auto]">
          <div className="relative flex min-h-0 items-end justify-center overflow-hidden border-b border-border px-3 pb-4 pt-7 sm:px-5 sm:pb-5 sm:pt-8">
            <PageFrameDecor className="z-10" />
            <Image
              src="/images/profile.png"
              alt="Illustrated portrait of Chinmaya Kumar Das"
              width={460}
              height={540}
              priority
              className="relative h-auto max-h-full w-[min(78vw,30rem)] max-w-full object-contain object-bottom md:h-full md:w-[min(68vw,42rem)] md:max-w-2xl"
            />
          </div>

          <div className="grid min-w-0 grid-rows-[auto_auto] md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] md:grid-rows-none">
            <div className="flex min-w-0 flex-col justify-between overflow-hidden border-b-2 border-border p-4 sm:p-6 md:border-b-0 md:border-r-2 md:p-7 lg:p-8">
           
              <h1 className="type-display mt-5 max-w-[18ch] text-[clamp(1.9rem,3.7vw,3.75rem)] font-semibold uppercase leading-[0.92] text-balance sm:mt-6">
                Digital products that feel simple.
              </h1>
            </div>

            <div className="grid min-w-0 grid-rows-[minmax(0,1fr)_auto]">
              <div className="grid min-w-0 border-b-2 border-border sm:grid-cols-2">
                <div className="border-b-2 border-border p-4 sm:p-6 sm:border-b-0 sm:border-r-2 md:p-7">
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                    I build thoughtful interfaces, AI-powered workflows, and
                    reliable systems for people doing meaningful work.
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4 p-4 sm:p-6 md:p-7">
                  <Link
                    href="/projects"
                    className="type-label inline-flex items-center gap-2 text-brand transition-opacity hover:opacity-65"
                  >
                    Explore work <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
              <div className="flex min-h-11 items-center overflow-hidden px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground sm:px-6 md:px-7">
                <div
                  className="flex min-w-max items-center gap-5"
                  aria-label="Skills"
                >
                  <span className="text-brand">React</span>
                  <span aria-hidden="true">✦</span>
                  <span>Next.js</span>
                  <span aria-hidden="true">✦</span>
                  <span>TypeScript</span>
                  <span aria-hidden="true">✦</span>
                  <span>AI systems</span>
                  <span aria-hidden="true">✦</span>
                  <span>Automation</span>
                  <span aria-hidden="true">✦</span>
                  <span>React</span>
                  <span aria-hidden="true">✦</span>
                  <span>Next.js</span>
                </div>
              </div>
            </div>
          </div> 

          
        </div>
      </div>
    </section>
  );
}

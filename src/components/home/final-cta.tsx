import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export function FinalCTA() {
  return (
    <section className="border-b border-border">
      <div className="grid md:grid-cols-[1.4fr_1fr]">
        <div className="border-b-2 border-border p-4 sm:p-5 md:border-b-0 md:border-r-2 md:p-8">
          <span className="type-label text-xs uppercase tracking-[0.12em] text-muted-foreground">
            What&apos;s next?
          </span>

          <h2 className="type-display mt-6 max-w-xl text-[clamp(1.8rem,3.5vw,3.5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            Great projects start with great conversations.
          </h2>
        </div>

        <div className="flex flex-col justify-between p-4 sm:p-5 md:p-8">
          <p className="max-w-md text-sm leading-[1.6] text-muted-foreground sm:text-base">
            Have an idea, a problem, or something worth making better?
            Let&apos;s figure it out.
          </p>

          <Link
            href="/contact"
            className="group mt-10 flex items-center justify-between border-2 border-border p-4 transition-colors duration-200 hover:bg-brand hover:text-background"
          >
            <span className="type-label text-xs uppercase">
              Start a conversation
            </span>

            <FiArrowUpRight
              aria-hidden="true"
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* Background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute select-none font-heading text-[clamp(16rem,38vw,34rem)] font-medium leading-none tracking-[-0.1em] text-foreground/[0.035]"
      >
        404
      </span>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-lg">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Error 404
        </p>

        <h1 className="mt-5 font-heading text-4xl font-medium tracking-[-0.05em] text-foreground sm:text-5xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to home
            <ArrowUpRight size={14} className="ml-1 opacity-60" />
          </Link>
        </div>
      </div>
    </main>
  );
}

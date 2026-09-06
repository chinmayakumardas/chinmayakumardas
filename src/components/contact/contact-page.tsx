import { FiArrowUpRight } from "react-icons/fi";
import { Button, Input, Textarea } from "@/components/ui";

export function ContactPage() {
  return (
    <main className="contact-page">
      <section className="grid min-h-0 border-b border-border md:min-h-[clamp(30rem,calc(100svh-var(--header-height)-8rem),36rem)] md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
        <div className="border-b border-border md:border-b-0 md:border-r">
          <div className="border-b border-border px-6 py-8 md:px-8 md:py-10">
            <h1 className="type-display max-w-3xl text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[0.88]">
              Get in touch
            </h1>
            <p className="type-body mt-5 max-w-xl text-muted-foreground">
              Tell me what you are building,<br></br> what is getting in the
              way,<br></br> and what a good result looks like.<br></br>{" "}
              Let&apos;s build it.
            </p>
          </div>

          <form className="grid gap-0">
            <div className="grid md:grid-cols-2">
              <label className="flex min-h-15 flex-col justify-center border-b border-border p-0 font-display text-base font-bold leading-none uppercase md:border-r">
                <Input
                  name="firstName"
                  placeholder="First name"
                  aria-label="First name"
                  className="h-15 rounded-none border-0 px-6 font-sans text-sm shadow-none outline-none focus-visible:border-0 focus-visible:ring-0"
                  required
                />
              </label>
              <label className="flex min-h-15 flex-col justify-center border-b border-border p-0 font-display text-base font-bold leading-none uppercase">
                <Input
                  name="lastName"
                  placeholder="Last name"
                  aria-label="Last name"
                  className="h-15 rounded-none border-0 px-6 font-sans text-sm shadow-none outline-none focus-visible:border-0 focus-visible:ring-0"
                  required
                />
              </label>
            </div>
            <label className="flex min-h-15 flex-col justify-center border-b border-border p-0 font-display text-base font-bold leading-none uppercase">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="h-15 rounded-none border-0 px-6 font-sans text-sm shadow-none outline-none focus-visible:border-0 focus-visible:ring-0"
                required
              />
            </label>
            <label className="flex min-h-15 flex-col justify-center border-b border-border p-0 font-display text-base font-bold leading-none uppercase">
              <Input
                name="phone"
                type="tel"
                placeholder="Phone number"
                aria-label="Phone number"
                className="h-15 rounded-none border-0 px-6 font-sans text-sm shadow-none outline-none focus-visible:border-0 focus-visible:ring-0"
                required
              />
            </label>
            <label className="flex min-h-24 flex-col justify-center border-b border-border p-0 font-display text-base font-bold leading-none uppercase">
              <Textarea
                name="message"
                placeholder="Message"
                aria-label="Message"
                className="min-h-24 rounded-none border-0 px-6 py-4 font-sans text-sm shadow-none outline-none focus-visible:border-0 focus-visible:ring-0"
                required
              />
            </label>
            <Button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-between gap-4 rounded-none border-0 border-t border-brand bg-brand px-6 text-left font-mono text-[0.625rem] leading-none tracking-[0.12em] text-brand-foreground uppercase transition-colors hover:bg-brand hover:text-foreground focus-visible:bg-brand focus-visible:text-foreground"
            >
              Submit <FiArrowUpRight size={16} />
            </Button>
          </form>
        </div>

        <aside className="flex min-h-80 flex-col justify-between bg-[color-mix(in_srgb,var(--muted)_42%,var(--background))] p-6 md:min-h-full md:p-8">
          <div>
            <p className="type-label text-brand">Project / next steps</p>
            <h2 className="type-display mt-6 max-w-sm text-[clamp(2rem,3vw,3.5rem)] font-bold uppercase leading-[0.9]">
              Clear work starts here.
            </h2>
          </div>
          <svg
            className="mt-12 max-h-60 w-full text-foreground"
            viewBox="0 0 360 260"
            fill="none"
            role="img"
            aria-label="Growth chart graphic"
          >
            <path
              d="M38 212h286M62 212V48"
              stroke="currentColor"
              strokeOpacity=".35"
            />
            <path
              d="M62 180h48v32H62zM134 142h48v70h-48zM206 96h48v116h-48z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="m72 164 78-46 72-44 72-38"
              stroke="var(--brand)"
              strokeWidth="3"
            />
            <path d="m276 36 18 0-2 18" stroke="var(--brand)" strokeWidth="3" />
            <circle cx="110" cy="142" r="5" fill="var(--brand)" />
            <circle cx="182" cy="96" r="5" fill="var(--brand)" />
            <circle cx="254" cy="52" r="5" fill="var(--brand)" />
          </svg>
        </aside>
      </section>
    </main>
  );
}

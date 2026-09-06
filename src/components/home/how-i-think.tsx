export function HowIThink() {
  return (
    <section className="border-b border-border">
      <div className="p-4 sm:p-5 md:p-8">
        <div className="border-b border-border pb-3">
          <span className="type-label text-xs uppercase tracking-[0.12em] text-muted-foreground">
            What Matters
          </span>
        </div>

        <div className="grid py-10 md:grid-cols-[1fr_1.5fr] md:py-16">
          <div />

          <div>
            <h2 className="type-display max-w-2xl text-[clamp(1.8rem,3.5vw,3.5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
              A website is never just a website.
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
              {[
                "Business",
                "Audience",
                "Problem",
                "Story",
                "Experience",
                "Result",
              ].map((item) => (
                <div key={item} className="border-t border-border pt-3">
                  <span className="type-label text-xs uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-md text-sm leading-[1.6] text-muted-foreground">
              The interface is only one part of the equation. I want to
              understand what sits behind it before deciding what should be
              built.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
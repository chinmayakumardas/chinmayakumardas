const panels = [
  {
    index: "01",
    title: "Systems that make the hard parts feel simple.",
    label: "Product architecture",
  },
  {
    index: "02",
    title: "Interfaces built for real people and real pressure.",
    label: "Frontend direction",
  },
  {
    index: "03",
    title: "Automation that gives teams their attention back.",
    label: "AI workflows",
  },
];

export function VisualPanels() {
  return (
    <section className="border-b border-border">
      {panels.map((panel, index) => (
        <article
          key={panel.index}
          className="grid min-h-72 border-b border-border last:border-b-0 md:grid-cols-[0.42fr_1fr_1fr]"
        >
          <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
            <span className="type-label text-brand">/ {panel.index}</span>
            <p className="mt-16 type-label text-muted-foreground">
              {panel.label}
            </p>
          </div>
          <div className="blueprint-surface flex min-h-56 items-center justify-center border-b border-border p-8 md:border-b-0 md:border-r">
            <svg
              viewBox="0 0 300 180"
              className="w-full max-w-xs text-foreground"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="30"
                y="30"
                width="240"
                height="120"
                stroke="currentColor"
                strokeOpacity=".35"
              />
              <path
                d={
                  index === 0
                    ? "M55 120 105 70l45 32 55-62 40 80"
                    : index === 1
                      ? "M45 125h210M75 125V65h50v60M175 125V42h50v83"
                      : "M45 90h55M200 90h55M100 90l38-38M200 90l-38 38M138 52h24v76h-24z"
                }
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x={index === 1 ? "135" : "145"}
                y="82"
                width="12"
                height="12"
                fill="var(--brand)"
              />
            </svg>
          </div>
          <div className="flex items-end p-6 md:p-8">
            <h2 className="type-display max-w-lg text-3xl font-semibold uppercase leading-[0.92] md:text-5xl">
              {panel.title}
            </h2>
          </div>
        </article>
      ))}
    </section>
  );
}

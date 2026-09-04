const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "High-quality React and Next.js interfaces built for performance, accessibility, and maintainability.",
  },
  {
    number: "02",
    title: "Product Engineering",
    description:
      "End-to-end product development from early ideas and Figma designs to polished production experiences.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "AI-powered products, intelligent workflows, and automation systems that reduce repetitive work.",
  },
];

export function Services() {
  return (
    <section className="border-b border-border">
      <div className="container-portfolio border-b border-border py-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Services
          </p>

          <span className="font-mono text-xs text-muted-foreground">
            03
          </span>
        </div>
      </div>

      <div className="container-portfolio grid grid-cols-1 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.number}
            className={`min-h-72 border-border p-6 md:p-8 ${
              index > 0 ? "border-t md:border-l md:border-t-0" : ""
            }`}
          >
            <div className="flex h-full flex-col justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                / {service.number}
              </span>

              <div className="mt-16">
                <h2 className="text-2xl font-semibold uppercase leading-tight tracking-tight">
                  {service.title}
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
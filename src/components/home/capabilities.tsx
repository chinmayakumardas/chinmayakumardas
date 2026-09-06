export function Capabilities() {
  const capabilities = [
    {
      number: "01",
      title: "Frontend Development",
      description: "React, Next.js, TypeScript",
    },
    {
      number: "02",
      title: "Creative Development",
      description: "Interactive and expressive web experiences",
    },
    {
      number: "03",
      title: "Interaction & Motion",
      description: "Transitions, animation, and meaningful movement",
    },
    {
      number: "04",
      title: "3D & Visual Experiences",
      description: "3D, immersive interfaces, and visual experimentation",
    },
    {
      number: "05",
      title: "Performance",
      description: "Fast, responsive, and accessible interfaces",
    },
    {
      number: "06",
      title: "Problem Solving",
      description: "Understanding the problem before building the solution",
    },
  ];

  return (
    <section className="border-b border-border">
      <div className="p-4 sm:p-5 md:p-8">
        {/* Header */}
        <div className="flex items-center  pb-3">
  <span className="type-label text-xs uppercase tracking-[0.12em] text-muted-foreground">
    Capabilities
  </span>
</div>

        {/* List */}
        <div className="mt-8">
          {capabilities.map((item, index) => (
            <div
              key={item.number}
              className={`grid gap-3 py-5 sm:grid-cols-[4rem_1fr_1fr] sm:items-center ${
                index !== capabilities.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <span className="font-mono text-xs text-muted-foreground">
                {item.number}
              </span>

              <h3 className="type-label text-sm font-medium uppercase sm:text-base">
                {item.title}
              </h3>

              <p className="text-sm leading-[1.5] text-muted-foreground sm:max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
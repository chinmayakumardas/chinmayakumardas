import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "E-commerce Platform",
    category: "E-commerce",
    year: "2026",
    description:
      "A product-focused e-commerce experience built around clear navigation, product discovery, and a smoother purchasing flow.",
    mask: "clip-[polygon(0_3%,97%_0,100%_94%,4%_100%)]",
    visual: (
      <svg
        viewBox="0 0 1200 900"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="1200" height="900" fill="var(--background)" />

        <path
          d="M300 300L600 190L900 300L600 420Z"
          fill="var(--secondary)"
          stroke="var(--foreground)"
          strokeWidth="3"
        />

        <path
          d="M300 300V590L600 730V420"
          fill="var(--muted)"
          stroke="var(--foreground)"
          strokeWidth="3"
        />

        <path
          d="M900 300V590L600 730"
          fill="var(--card)"
          stroke="var(--foreground)"
          strokeWidth="3"
        />

        <circle cx="600" cy="305" r="58" fill="var(--foreground)" />

        <path
          d="M575 305H625M600 280V330"
          stroke="var(--background)"
          strokeWidth="8"
        />

        <circle cx="210" cy="670" r="70" fill="var(--foreground)" />
        <rect
          x="930"
          y="600"
          width="110"
          height="110"
          fill="var(--foreground)"
        />

        <path
          d="M120 170H350"
          stroke="var(--foreground)"
          strokeWidth="3"
        />

        <path
          d="M850 760H1080"
          stroke="var(--foreground)"
          strokeWidth="3"
        />
      </svg>
    ),
  },

  {
    number: "02",
    title: "HRMS Platform",
    category: "Business System",
    year: "2025",
    description:
      "A business management system designed to simplify employee information, workflows, and everyday HR operations.",
    mask: "clip-[polygon(4%_0,100%_5%,96%_100%,0_94%)]",
    visual: (
      <svg
        viewBox="0 0 1200 900"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="1200" height="900" fill="var(--background)" />

        <circle
          cx="380"
          cy="300"
          r="85"
          fill="var(--secondary)"
        />

        <path
          d="M240 650C245 480 290 410 380 410C470 410 515 480 520 650"
          fill="var(--foreground)"
        />

        <circle
          cx="700"
          cy="270"
          r="72"
          fill="var(--muted)"
        />

        <path
          d="M585 650C590 490 625 410 700 410C775 410 810 490 815 650"
          fill="var(--muted-foreground)"
        />

        <path
          d="M465 350C530 300 570 300 625 330"
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="4"
          strokeDasharray="10 12"
        />

        <rect
          x="160"
          y="710"
          width="170"
          height="28"
          fill="var(--foreground)"
        />

        <rect
          x="850"
          y="710"
          width="190"
          height="28"
          fill="var(--foreground)"
        />

        <rect
          x="420"
          y="760"
          width="360"
          height="16"
          fill="var(--muted)"
        />
      </svg>
    ),
  },

  {
    number: "03",
    title: "Medicine Billing",
    category: "Healthcare",
    year: "2025",
    description:
      "A medicine billing system focused on faster billing, clearer information, and reliable day-to-day business operations.",
    mask: "clip-[polygon(0_6%,94%_0,100%_96%,6%_100%)]",
    visual: (
      <svg
        viewBox="0 0 1200 900"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="1200" height="900" fill="var(--background)" />

        <rect
          x="420"
          y="270"
          width="250"
          height="390"
          rx="25"
          fill="var(--secondary)"
          stroke="var(--foreground)"
          strokeWidth="4"
        />

        <rect
          x="470"
          y="190"
          width="150"
          height="90"
          fill="var(--foreground)"
        />

        <rect
          x="455"
          y="390"
          width="180"
          height="150"
          fill="var(--background)"
          stroke="var(--foreground)"
          strokeWidth="3"
        />

        <path
          d="M485 465H605"
          stroke="var(--foreground)"
          strokeWidth="12"
        />

        <path
          d="M545 425V505"
          stroke="var(--foreground)"
          strokeWidth="12"
        />

        <path
          d="M760 300H950V650H760Z"
          fill="var(--card)"
          stroke="var(--foreground)"
          strokeWidth="3"
        />

        <path
          d="M795 370H915"
          stroke="var(--muted-foreground)"
          strokeWidth="8"
        />

        <path
          d="M795 420H900"
          stroke="var(--muted)"
          strokeWidth="8"
        />

        <path
          d="M795 470H925"
          stroke="var(--muted)"
          strokeWidth="8"
        />

        <path
          d="M795 555H915"
          stroke="var(--foreground)"
          strokeWidth="14"
        />

        <circle
          cx="300"
          cy="650"
          r="75"
          fill="var(--foreground)"
        />

        <path
          d="M265 650H335M300 615V685"
          stroke="var(--background)"
          strokeWidth="12"
        />
      </svg>
    ),
  },
];

export function Projects() {
  return (
    <section className="border-b border-border">
      <div className="p-4 sm:p-5 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="type-label text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Projects
          </span>

          <span className="font-mono text-xs text-muted-foreground">
            03 PROJECTS
          </span>
        </div>

        {/* Intro */}
        <div className="grid gap-8 py-10 md:grid-cols-[0.8fr_1.2fr] md:py-14">
          <div>
            <span className="font-mono text-xs text-muted-foreground">
              RECENT WORK
            </span>
          </div>

          <div className="max-w-xl">
            <h1 className="type-display text-[clamp(1.8rem,3.5vw,3.5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
              Digital products built
              <br />
              around real problems.
            </h1>

            <p className="mt-8 ml-[12%] max-w-md text-sm leading-[1.6] text-muted-foreground sm:ml-[20%] sm:text-base">
              A selection of products and systems I&apos;ve worked on across
              e-commerce, HR, healthcare, and business operations.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="border-t border-border">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`grid gap-6 py-8 md:grid-cols-[4rem_1fr] md:gap-10 md:py-12 ${
                index !== projects.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {/* Number */}
              <div className="font-mono text-xs text-muted-foreground">
                {project.number}
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                {/* Visual */}
                <div
                  className={`aspect-[4/3] overflow-hidden bg-secondary ${project.mask}`}
                >
                  {project.visual}
                </div>

                {/* Content */}
                <div className="lg:pl-6">
                  <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                    <span>{project.category}</span>
                    <span>/</span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="type-display mt-4 text-[clamp(1.5rem,2.8vw,2.6rem)] font-semibold uppercase leading-[0.95] tracking-tight">
                    {project.title}
                  </h2>

                  <p className="mt-6 max-w-sm text-sm leading-[1.6] text-muted-foreground">
                    {project.description}
                  </p>

                  <Link
                    href="/case-studies"
                    className="group mt-8 inline-flex items-center gap-2 border-b border-border pb-2 text-sm transition-colors duration-200 hover:border-brand hover:text-brand"
                  >
                    <span>View case study</span>

                    <FiArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
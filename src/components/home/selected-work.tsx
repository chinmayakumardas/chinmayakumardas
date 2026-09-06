

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
const projects = [
  {
    title: "E-commerce Platform",
    category: "E-commerce",
    mask: "clip-[polygon(0_3%,97%_0,100%_94%,4%_100%)]",
    svg: (
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
          fill="var(--card)"
          stroke="var(--foreground)"
          strokeWidth="3"
        />

        <path
          d="M900 300V590L600 730"
          fill="var(--muted)"
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
    title: "HRMS Platform",
    category: "Business System",
    mask: "clip-[polygon(4%_0,100%_5%,96%_100%,0_94%)]",
    svg: (
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
          fill="var(--muted-foreground)"
        />
      </svg>
    ),
  },

  {
    title: "Medicine Billing",
    category: "Healthcare",
    mask: "clip-[polygon(0_6%,94%_0,100%_96%,6%_100%)]",
    svg: (
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

export function SelectedWork() {
  return (
    <section className="border-b border-border">
      <div className="p-4 sm:p-5 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="type-label text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Selected Work
          </span>

          <Link
            href="/projects"
            className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:text-brand"
          >
            <span>View all</span>

            <FiArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        {/* 3-column work grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group block"
            >
              {/* Visual */}
              <div
                className={`relative aspect-[4/3] overflow-hidden ${project.mask}`}
              >
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                  {project.svg}
                </div>

                {/* Subtle frame */}
                <div className="pointer-events-none absolute inset-0 border border-border/60" />
              </div>

              {/* Project info */}
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted-foreground">
                    {project.category}
                  </span>

                  <h3 className="mt-1 type-label text-sm font-medium uppercase sm:text-base">
                    {project.title}
                  </h3>
                </div>

                <FiArrowUpRight
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand"
                  strokeWidth={1.5}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
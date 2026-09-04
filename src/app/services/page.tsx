import { PortfolioPage } from "@/components/ui/portfolio-page";

export default function Services() {
  return (
    <PortfolioPage
      eyebrow="Services / ways to work together"
      title="From rough idea to sharp product."
      intro="I help teams make progress across strategy, interface design, engineering, and intelligent automation without losing the thread between them."
      actionLabel="Plan a build"
      items={[
        {
          label: "01 / Strategy",
          title: "Find the useful shape",
          description:
            "Clarify the user, the opportunity, and the smallest product that can prove the idea before the build gets expensive.",
        },
        {
          label: "02 / Interface",
          title: "Design the important moments",
          description:
            "Create a visual and interaction system that gives the product a strong point of view and a clear path through it.",
        },
        {
          label: "03 / Engineering",
          title: "Build it to last",
          description:
            "Ship robust Next.js and React experiences with accessible components, reliable data flows, and a calm codebase.",
        },
        {
          label: "04 / Automation",
          title: "Give the team leverage",
          description:
            "Connect AI and automation to real workflows so the system reduces work instead of adding another surface to manage.",
        },
      ]}
    />
  );
}

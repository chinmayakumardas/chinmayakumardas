import { PortfolioPage } from "@/components/ui/portfolio-page";

export default function Projects() {
  return (
    <PortfolioPage
      eyebrow="Projects / selected work"
      title="Built for the moment after the pitch."
      intro="A selection of product interfaces, intelligent workflows, and technical systems made to move from promising concept to dependable everyday tool."
      actionLabel="Discuss a project"
      items={[
        {
          label: "01 / Product",
          title: "Atlas research workspace",
          description:
            "A focused knowledge environment that turns scattered research into a navigable, collaborative system.",
        },
        {
          label: "02 / AI system",
          title: "Signal operations copilot",
          description:
            "An AI-assisted operations layer that surfaces the right context and turns repetitive decisions into clear actions.",
        },
        {
          label: "03 / Platform",
          title: "Northstar commerce",
          description:
            "A high-performance commerce experience designed around discovery, trust, and fast repeat purchasing.",
        },
        {
          label: "04 / Experiment",
          title: "Interfaces in motion",
          description:
            "A living collection of interaction studies exploring how restrained motion can make software easier to understand.",
        },
      ]}
    />
  );
}

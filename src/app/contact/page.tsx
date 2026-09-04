import { PortfolioPage } from "@/components/ui/portfolio-page";

export default function Contact() {
  return (
    <PortfolioPage
      eyebrow="Contact / make something useful"
      title="Tell me what needs to exist."
      intro="Have a product to shape, an interface to untangle, or an internal workflow that should be smarter? Send the context. I will reply with a considered next step."
      actionLabel="Email Chinmaya"
      actionHref="mailto:hello@chinmayakumardas.com"
      items={[
        {
          label: "Email",
          title: "hello@chinmayakumardas.com",
          description:
            "The best place to start. A short note with the problem, the timeline, and what success looks like is plenty.",
        },
        {
          label: "Based in",
          title: "Bhubaneswar, India",
          description:
            "Working remotely with teams everywhere, with a preference for direct collaboration and clear communication.",
        },
        {
          label: "Best fit",
          title: "Ambitious, practical teams",
          description:
            "People who care about the details, want to move with intent, and are open to making the product simpler.",
        },
        {
          label: "Availability",
          title: "Select engagements",
          description:
            "Currently taking on a small number of product, frontend, and AI engineering collaborations.",
        },
      ]}
    />
  );
}

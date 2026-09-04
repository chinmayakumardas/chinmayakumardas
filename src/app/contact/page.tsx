import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Button, Input, Textarea } from "@/components/ui";

const contactDetails = [
  ["Email", "hello@chinmayakumardas.com"],
  ["Location", "Bhubaneswar, India"],
  ["Availability", "Select 2026 engagements"],
];

export default function Contact() {
  return (
    <main>
      <section className="container-portfolio grid border-b border-border md:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b border-border py-12 md:border-b-0 md:border-r md:py-16 md:pr-12">
          <p className="type-label text-brand">Contact / project brief</p>
          <h1 className="type-display mt-6 max-w-3xl text-[clamp(2.35rem,4.5vw,4.25rem)] font-bold uppercase leading-[0.9]">
            Let&apos;s make something useful.
          </h1>
          <p className="type-body mt-8 max-w-md text-muted-foreground">
            Tell me what you are building, what is getting in the way, and what
            a good result looks like. I&apos;ll come back with a clear next
            step.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border">
          {contactDetails.map(([label, value]) => (
            <div
              key={label}
              className="flex min-h-28 flex-col justify-between p-6 md:p-8"
            >
              <span className="type-label text-muted-foreground">{label}</span>
              <span className="text-sm">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid border-b border-border md:grid-cols-2">
        <div className="container-portfolio border-b border-border py-10 md:border-b-0 md:border-r md:py-14">
          <p className="type-label text-muted-foreground">
            Please fill out this form
          </p>
          <form className="mt-8 grid gap-0 border-t border-border">
            <div className="grid md:grid-cols-2">
              <label className="type-label flex flex-col gap-3 border-b border-border py-5 md:border-r md:pr-5">
                First name
                <Input
                  name="firstName"
                  placeholder="Your first name"
                  required
                />
              </label>
              <label className="type-label flex flex-col gap-3 border-b border-border py-5 md:pl-5">
                Last name
                <Input name="lastName" placeholder="Your last name" required />
              </label>
            </div>
            <label className="type-label flex flex-col gap-3 border-b border-border py-5">
              Email
              <Input
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </label>
            <label className="type-label flex flex-col gap-3 border-b border-border py-5">
              Message
              <Textarea
                name="message"
                placeholder="Tell me about the work"
                className="min-h-32"
                required
              />
            </label>
            <Button
              type="submit"
              className="brand-button mt-6 h-11 w-full rounded-none border-0 px-4 md:w-fit"
            >
              Send message <FiArrowUpRight size={16} />
            </Button>
          </form>
        </div>

        <div className="blueprint-surface flex min-h-96 items-center justify-center p-6 md:min-h-full">
          <svg
            viewBox="0 0 600 480"
            className="relative z-10 w-full max-w-xl text-foreground"
            fill="none"
            role="img"
            aria-label="Abstract product architecture diagram"
          >
            <path
              d="M70 390h460M110 390V170h110v220M220 390V100h160v290M380 390V190h110v200M70 170l95-70 135 55 135-55 95 70M110 255h110M380 270h110"
              stroke="currentColor"
              strokeOpacity=".72"
              strokeWidth="2"
            />
            <path
              d="M70 130h460M70 210h460M70 290h460M165 60v370M300 60v370M435 60v370"
              stroke="currentColor"
              strokeOpacity=".16"
              strokeDasharray="4 7"
            />
            <path
              d="M220 100h160v80H220zM220 230h160v80H220z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect x="288" y="204" width="24" height="24" fill="var(--brand)" />
            <circle cx="70" cy="130" r="5" fill="var(--brand)" />
            <circle cx="530" cy="130" r="5" fill="var(--brand)" />
            <text
              x="86"
              y="88"
              fill="currentColor"
              fillOpacity=".65"
              fontFamily="var(--font-geist-mono)"
              fontSize="10"
              letterSpacing="2"
            >
              CHINMAYA / PRODUCT SYSTEMS
            </text>
          </svg>
        </div>
      </section>

      <section className="container-portfolio flex flex-wrap items-center justify-between gap-5 py-6">
        <p className="type-label text-muted-foreground">Direct lines</p>
        <div className="flex flex-wrap gap-5 font-mono text-xs uppercase tracking-widest">
          <a
            href="mailto:hello@chinmayakumardas.com"
            className="flex items-center gap-2 hover:text-brand"
          >
            <FiMail size={14} /> Email
          </a>
          <a
            href="https://github.com"
            className="flex items-center gap-2 hover:text-brand"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="flex items-center gap-2 hover:text-brand"
          >
            <FiLinkedin size={14} /> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

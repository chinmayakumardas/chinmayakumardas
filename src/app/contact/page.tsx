import { FiArrowUpRight } from "react-icons/fi";
import { Button, Input, Textarea } from "@/components/ui";

const contactDetails = [
  ["Email", "hello@chinmayakumardas.com"],
  ["Location", "Bhubaneswar, India"],
  ["Availability", "Select 2026 engagements"],
];

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="grid border-b border-border md:grid-cols-2">
        <div className="border-b border-border px-6 py-8 md:border-b-0 md:border-r md:px-8 md:py-10">
          <h1 className="type-display max-w-3xl text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[0.88]">
            Get in touch
          </h1>
          <p className="type-body mt-5 max-w-xl text-muted-foreground">
            Tell me what you are building, what is getting in the way, and what
            a good result looks like. Let&apos;s build it.
          </p>
        </div>

        <div className="grid grid-cols-3 divide-x divide-border">
          {contactDetails.map(([label, value]) => (
            <div
              key={label}
              className="flex min-h-28 flex-col justify-between p-4 md:p-6"
            >
              <span className="type-label text-muted-foreground">{label}</span>
              <span className="wrap-break-word text-sm">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid border-b border-border md:grid-cols-2">
        <div className="border-b border-border md:border-b-0 md:border-r">
          <div className="border-b border-border px-6 py-5 md:px-8">
            <h2 className="type-display text-[clamp(1.8rem,3vw,3rem)] font-bold uppercase leading-none">
              Please fill out this form
            </h2>
          </div>
          <form className="contact-form">
            <div className="grid md:grid-cols-2">
              <label className="contact-field md:border-r">
                <span>First name</span>
                <Input
                  name="firstName"
                  placeholder=""
                  required
                />
              </label>
              <label className="contact-field">
                <span>Last name</span>
                <Input name="lastName" placeholder="" required />
              </label>
            </div>
            <label className="contact-field">
              <span>Email</span>
              <Input
                name="email"
                type="email"
                placeholder=""
                required
              />
            </label>
            <label className="contact-field">
              <span>Phone number</span>
              <Input name="phone" type="tel" placeholder="" required />
            </label>
            <label className="contact-field contact-message-field">
              <span>Message</span>
              <Textarea
                name="message"
                placeholder=""
                className="min-h-36"
                required
              />
            </label>
            <Button
              type="submit"
              className="contact-submit brand-button h-12 w-full rounded-none border-0 px-6 text-left"
            >
              Submit <FiArrowUpRight size={16} />
            </Button>
          </form>
        </div>

        <div className="blueprint-surface contact-visual flex min-h-96 items-center justify-center p-4 md:min-h-full md:p-8">
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
    </main>
  );
}

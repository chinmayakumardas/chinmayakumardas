import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/* Work */}
        <section id="work" className="section-y">
          <div className="container-site">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Selected work
            </p>
            <h2 className="heading-2 mt-3">Projects I&apos;m proud of</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              A few recent builds focused on craft, systems, and interaction.
              Case studies coming soon.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-y border-t border-border">
          <div className="container-site">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              About
            </p>
            <h2 className="heading-2 mt-3">Design-minded, code-first</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              I work at the intersection of design and engineering — turning
              ideas into clear interfaces, reusable systems, and smooth
              experiences.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-y border-t border-border">
          <div className="container-site">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <h2 className="heading-2 mt-3">Say hello</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Have a project in mind or just want to connect? Reach out anytime.
            </p>
            <a
              href="mailto:hello@chinmaya.dev"
              className="mt-6 inline-block text-base font-medium text-foreground underline-offset-4 hover:underline"
            >
              hello@chinmaya.dev
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
import Image from "next/image";
import Link from "next/link";
import { ChevronsRight, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const columns = [
  { title: "Quick Links", links: ["Home", "About Us", "Programs", "Pricing Plans", "Contact Us"] },
  { title: "Other Links", links: ["Blog", "Blog Details", "User Journey", "Journey Details"] },
  { title: "Utility Pages", links: ["Style Guide", "Privacy Policy", "Terms & Conditions", "404 Error"] },
  { title: "Get in Touch", links: ["hello@havenly.com", "+1 (555) 123-4567", "+1 (808) 555-0111"] },
  { title: "Social Media", links: ["Youtube", "Facebook", "Linkedin", "Instagram"] },
];

export function SiteFooter() {
  return (
    <footer className="section-dark bg-background">
      {/* CTA banner */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background" aria-hidden />

        <div className="container-site section-y flex flex-col items-center text-center">
          <Badge variant="outline" className="glass rounded-md border-foreground/30 font-mono text-[11px] font-normal uppercase tracking-wider">
            Your next chapter
          </Badge>
          <h2 className="heading-2 mt-5 max-w-xl text-foreground">
            Take the first step toward feeling better
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Start your journey with compassionate guidance, practical support, and a plan built around your unique needs.
          </p>
          <Button asChild className="mt-6 h-11 gap-3 rounded-full pl-5 pr-1.5 hover:shadow-glow">
            <Link href="/book">
              Start Your Wellness Journey
              <span className="grid size-8 place-items-center rounded-full bg-primary-foreground text-primary">
                <ChevronsRight className="size-4" />
              </span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer panel */}
      <div className="p-3 md:p-5">
        <div className="glow-footer relative overflow-hidden rounded-[2rem]">
          <div className="container-site pt-12">
            {/* Newsletter */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h3 className="max-w-xs text-2xl font-medium leading-snug tracking-tight">
                Join our newsletter to get insights and updates
              </h3>

              <form className="glass flex w-full max-w-md items-center gap-2 rounded-full p-1.5 pl-5">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <Input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email..."
                  className="h-9 border-0 bg-transparent px-0 text-sm shadow-none focus-visible:ring-0 dark:bg-transparent"
                />
                <Button type="submit" className="h-10 shrink-0 gap-2 rounded-full pl-4 pr-1.5">
                  Subscribe Now
                  <span className="grid size-7 place-items-center rounded-full bg-primary-foreground text-primary">
                    <ChevronsRight className="size-3.5" />
                  </span>
                </Button>
              </form>
            </div>

            {/* Divider with icon */}
            <div className="my-10 flex items-center gap-4" aria-hidden>
              <span className="h-px flex-1 border-t border-dashed border-foreground/25" />
              <Sun className="size-5 text-foreground/70" />
              <span className="h-px flex-1 border-t border-dashed border-foreground/25" />
            </div>

            {/* Link columns */}
            <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 lg:grid-cols-5">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs text-foreground/60">{col.title}</h4>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((l) => (
                      <li key={l}>
                        <Link href="#" className="transition hover:text-glow-amber">
                          {l}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Wordmark */}
            <p
              aria-hidden
              className="text-glow mt-10 select-none text-center text-[22vw] font-semibold leading-[0.8] tracking-tighter lg:text-[17rem]"
            >
              Chinmaya
            </p>
          </div>

          <p className="container-site pb-5 pt-2 text-[11px] text-foreground/70">
            © {new Date().getFullYear()} Havenly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

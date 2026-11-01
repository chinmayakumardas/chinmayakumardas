import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="surface-dark">
      <div className="container-main section">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-body-lg text-deep text-white">
              {site.name}
            </p>
            <p className="mt-2 text-body-sm text-white/60">
              {site.title}
            </p>
            <p className="mt-4 text-body-sm text-white/50">
              {site.availability}
            </p>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-16">
            <div>
              <p className="text-label text-white/40">Navigate</p>
              <ul className="mt-3 space-y-2">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-body-sm text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-label text-white/40">Contact</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-body-sm text-white/80 transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-body-sm text-white/50">{site.location}</li>
              </ul>
            </div>

            <div>
              <p className="text-label text-white/40">Social</p>
              <ul className="mt-3 space-y-2">
                {Object.entries(site.social).map(([key, href]) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-sm capitalize text-white/80 transition-colors hover:text-white"
                    >
                      {key}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-white/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-caption text-white/40">
            Built with Next.js · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

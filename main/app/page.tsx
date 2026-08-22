export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20">
        <div>
          <p className="mb-4 text-sm font-medium text-zinc-500">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Chinmaya Kumar Das
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-600">
            Frontend Developer specializing in Next.js, React, and TypeScript.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-3xl font-semibold">About</h2>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
            I build modern, responsive, and scalable web applications with
            Next.js, React, TypeScript, and modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-3xl font-semibold">Projects</h2>

          <p className="mt-4 text-zinc-600">
            Projects will be added here.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-3xl font-semibold">Contact</h2>

          <p className="mt-4 text-zinc-600">
            Feel free to get in touch.
          </p>
        </div>
      </section>
    </main>
  );
}

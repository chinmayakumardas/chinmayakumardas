export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative flex min-h-screen w-full items-center overflow-hidden px-6 py-20">
        {/* Background decoration */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

        <div className="relative z-10 w-full">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Hello, I&apos;m
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Chinmaya Kumar Das
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300 sm:text-2xl">
            Frontend Developer specializing in{" "}
            <span className="font-semibold text-cyan-400">Next.js</span>,{" "}
            <span className="font-semibold text-purple-400">React</span>, and{" "}
            <span className="font-semibold text-pink-400">TypeScript</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="w-full border-t border-white/10 bg-zinc-900">
        <div className="w-full px-6 py-24">
          <h2 className="text-3xl font-semibold">About</h2>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
            I build modern, responsive, and scalable web applications with
            Next.js, React, TypeScript, and modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="w-full border-t border-white/10 bg-zinc-950">
        <div className="w-full px-6 py-24">
          <h2 className="text-3xl font-semibold">Projects</h2>

          <p className="mt-4 text-zinc-400">
            Projects will be added here.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full border-t border-white/10 bg-zinc-900">
        <div className="w-full px-6 py-24">
          <h2 className="text-3xl font-semibold">Contact</h2>

          <p className="mt-4 text-zinc-400">
            Feel free to get in touch.
          </p>
        </div>
      </section>
    </main>
  );
}

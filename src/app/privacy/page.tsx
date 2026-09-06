
export default function PrivacyPage() {
  return (
      <div className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="text-center">
          <span className="type-label text-muted-foreground">
            Privacy Policy
          </span>

          <h1 className="type-display mt-5 text-[clamp(2rem,5vw,3.5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-[1.6] text-muted-foreground">
            How information is collected and handled when you use this
            website.
          </p>
        </div>

        <div className="mt-16 space-y-12 text-sm leading-[1.75] text-muted-foreground sm:mt-20">
          <section>
            <h2 className="mb-4 font-medium text-foreground">
              Information I collect
            </h2>

            <p>
              When you contact me through this website, you may provide
              information such as your name, email address, company, project
              details, or anything else you choose to include in your message.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-medium text-foreground">
              How I use your information
            </h2>

            <p>
              Information you provide is used to respond to enquiries, discuss
              projects, communicate with you, and provide services. Technical
              information may also be used to understand website usage and
              improve its performance.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-medium text-foreground">
              Third-party services
            </h2>

            <p>
              This website may use third-party services for hosting, analytics,
              forms, email, or other functionality. These services may process
              information as necessary to provide their functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-medium text-foreground">
              Cookies
            </h2>

            <p>
              This website may use cookies or similar technologies for
              essential functionality, preferences, or analytics. You can
              control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-medium text-foreground">
              Data security
            </h2>

            <p>
              Reasonable measures are taken to protect personal information
              from unauthorized access, alteration, disclosure, or
              destruction. However, no method of internet transmission or
              storage can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-medium text-foreground">
              Your rights
            </h2>

            <p>
              Depending on where you live, you may have rights regarding your
              personal information, including requesting access, correction,
              or deletion.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-medium text-foreground">
              Changes to this policy
            </h2>

            <p>
              This Privacy Policy may be updated when necessary to reflect
              changes to the website, services, or applicable requirements.
              Updates will be published on this page.
            </p>
          </section>
        </div>

  
      </div>
  );
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slap-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 pt-32 pb-24">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-5 h-px bg-slap-orange/70" />
            <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
              Legal
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-slap-cream mb-4">Privacy Policy</h1>
          <p className="font-body text-slap-muted text-sm">Last updated: May 2025</p>
        </div>

        <div className="space-y-10 font-body text-slap-muted text-base leading-relaxed">

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">What This Is</h2>
            <p>
              Slap Cooking ("we," "us," or "our") operates this website as a recipe and food content
              platform. This Privacy Policy describes what information we may collect, how we use it,
              and your rights in relation to it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="space-y-2">
              {[
                'Usage data: pages visited, time on site, browser type, and device information collected automatically through standard analytics tools.',
                'Voluntarily submitted information: if you contact us via email or a future contact form.',
                'Cookies: small data files stored on your device to improve site performance and remember preferences.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slap-orange/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">How We Use Your Information</h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="space-y-2">
              {[
                'Operate and improve the Slap Cooking website and content.',
                'Understand how visitors use our site so we can make it better.',
                'Respond to inquiries or support requests.',
                'Comply with applicable legal obligations.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slap-orange/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Cookies</h2>
            <p>
              We may use cookies and similar tracking technologies to enhance your experience. You
              can control cookie settings through your browser. Disabling cookies may affect some
              site functionality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Third-Party Services</h2>
            <p>
              We may use third-party analytics services (such as Google Analytics) to understand
              traffic patterns. These services have their own privacy policies governing how they
              handle data. We do not sell your personal information to any third party.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Data Retention</h2>
            <p>
              We retain data only as long as necessary for the purposes outlined in this policy or
              as required by applicable law. Analytics data is typically retained in aggregate form.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Your Rights</h2>
            <p>
              Depending on your location, you may have rights including: access to your personal
              data, correction of inaccurate data, deletion of your data, and the right to object
              to certain processing. To exercise these rights, contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Children's Privacy</h2>
            <p>
              Slap Cooking is not directed at children under 13. We do not knowingly collect
              personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Changes To This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              "Last updated" date above. Continued use of the site after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Contact</h2>
            <p>
              Questions about this Privacy Policy? Reach us at{' '}
              <a href="mailto:hello@slapcooking.com" className="text-slap-orange hover:text-slap-ember transition-colors">
                hello@slapcooking.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

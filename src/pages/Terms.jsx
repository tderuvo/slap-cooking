export default function Terms() {
  return (
    <div className="min-h-screen bg-slap-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 pt-32 pb-24">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-5 h-0.5 bg-slap-orange" />
            <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
              Legal
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-slap-cream mb-4">Terms of Use</h1>
          <p className="font-body text-slap-muted text-sm">Last updated: May 2025</p>
        </div>

        <div className="space-y-10 font-body text-slap-muted text-base leading-relaxed">

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Agreement To Terms</h2>
            <p>
              By accessing or using Slap Cooking ("the Site"), you agree to be bound by these Terms
              of Use. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Use Of The Site</h2>
            <p className="mb-4">
              Slap Cooking provides recipe content and food-related information for personal,
              non-commercial use. You agree not to:
            </p>
            <ul className="space-y-2">
              {[
                'Reproduce, copy, or republish any content from the Site without written permission.',
                'Use the Site for any unlawful purpose or in violation of applicable regulations.',
                'Attempt to gain unauthorized access to any part of the Site or its infrastructure.',
                'Use automated tools to scrape, crawl, or harvest content from the Site without permission.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slap-orange flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Intellectual Property</h2>
            <p>
              All content on this Site — including recipes, text, graphics, logos, and design — is
              the property of Slap Cooking and is protected by applicable intellectual property
              laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Recipe & Food Safety Disclaimer</h2>
            <p>
              All recipes on Slap Cooking are provided for informational and entertainment purposes.
              Always follow safe food handling practices, check for allergens, and use proper
              cooking temperatures. Slap Cooking is not responsible for any outcomes resulting from
              following recipes on this Site. Cook responsibly. Stay safe. Then slap.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Affiliate Links & Advertising</h2>
            <p>
              Slap Cooking may in the future include affiliate links to products we recommend. If we
              receive compensation for linking to a product, we will disclose that clearly. We only
              recommend products we believe in.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Disclaimer Of Warranties</h2>
            <p>
              The Site and its content are provided "as is" without warranties of any kind, either
              express or implied. We do not warrant that the Site will be uninterrupted, error-free,
              or free from harmful components.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Limitation Of Liability</h2>
            <p>
              To the fullest extent permitted by law, Slap Cooking shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of or
              inability to use the Site or its content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Governing Law</h2>
            <p>
              These Terms are governed by applicable laws. Any disputes arising under these Terms
              shall be subject to the exclusive jurisdiction of the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Changes To These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes become effective when
              posted to the Site. Continued use of the Site constitutes acceptance of updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-slap-cream mb-3">Contact</h2>
            <p>
              Questions about these Terms? Contact us at{' '}
              <span className="text-slap-orange">hello@slapcooking.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

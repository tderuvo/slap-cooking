import { Link } from 'react-router-dom'

const pillars = [
  {
    icon: '🔥',
    headline: 'Grocery Shortcuts, Upgraded.',
    body: 'We start with what\'s actually in people\'s fridges and freezers — and we make it slap. Frozen pasta, boxed mac, instant ramen, store-bought shortcuts. Then we hit it with one smart move.',
  },
  {
    icon: '🚫',
    headline: 'No Authenticity Police.',
    body: 'You will never find the words "traditional," "grandmother\'s recipe," or "the real way to do this" anywhere on this site. There is no authenticity police here. Just flavor.',
  },
  {
    icon: '⚡',
    headline: 'The Upgrade Is The Point.',
    body: 'The shortcut is where you start. The slap is the move that makes dinner feel like something you actually want to eat. That\'s it. That\'s the whole idea.',
  },
  {
    icon: '🎯',
    headline: 'Weeknight Flex Energy.',
    body: 'These aren\'t Sunday project meals. They\'re Tuesday night wins. Fast, flavorful, and genuinely satisfying. No 47-ingredient grocery lists. No three-day ferments.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-slap-black">

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-8 overflow-hidden">
        {/* Subtle warm accent */}
        <div
          className="absolute top-0 right-0 w-[40vw] h-[40vh] opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(224,85,0,0.08), transparent 70%)',
          }}
        />

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-6 h-px bg-slap-orange/70" />
            <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
              The concept
            </span>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-slap-cream leading-tight mb-6">
            Food hacks
            <br />
            without{' '}
            <span className="italic text-slap-orange">shame.</span>
          </h1>
          <p className="font-body text-xl text-slap-muted max-w-2xl leading-relaxed">
            Slap Cooking exists to prove that you don't need a $300 grocery haul or a culinary school
            degree to eat something that genuinely slaps on a weeknight.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="px-4 sm:px-8 pb-20">
        <div className="max-w-5xl mx-auto">

          {/* Big statement */}
          <div className="relative overflow-hidden rounded-2xl p-8 sm:p-12 mb-16 bg-slap-char border border-slap-smoke">
            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-60 rounded-t-2xl"
              style={{ background: 'linear-gradient(to right, #e05500, #c07800, transparent)' }}
            />
            <p className="font-display italic text-3xl sm:text-4xl md:text-5xl text-slap-cream leading-snug">
              "This had no business
              <br />
              tasting this{' '}
              <span className="text-slap-orange">good."</span>
            </p>
            <p className="mt-6 font-body text-slap-muted text-base">
              That's the reaction we're building every single recipe toward.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-slap-smoke hover:border-slap-orange/25 rounded-2xl p-7 transition-colors duration-300"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-display text-xl text-slap-cream mb-3">{p.headline}</h3>
                <p className="font-body text-slap-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* What we are not */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-5 h-px bg-slap-orange/70" />
              <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
                Let's be clear
              </span>
            </div>
            <h2 className="font-display text-4xl text-slap-cream mb-8">What this isn't.</h2>

            <div className="space-y-3">
              {[
                'A "frugal living" blog',
                'A lecture about cooking from scratch',
                'Minimalist Scandinavian dinner inspo',
                'A food snob telling you what "real" food is',
                'Trying to make you feel bad about your freezer',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 font-body text-slap-muted text-base">
                  <span className="text-slap-red text-lg">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-slap-smoke">
            <p className="font-body text-slap-muted mb-6">
              That's enough talking. Go make something that slaps.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slap-orange hover:bg-slap-ember text-white font-body font-bold text-base tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(224,85,0,0.20)]"
            >
              See The Recipes
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

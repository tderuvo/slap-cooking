import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'

export default function Home() {
  return (
    <div className="min-h-screen bg-slap-black">
      {/* ──────────────── HERO ──────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain">

        {/* Organic kitchen warmth — warm ember behind the headline */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '5%',
            right: '8%',
            width: '58vw',
            height: '60vh',
            background:
              'radial-gradient(ellipse at center, rgba(130, 52, 10, 0.20) 0%, rgba(75, 28, 5, 0.09) 45%, transparent 78%)',
            filter: 'blur(48px)',
          }}
        />
        {/* Secondary warmth — low left, like light bouncing off a counter */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '0',
            left: '0',
            width: '42vw',
            height: '42vh',
            background:
              'radial-gradient(ellipse at bottom left, rgba(155, 75, 10, 0.12) 0%, transparent 68%)',
            filter: 'blur(30px)',
          }}
        />

        {/* Fine noise texture over the hero */}
        <div
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.16'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px bg-slap-orange opacity-80" />
              <span className="font-body text-slap-orange text-sm font-semibold tracking-widest uppercase">
                This had no business tasting this good
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-none text-slap-cream mb-6 text-shadow-lg">
              Make grocery
              <br />
              food{' '}
              <span
                className="text-slap-orange relative inline-block"
                style={{ textShadow: '0 0 18px rgba(255, 90, 0, 0.28)' }}
              >
                slap.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg sm:text-xl text-slap-muted leading-relaxed max-w-2xl mb-10">
              Frozen dinners. Packaged meals. Store-bought shortcuts.{' '}
              <span className="text-slap-cream font-medium">
                Hit them with one smart move
              </span>{' '}
              and turn dinner into a takeout killer.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#recipes"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-slap-orange hover:bg-slap-ember text-slap-cream font-body font-bold text-base tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-[0_4px_24px_rgba(180,60,0,0.30)]"
              >
                See The Recipes
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/12 text-slap-muted hover:text-slap-cream hover:border-white/25 font-body font-medium text-base tracking-wide transition-all duration-200"
              >
                What Is This?
              </Link>
            </div>

            {/* Micro copy */}
            <p className="mt-8 font-body text-slap-warm/60 text-xs tracking-wider uppercase">
              No food snobbery. No shame. Just meals that hit.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="font-body text-xs text-slap-muted tracking-widest uppercase">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slap-muted to-transparent" />
        </div>
      </section>

      {/* ──────────────── RECIPE GRID ──────────────── */}
      <section id="recipes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-6 h-px bg-slap-orange opacity-80" />
              <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
                The Lineup
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-slap-cream tracking-wide">
              Recipes That Slap
            </h2>
          </div>
          <p className="font-body text-slap-muted text-sm max-w-xs">
            10 recipes. Zero shame. All slap.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* ──────────────── BRAND BAR ──────────────── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-display text-xl md:text-2xl text-slap-warm/55 tracking-widest uppercase">
            Frozen food. Bad decisions. Great outcomes.
          </p>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'

export default function Home() {
  return (
    <div className="min-h-screen bg-slap-black">
      {/* ──────────────── HERO ──────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain">
        {/* Background warm glow */}
        <div
          className="absolute top-0 right-0 w-[60vw] h-[60vh] opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top right, #ff4500 0%, #cc3700 30%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40vw] h-[40vh] opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, #f5a623 0%, transparent 70%)',
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Orange accent slash */}
        <div
          className="absolute right-0 top-0 w-3 h-full opacity-60"
          style={{
            background: 'linear-gradient(to bottom, #ff4500, transparent)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-0.5 bg-slap-orange" />
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
                style={{
                  textShadow: '0 0 40px rgba(255,69,0,0.5)',
                }}
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slap-orange hover:bg-slap-deep text-slap-cream font-body font-bold text-base tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-slap-orange/25"
              >
                See The Recipes
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-slap-muted hover:text-slap-cream hover:border-white/30 font-body font-medium text-base tracking-wide transition-all duration-200"
              >
                What Is This?
              </Link>
            </div>

            {/* Micro copy */}
            <p className="mt-8 font-body text-slap-muted/60 text-xs tracking-wider uppercase">
              No food snobbery. No shame. Just meals that hit.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-body text-xs text-slap-muted tracking-widest uppercase">scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-slap-muted to-transparent" />
        </div>
      </section>

      {/* ──────────────── RECIPE GRID ──────────────── */}
      <section id="recipes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-6 h-0.5 bg-slap-orange" />
              <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
                The Lineup
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-slap-cream tracking-wide">
              Recipes That Slap
            </h2>
          </div>
          <p className="font-body text-slap-muted text-sm max-w-xs">
            Grocery-store ingredients. Upgraded. Every single one.
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
          <p className="font-display text-2xl md:text-3xl text-slap-muted/50 tracking-widest uppercase">
            Upgrade · Flavor · Flex · Slap
          </p>
        </div>
      </section>
    </div>
  )
}

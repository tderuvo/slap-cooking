import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'

export default function Home() {
  return (
    <div className="min-h-screen bg-slap-black">

      {/* ──────────────── HERO ──────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Very subtle warm bloom — barely visible, just adds warmth */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            right: 0,
            width: '60vw',
            height: '70vh',
            background: 'radial-gradient(ellipse at top right, rgba(224, 85, 0, 0.05) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px bg-slap-orange/70" />
              <span className="font-body text-slap-orange text-sm font-semibold tracking-widest uppercase">
                This had no business tasting this good
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[1.05] text-slap-cream mb-7">
              Make grocery
              <br />
              food{' '}
              <span className="italic text-slap-orange">slap.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg sm:text-xl text-slap-muted leading-relaxed max-w-xl mb-10">
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slap-orange hover:bg-slap-ember text-white font-body font-bold text-base tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-[0_4px_20px_rgba(224,85,0,0.22)]"
              >
                See The Recipes
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slap-smoke text-slap-muted hover:text-slap-cream hover:border-slap-orange/30 font-body font-medium text-base tracking-wide transition-all duration-200"
              >
                What Is This?
              </Link>
            </div>

            {/* Micro copy */}
            <p className="mt-8 font-body text-slap-warm text-xs tracking-wider uppercase">
              No food snobbery. No shame. Just meals that hit.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────── RECIPE GRID ──────────────── */}
      <section id="recipes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-6 h-px bg-slap-orange/70" />
              <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
                The Lineup
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-slap-cream">
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
      <section className="py-14 border-t border-slap-smoke">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-display text-xl md:text-2xl text-slap-muted tracking-wide">
            Frozen food. Bad decisions. Great outcomes.
          </p>
        </div>
      </section>
    </div>
  )
}

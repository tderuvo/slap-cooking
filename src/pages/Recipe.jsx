import { useParams, Link, Navigate } from 'react-router-dom'
import { getRecipeBySlug, recipes } from '../data/recipes'

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="inline-block w-5 h-0.5 bg-slap-orange flex-shrink-0" />
      <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
        {label}
      </span>
    </div>
  )
}

export default function Recipe() {
  const { slug } = useParams()
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    return <Navigate to="/" replace />
  }

  // Find adjacent recipes for "next" navigation
  const currentIndex = recipes.findIndex((r) => r.slug === slug)
  const nextRecipe = recipes[(currentIndex + 1) % recipes.length]

  return (
    <div className="min-h-screen bg-slap-black">
      {/* ──────────────── HERO ──────────────── */}
      <div
        className="relative min-h-[55vh] flex flex-col justify-end grain overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${recipe.gradientFrom} 0%, ${recipe.gradientTo} 60%, #0d0a07 100%)`,
        }}
      >
        {/* Diagonal stripe overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent 0, transparent 16px, rgba(255,255,255,0.07) 16px, rgba(255,255,255,0.07) 32px)',
          }}
        />

        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slap-black to-transparent" />

        {/* Back link */}
        <div className="absolute top-24 left-0 right-0 px-4 sm:px-8 max-w-5xl mx-auto w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All Recipes
          </Link>
        </div>

        {/* Big emoji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <span className="text-[14rem] select-none">{recipe.emoji}</span>
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-8 pb-12 pt-32">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-slap-cream font-body font-semibold text-xs tracking-wide border border-white/10">
              ⏱ {recipe.time}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-slap-cream font-body font-semibold text-xs tracking-wide border border-white/10">
              🍽 {recipe.servings} {recipe.servings === '1' ? 'serving' : 'servings'}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-slap-cream leading-none mb-4 text-shadow-lg">
            {recipe.title}
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl leading-relaxed">
            {recipe.hook}
          </p>
        </div>
      </div>

      {/* ──────────────── CONTENT ──────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 space-y-16">

        {/* The Shortcut */}
        <div>
          <SectionLabel label="The Shortcut" />
          <h2 className="font-display text-3xl text-slap-cream mb-4">Start here.</h2>
          <p className="font-body text-slap-muted leading-relaxed text-base">
            {recipe.shortcut}
          </p>
        </div>

        {/* The Slap */}
        <div className="relative pl-6 border-l-2 border-slap-orange">
          <SectionLabel label="The Slap" />
          <h2 className="font-display text-3xl text-slap-cream mb-4">The move that changes everything.</h2>
          <p className="font-body text-slap-cream/80 leading-relaxed text-base">
            {recipe.theSlap}
          </p>
        </div>

        {/* Ingredients */}
        <div>
          <SectionLabel label="What You Need" />
          <h2 className="font-display text-3xl text-slap-cream mb-6">The lineup.</h2>
          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-slap-muted">
                <span
                  className="mt-2 w-2 h-2 rounded-full bg-slap-orange flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-base">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div>
          <SectionLabel label="How To Slap It Together" />
          <h2 className="font-display text-3xl text-slap-cream mb-6">Do this.</h2>
          <ol className="space-y-6">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slap-orange/15 border border-slap-orange/30 flex items-center justify-center font-display text-slap-orange text-sm">
                  {i + 1}
                </span>
                <p className="font-body text-slap-muted leading-relaxed text-base pt-1">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Final Slap */}
        <div className="relative overflow-hidden rounded-2xl p-8 bg-slap-card border border-slap-orange/20">
          {/* BG glow */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${recipe.gradientTo}, transparent 70%)`,
            }}
          />
          <SectionLabel label="The Final Slap" />
          <p
            className="font-display text-3xl md:text-4xl text-slap-cream relative z-10"
            style={{ textShadow: '0 0 40px rgba(255,69,0,0.3)' }}
          >
            {recipe.finalSlap}
          </p>
        </div>

        {/* Next Recipe CTA */}
        <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-slap-muted text-xs uppercase tracking-widest mb-1">Up next</p>
            <p className="font-display text-xl text-slap-cream">{nextRecipe.title}</p>
          </div>
          <Link
            to={`/recipes/${nextRecipe.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slap-orange hover:bg-slap-deep text-slap-cream font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Cook This Next
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { SmartRecipeThumb } from './SmartRecipeImage'

export default function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="group block bg-slap-card rounded-xl overflow-hidden border border-white/8 hover:border-slap-orange/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_28px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_-8px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,69,0,0.12)]"
    >
      {/* Image area */}
      <div
        className="relative h-52 sm:h-56 overflow-hidden"
        style={{
          background: `linear-gradient(155deg, ${recipe.gradientFrom} 0%, ${recipe.gradientTo} 100%)`,
        }}
      >
        {/* Recipe photo — renders only when file exists; placeholder shows through otherwise */}
        <SmartRecipeThumb
          slug={recipe.slug}
          title={recipe.title}
          gradientFrom={recipe.gradientFrom}
          gradientTo={recipe.gradientTo}
        />

        {/* Fine noise grain */}
        <div
          className="absolute inset-0 card-grain opacity-60"
          style={{ mixBlendMode: 'overlay' }}
        />

        {/* Subtle warm center bloom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 38% 42%, rgba(255, 215, 150, 0.08) 0%, transparent 55%)',
          }}
        />

        {/* Deep vignette — pulls focus inward */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

        {/* Time badge — top right */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-sm text-slap-cream font-body font-semibold text-xs tracking-wide border border-white/10">
            {recipe.time}
          </span>
        </div>

        {/* Emoji — small accent at bottom left */}
        <div className="absolute bottom-3.5 left-4 z-10">
          <span
            className="text-[1.85rem] select-none drop-shadow-lg transition-transform duration-300 group-hover:scale-110 inline-block"
            role="img"
            aria-hidden="true"
          >
            {recipe.emoji}
          </span>
        </div>

        {/* Bottom accent line — reveals on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-slap-orange/70 via-slap-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card body */}
      <div className="p-5 pt-4">
        <h3 className="font-display text-xl text-slap-cream tracking-wide leading-snug mb-2 group-hover:text-slap-orange transition-colors duration-200">
          {recipe.title}
        </h3>

        {/* Thin accent rule under title */}
        <div className="w-7 h-px bg-slap-orange/50 mb-3 transition-all duration-300 group-hover:w-14 group-hover:bg-slap-orange/80" />

        <p className="font-body text-slap-muted text-sm leading-relaxed mb-5 line-clamp-2">
          {recipe.hook}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-body text-slap-warm/70 text-xs uppercase tracking-widest">
            {recipe.servings === '1' ? '1 serving' : `${recipe.servings} servings`}
          </span>
          <span className="inline-flex items-center gap-1.5 font-body font-bold text-sm text-slap-orange group-hover:text-slap-gold transition-colors duration-200">
            Make It Slap
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

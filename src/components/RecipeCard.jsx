import { Link } from 'react-router-dom'
import { SmartRecipeThumb } from './SmartRecipeImage'

export default function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-slap-smoke hover:border-slap-orange/30 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_8px_rgba(28,25,23,0.06)] hover:shadow-[0_12px_32px_rgba(28,25,23,0.11)]"
    >
      {/* Image area */}
      <div
        className="relative h-52 sm:h-56 overflow-hidden"
        style={{
          background: `linear-gradient(155deg, ${recipe.gradientFrom} 0%, ${recipe.gradientTo} 100%)`,
        }}
      >
        {/* Recipe photo — renders only when file exists; gradient placeholder shows through otherwise */}
        <SmartRecipeThumb slug={recipe.slug} title={recipe.title} />

        {/* Vignette — lighter so cards integrate with the cream page bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

        {/* Time badge — top right */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-slap-cream font-body font-semibold text-xs tracking-wide border border-slap-smoke/40">
            {recipe.time}
          </span>
        </div>

        {/* Emoji — small accent at bottom left */}
        <div className="absolute bottom-3.5 left-4 z-10">
          <span
            className="text-[1.85rem] select-none drop-shadow-md transition-transform duration-300 group-hover:scale-110 inline-block"
            role="img"
            aria-hidden="true"
          >
            {recipe.emoji}
          </span>
        </div>

        {/* Bottom accent line — reveals on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-slap-orange/60 via-slap-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card body */}
      <div className="p-5 pt-4">
        <h3 className="font-display text-lg text-slap-cream tracking-normal leading-snug mb-2 group-hover:text-slap-orange transition-colors duration-200">
          {recipe.title}
        </h3>

        {/* Thin accent rule under title */}
        <div className="w-7 h-px bg-slap-orange/40 mb-3 transition-all duration-300 group-hover:w-14 group-hover:bg-slap-orange/70" />

        <p className="font-body text-slap-muted text-sm leading-relaxed mb-5 line-clamp-2">
          {recipe.hook}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-body text-slap-warm text-xs uppercase tracking-widest">
            {recipe.servings === '1' ? '1 serving' : `${recipe.servings} servings`}
          </span>
          <span className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-slap-orange group-hover:text-slap-ember transition-colors duration-200">
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

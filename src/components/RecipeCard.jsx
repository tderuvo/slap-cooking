import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="group block bg-slap-card rounded-2xl overflow-hidden border border-white/5 hover:border-slap-orange/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slap-orange/10"
    >
      {/* Image Placeholder */}
      <div
        className="relative h-56 sm:h-60 overflow-hidden stripe-overlay"
        style={{
          background: `linear-gradient(145deg, ${recipe.gradientFrom}, ${recipe.gradientTo})`,
        }}
      >
        {/* Diagonal stripes */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent 0, transparent 14px, rgba(255,255,255,0.07) 14px, rgba(255,255,255,0.07) 28px)',
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        {/* Emoji */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-7xl select-none drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
            role="img"
            aria-hidden="true"
          >
            {recipe.emoji}
          </span>
        </div>

        {/* Time badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-slap-cream font-body font-semibold text-xs tracking-wide border border-white/10">
            ⏱ {recipe.time}
          </span>
        </div>

        {/* Orange bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-slap-orange via-slap-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Body */}
      <div className="p-5">
        <h3 className="font-display text-xl text-slap-cream tracking-wide leading-tight mb-2 group-hover:text-slap-orange transition-colors duration-200">
          {recipe.title}
        </h3>
        <p className="font-body text-slap-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {recipe.hook}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-body text-slap-muted text-xs uppercase tracking-widest">
            {recipe.servings} {recipe.servings === '1' ? 'serving' : 'servings'}
          </span>
          <span className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-slap-orange group-hover:text-slap-gold transition-colors duration-200">
            Go To Recipe
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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

import { Link } from 'react-router-dom'
import { assassinsVariations } from '../data/assassinsVariations'

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="inline-block w-5 h-px bg-slap-orange/70 flex-shrink-0" />
      <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
        {label}
      </span>
    </div>
  )
}

export default function AssassinVariations() {
  return (
    <div className="min-h-screen bg-slap-black">

      {/* ──────────── HEADER ──────────── */}
      <div className="relative bg-slap-black overflow-hidden">

        {/* Colored accent strip — uses Assassin's Penne palette */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ background: 'linear-gradient(to right, #5c0f0f, #b83200)' }}
        />

        {/* Subtle warm tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 75% 50%, rgba(184,50,0,0.06) 0%, transparent 65%)',
          }}
        />

        {/* Back link */}
        <div className="absolute top-20 left-0 right-0 px-4 sm:px-8 max-w-3xl mx-auto w-full">
          <Link
            to="/recipes/assassins-penne"
            className="inline-flex items-center gap-2 font-body text-sm text-slap-muted hover:text-slap-cream transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Assassin's Penne
          </Link>
        </div>

        {/* Ghost emoji */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 opacity-[0.04] pointer-events-none select-none">
          <span className="text-[14rem]">🍝</span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-8 pb-10 pt-36">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-5 h-px bg-slap-orange/70" />
            <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
              Assassin's Penne
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-slap-cream leading-tight mb-3">
            More Slaps
          </h1>
          <p className="font-body text-slap-muted text-lg leading-relaxed">
            Same frozen pasta. Different levels of trouble.
          </p>
        </div>
      </div>

      {/* ──────────── VARIATIONS ──────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 space-y-16">

        {assassinsVariations.map((v, i) => (
          <div key={v.id}>
            {/* Number + name */}
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-display text-slap-orange/25 text-3xl leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-slap-cream leading-tight">
                {v.name}
              </h2>
            </div>

            {/* Tagline */}
            <p className="font-body text-slap-orange text-sm font-semibold tracking-wide uppercase mb-8">
              {v.tagline}
            </p>

            <div className="space-y-8 pl-0">
              {/* What to add */}
              <div>
                <SectionLabel label="What to Add" />
                <ul className="space-y-2">
                  {v.add.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 font-body text-slap-muted text-base">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slap-orange/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to do it */}
              <div>
                <SectionLabel label="How to Do It" />
                <p className="font-body text-slap-muted leading-relaxed text-base">
                  {v.how}
                </p>
              </div>

              {/* Final Slap */}
              <div className="pl-4 border-l-2 border-slap-orange/40 py-1">
                <p className="font-display italic text-2xl text-slap-cream">
                  {v.finalSlap}
                </p>
              </div>
            </div>

            {/* Separator between variations */}
            {i < assassinsVariations.length - 1 && (
              <div className="mt-16 border-t border-slap-smoke" />
            )}
          </div>
        ))}

        {/* Bottom nav */}
        <div className="border-t border-slap-smoke pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-slap-warm text-xs uppercase tracking-widest mb-1">
              Start here first
            </p>
            <p className="font-display text-xl text-slap-cream">Assassin's Penne</p>
          </div>
          <Link
            to="/recipes/assassins-penne"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slap-orange hover:bg-slap-ember text-white font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Assassin's Penne
          </Link>
        </div>
      </div>
    </div>
  )
}

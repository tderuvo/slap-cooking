import { Link } from 'react-router-dom'
import { assassinsVariations } from '../data/assassinsVariations'

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="inline-block w-5 h-px bg-slap-orange flex-shrink-0 opacity-80" />
      <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
        {label}
      </span>
    </div>
  )
}

export default function AssassinVariations() {
  return (
    <div className="min-h-screen bg-slap-black">

      {/* ──────────── HERO ──────────── */}
      <div
        className="relative flex flex-col justify-end grain overflow-hidden"
        style={{
          minHeight: '36vh',
          background: 'linear-gradient(145deg, #5c0f0f 0%, #b83200 60%, #0d0a07 100%)',
        }}
      >
        {/* Fine diagonal texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent 0, transparent 16px, rgba(255,255,255,0.06) 16px, rgba(255,255,255,0.06) 32px)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slap-black to-transparent" />

        {/* Back link */}
        <div className="absolute top-24 left-0 right-0 px-4 sm:px-8 max-w-3xl mx-auto w-full">
          <Link
            to="/recipes/assassins-penne"
            className="inline-flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Assassin's Penne
          </Link>
        </div>

        {/* Ghost emoji */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <span className="text-[11rem] select-none">🍝</span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-8 pb-10 pt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-5 h-px bg-slap-orange opacity-80" />
            <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
              Assassin's Penne
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-slap-cream leading-none mb-3 text-shadow-lg">
            More Slaps
          </h1>
          <p className="font-body text-white/65 text-lg leading-relaxed">
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
              <span className="font-display text-slap-orange/35 text-3xl leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-slap-cream leading-none">
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
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slap-orange/60 flex-shrink-0" />
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
              <div className="pl-4 border-l-2 border-slap-orange/50 py-1">
                <p className="font-display text-2xl text-slap-cream">
                  {v.finalSlap}
                </p>
              </div>
            </div>

            {/* Separator between variations */}
            {i < assassinsVariations.length - 1 && (
              <div className="mt-16 border-t border-white/5" />
            )}
          </div>
        ))}

        {/* Bottom nav */}
        <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-slap-muted text-xs uppercase tracking-widest mb-1">
              Start here first
            </p>
            <p className="font-display text-xl text-slap-cream">Assassin's Penne</p>
          </div>
          <Link
            to="/recipes/assassins-penne"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slap-orange hover:bg-slap-ember text-slap-cream font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-[0_4px_20px_rgba(180,60,0,0.28)]"
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

import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getRecipeBySlug, recipes } from '../data/recipes'
import { assassinsVariations } from '../data/assassinsVariations'
import { SmartRecipeHero } from '../components/SmartRecipeImage'

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="inline-block w-5 h-px bg-slap-orange flex-shrink-0" />
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

  const currentIndex = recipes.findIndex((r) => r.slug === slug)
  const nextRecipe = recipes[(currentIndex + 1) % recipes.length]

  return (
    <div className="min-h-screen bg-slap-black">
      <Helmet>
        <title>{recipe.seoTitle || `${recipe.title} | Slap Cooking`}</title>
        <meta name="description" content={recipe.metaDescription || recipe.hook} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://slapcooking.com/recipes/${recipe.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Slap Cooking" />
        <meta property="og:title" content={recipe.seoTitle || recipe.title} />
        <meta property="og:description" content={recipe.metaDescription || recipe.hook} />
        <meta property="og:url" content={`https://slapcooking.com/recipes/${recipe.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={recipe.seoTitle || recipe.title} />
        <meta name="twitter:description" content={recipe.metaDescription || recipe.hook} />
      </Helmet>

      {/* ──────────────── RECIPE HEADER ──────────────── */}
      <div className="relative bg-slap-black overflow-hidden">

        {/* Colored accent strip at very top derived from recipe palette */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ background: `linear-gradient(to right, ${recipe.gradientFrom}, ${recipe.gradientTo})` }}
        />

        {/* Very subtle warm tint from recipe colors — barely visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 80% 40%, ${recipe.gradientTo}12 0%, transparent 65%)`,
          }}
        />

        {/* Back link — z-20 keeps it above the z-10 header text container */}
        <div className="absolute z-20 top-20 left-0 right-0 px-4 sm:px-8 max-w-5xl mx-auto w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-slap-muted hover:text-slap-cream transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to All Recipes
          </Link>
        </div>

        {/* Large emoji — very subtle bg decoration */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 opacity-[0.04] pointer-events-none select-none">
          <span className="text-[16rem]">{recipe.emoji}</span>
        </div>

        {/* Header text — always dark/readable since bg is light */}
        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-8 pb-10 pt-36">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slap-smoke text-slap-muted font-body font-medium text-xs tracking-wide">
              ⏱ {recipe.time}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slap-smoke text-slap-muted font-body font-medium text-xs tracking-wide">
              🍽 {recipe.servings} {recipe.servings === '1' ? 'serving' : 'servings'}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-slap-cream leading-tight mb-4">
            {recipe.title}
          </h1>
          <p className="font-body text-lg text-slap-muted max-w-2xl leading-relaxed">
            {recipe.hook}
          </p>
        </div>
      </div>

      {/* ──────────────── HERO PHOTO (when exists) ──────────────── */}
      <SmartRecipeHero slug={recipe.slug} title={recipe.title} />

      {/* ──────────────── CONTENT ──────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 space-y-14">

        {/* Intro copy (optional per recipe) */}
        {recipe.intro && (
          <div>
            {recipe.intro.split('\n\n').map((paragraph, i) => (
              <p key={i} className="font-body text-slap-muted leading-relaxed text-base mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* The Shortcut */}
        <div>
          <SectionLabel label="The Shortcut" />
          <h2 className="font-display text-3xl text-slap-cream mb-4">Start here.</h2>
          <p className="font-body text-slap-muted leading-relaxed text-base mb-5">
            {recipe.shortcut}
          </p>

          {/* SLAP Shortcut callout */}
          {recipe.slapShortcut && (
            <div className="flex gap-3 bg-slap-char rounded-xl p-5 border border-slap-orange/15">
              <span className="text-base select-none flex-shrink-0 mt-0.5" aria-hidden="true">🔥</span>
              <div>
                <p className="font-body text-slap-orange text-[0.65rem] font-bold tracking-widest uppercase mb-1.5">
                  SLAP Shortcut
                </p>
                <p className="font-body text-slap-muted text-sm leading-relaxed">
                  {recipe.slapShortcut}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* The Slap */}
        <div className="relative pl-6 border-l-2 border-slap-orange/60">
          <SectionLabel label="The Slap" />
          <h2 className="font-display text-3xl text-slap-cream mb-4">The move that changes everything.</h2>
          <p className="font-body text-slap-muted leading-relaxed text-base">
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
                  className="mt-2 w-2 h-2 rounded-full bg-slap-orange/60 flex-shrink-0"
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
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slap-orange/10 border border-slap-orange/25 flex items-center justify-center font-body font-semibold text-slap-orange text-sm">
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
        <div className="relative overflow-hidden rounded-2xl p-8 bg-slap-char border border-slap-smoke">
          {/* Subtle colored top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-70"
            style={{ background: `linear-gradient(to right, ${recipe.gradientFrom}, ${recipe.gradientTo}, transparent)` }}
          />
          <SectionLabel label="The Final Slap" />
          <p className="font-display text-3xl md:text-4xl text-slap-cream relative z-10 italic">
            {recipe.finalSlap}
          </p>
        </div>

        {/* ──── Assassin's Penne: SEO + brand sections ──── */}
        {slug === 'assassins-penne' && (
          <>
            {/* Can I Use Spaghetti Instead of Penne? */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">Can I Use Spaghetti Instead of Penne?</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-4">
                Yes — and spaghetti all'assassina is actually the more traditional reference. The classic Bari version is almost always long pasta: strands that stick, char, and pull up in dramatic clumps from the pan. That's the original move.
              </p>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-4">
                This SlapCooking version uses penne because each piece chars individually, the sauce gets trapped inside the tubes, and the whole thing is easier to handle without a tong situation. Chunkier. Different kind of fun.
              </p>
              <p className="font-body text-slap-muted leading-relaxed text-base">
                Other short pasta like rigatoni, ziti, or paccheri can work too. Just know that cooking times and sauce absorption will shift — watch your liquid levels and adjust as you go.
              </p>
            </div>

            {/* What Makes Pasta all'Assassina Different? */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">What Makes Pasta all'Assassina Different?</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-4">
                The pasta doesn't get boiled separately first — not the usual way, anyway. You cook it directly in the pan with tomato sauce and broth added in stages. The pasta absorbs the liquid as it goes, and you're going for controlled sticking, crisping, and a little caramelization against the hot pan surface.
              </p>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-4">
                The slightly charred bits are not a mistake. They are the point. That's the assassin.
              </p>
              <p className="font-body text-slap-muted leading-relaxed text-base">
                The flavor payoff: spicy from the chili, smoky from the sear, tomato-rich from the sauce, slightly charred from the pan. It's aggressive in the best possible way. Hence the name.
              </p>
            </div>

            {/* More Slaps / Variations */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block w-5 h-px bg-slap-orange opacity-70 flex-shrink-0" />
                <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
                  More Slaps
                </span>
              </div>
              <p className="font-body text-slap-muted text-sm mb-6">
                Same shortcut. Different damage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {assassinsVariations.map((v) => (
                  <Link
                    key={v.id}
                    to="/recipes/assassins-penne/variations"
                    className="group relative bg-white rounded-xl border border-slap-smoke hover:border-slap-orange/30 p-4 overflow-hidden transition-all duration-200 hover:shadow-sm"
                  >
                    <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-slap-orange/50 rounded-r-full" />
                    <h4 className="font-display text-base text-slap-cream mb-1.5 group-hover:text-slap-orange transition-colors duration-200">
                      {v.name}
                    </h4>
                    <p className="font-body text-slap-muted text-xs leading-relaxed">
                      {v.teaser}
                    </p>
                  </Link>
                ))}
              </div>

              <Link
                to="/recipes/assassins-penne/variations"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slap-orange/40 text-slap-orange hover:bg-slap-orange hover:text-white font-body font-semibold text-sm tracking-wide transition-all duration-200"
              >
                See All Assassin Variations
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* More SlapCooking Recipes */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block w-5 h-px bg-slap-orange opacity-70 flex-shrink-0" />
                <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
                  More SlapCooking Recipes
                </span>
              </div>
              <p className="font-body text-slap-muted text-sm mb-6">
                Keep the momentum going.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { slug: 'crispy-gnocchi-situation', label: 'Crispy Gnocchi Situation', desc: "Don't boil it. Pan-fry it. Then make it saucy." },
                  { slug: 'lazy-day-carbonara-ish', label: 'Lazy Day Carbonara-ish', desc: 'Creamy, peppery, fake-fancy pasta energy with almost no effort.' },
                  { slug: 'fried-rice-gone-wild', label: 'Fried Rice Gone Wild', desc: 'A freezer-bag classic with egg, crunch, heat, and late-night flavor.' },
                ].map((r) => (
                  <Link
                    key={r.slug}
                    to={`/recipes/${r.slug}`}
                    className="group relative bg-slap-char rounded-xl border border-slap-smoke hover:border-slap-orange/30 p-4 overflow-hidden transition-all duration-200"
                  >
                    <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-slap-orange/50 rounded-r-full" />
                    <h4 className="font-display text-base text-slap-cream mb-1.5 group-hover:text-slap-orange transition-colors duration-200">
                      {r.label}
                    </h4>
                    <p className="font-body text-slap-muted text-xs leading-relaxed">
                      {r.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ──── Orange Chicken After Dark: SEO + brand sections ──── */}
        {slug === 'orange-chicken-after-dark' && (
          <>
            {/* Why Trader Joe's Orange Chicken Works So Well */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">Why Trader Joe's Orange Chicken Works So Well</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-4">
                A few reasons this one is hard to beat. The sauce is actually balanced — sweet without being cloying, citrus-forward, just enough acidity. You're not fighting it, you're building on top of it.
              </p>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-4">
                The chicken pieces are sized right for crisping. In an air fryer at 400°F or a hot skillet, the exterior gets genuinely crunchy while the inside stays juicy. It's a texture win that most frozen chicken doesn't give you.
              </p>
              <p className="font-body text-slap-muted leading-relaxed text-base">
                And it moves fast. Freezer to plate in under 20 minutes. For an easy weeknight dinner that doesn't feel like a compromise, that's a hard number to argue with. The key: hit it with sesame oil while it's still steaming hot. That's the whole upgrade right there.
              </p>
            </div>

            {/* Air Fryer vs Skillet */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">Air Fryer vs Skillet</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-4">
                Both work. Both are good. Different results.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 bg-slap-char rounded-xl p-5 border border-slap-smoke">
                  <div>
                    <p className="font-body text-slap-cream font-semibold text-sm mb-1">Air Fryer</p>
                    <p className="font-body text-slap-muted text-sm leading-relaxed">
                      Easiest path to even, all-over crispiness. 400°F, one layer, shake once halfway through. The exterior gets genuinely crunchy with almost no effort. This is the move if you want low-maintenance and maximum crunch.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 bg-slap-char rounded-xl p-5 border border-slap-smoke">
                  <div>
                    <p className="font-body text-slap-cream font-semibold text-sm mb-1">Skillet</p>
                    <p className="font-body text-slap-muted text-sm leading-relaxed">
                      More caramelization, more char, more flavor depth. High heat, a little oil in the pan, and you're actively building a crust. The sauce that hits the pan gets slightly sticky and dark. More work, more drama, and if you're into crispy cooking, this is the move. See also: <Link to="/recipes/crispy-gnocchi-situation" className="text-slap-orange hover:underline">Crispy Gnocchi Situation</Link> for the same high-heat, pan-crisp approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Easy Upgrades */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">Easy Upgrades</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-5">
                The base bag is already solid. These make it something you'd actually brag about.
              </p>
              <ul className="space-y-3">
                {[
                  ['Chili crisp', 'a spoonful turns the sweetness into something complex and dangerous'],
                  ['Garlic', 'mince it and sauté in the skillet before the chicken hits'],
                  ['Scallions', 'pile them on — not a garnish, a component'],
                  ['Sesame oil', 'drizzle it on hot, right off the heat. Non-negotiable.'],
                  ['Orange zest', 'grate it fresh over the finished plate for brightness'],
                  ['Crushed roasted peanuts', 'crunch on top of crunch'],
                  ['Jasmine rice', 'the only correct base'],
                ].map(([item, desc]) => (
                  <li key={item} className="flex items-start gap-3 font-body text-slap-muted">
                    <span className="mt-2 w-2 h-2 rounded-full bg-slap-orange/60 flex-shrink-0" aria-hidden="true" />
                    <span className="text-base"><span className="text-slap-cream font-medium">{item}</span> — {desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Make It Your Own */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">Make It Your Own</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-5">
                Orange Chicken After Dark is a strong starting point. Here's where it can go:
              </p>
              <div className="space-y-3">
                {[
                  ['Extra spicy', 'double the chili crisp, add a few drops of your hottest hot sauce. It holds up.'],
                  ['Lighter sauce', 'use only half the included sauce and finish with fresh lime juice instead.'],
                  ['Rice bowl', 'add cucumbers, pickled red onion, and sriracha mayo on the side.'],
                  ['Lettuce wraps', 'skip the rice, use butter lettuce cups, top with crushed peanuts and fresh herbs.'],
                  ['Noodle version', 'toss the crispy chicken with rice noodles, sesame oil, and soy sauce — similar energy to Fried Rice Gone Wild.'],
                ].map(([label, desc]) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-slap-orange/60 flex-shrink-0" aria-hidden="true" />
                    <p className="font-body text-slap-muted text-base leading-relaxed">
                      <span className="text-slap-cream font-medium">{label}</span> — {desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-body text-slap-muted text-sm mt-5 leading-relaxed">
                Into spicy pasta instead? Try <Link to="/recipes/assassins-penne" className="text-slap-orange hover:underline">Penne all'Assassina</Link> — same bold, high-heat energy. Into fried rice? <Link to="/recipes/fried-rice-gone-wild" className="text-slap-orange hover:underline">Fried Rice Gone Wild</Link> has the same late-night flavor logic.
              </p>
            </div>

            {/* More SlapCooking Recipes */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block w-5 h-px bg-slap-orange opacity-70 flex-shrink-0" />
                <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
                  More SlapCooking Recipes
                </span>
              </div>
              <p className="font-body text-slap-muted text-sm mb-6">
                Keep the momentum going.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { slug: 'assassins-penne', label: "Penne all'Assassina", desc: 'Crispy spicy tomato pasta. Bari-style assassin energy.' },
                  { slug: 'crispy-gnocchi-situation', label: 'Crispy Gnocchi Situation', desc: "Don't boil it. Pan-fry it. Then make it saucy." },
                  { slug: 'fried-rice-gone-wild', label: 'Fried Rice Gone Wild', desc: 'A freezer-bag classic with egg, crunch, heat, and late-night flavor.' },
                ].map((r) => (
                  <Link
                    key={r.slug}
                    to={`/recipes/${r.slug}`}
                    className="group relative bg-slap-char rounded-xl border border-slap-smoke hover:border-slap-orange/30 p-4 overflow-hidden transition-all duration-200"
                  >
                    <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-slap-orange/50 rounded-r-full" />
                    <h4 className="font-display text-base text-slap-cream mb-1.5 group-hover:text-slap-orange transition-colors duration-200">
                      {r.label}
                    </h4>
                    <p className="font-body text-slap-muted text-xs leading-relaxed">
                      {r.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ──── Midnight Mac Attack: SEO + brand sections ──── */}
        {slug === 'midnight-mac-attack' && (
          <>
            {/* What Makes This Mac and Cheese Spicy? */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">What Makes This Mac and Cheese Spicy?</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-5">
                A few things working together — and you control the stack:
              </p>
              <div className="space-y-3">
                {[
                  ['Chili crisp', 'the star. A spoonful stirred in adds heat, garlic, and a slightly funky depth that changes the whole dish. Start with one teaspoon, taste, go from there.'],
                  ['Hot sauce', 'classic route. Cholula, Tabasco, Frank\'s — anything works and keeps the heat clean and direct.'],
                  ['Black pepper', 'underrated heat source. Go heavy, go fresh-cracked. This is not a one-twist situation.'],
                  ['Cayenne or red pepper flakes', 'if you want direct heat without complexity. Add a pinch at the end.'],
                ].map(([item, desc]) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-slap-orange/60 flex-shrink-0" aria-hidden="true" />
                    <p className="font-body text-slap-muted text-base leading-relaxed">
                      <span className="text-slap-cream font-medium">{item}</span> — {desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-body text-slap-muted text-sm mt-5 leading-relaxed">
                Want it mild? Skip the chili crisp and go light on pepper. Want it loud? Stack all four. The recipe holds up either way.
              </p>
            </div>

            {/* Best Cheese for Creamy Mac and Cheese */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">Best Cheese for Creamy Mac and Cheese</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-5">
                The box gives you a base. The real cheese you stir in while it's hot is what makes it creamy mac and cheese instead of just mac and cheese.
              </p>
              <div className="space-y-3">
                {[
                  ['Sharp cheddar', 'melts well, strong flavor, the obvious and correct choice'],
                  ['Monterey Jack', 'creamy and smooth with a milder flavor — blends beautifully into the sauce'],
                  ['Mozzarella', 'adds extra stretch and pull, great for dramatic texture'],
                  ['American cheese', 'secretly the best for ultra-smooth, glossy melt. One slice stirred in while everything is hot will change your opinion of American cheese.'],
                ].map(([item, desc]) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-slap-orange/60 flex-shrink-0" aria-hidden="true" />
                    <p className="font-body text-slap-muted text-base leading-relaxed">
                      <span className="text-slap-cream font-medium">{item}</span> — {desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-body text-slap-muted text-sm mt-5 leading-relaxed">
                Mixing cheeses is always the move. Cheddar for flavor, Jack or American for silky texture. Don't choose — use both.
              </p>
            </div>

            {/* Stovetop vs Baked Mac and Cheese */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">Stovetop vs Baked Mac and Cheese</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-4">
                Baked mac has its place. Crispy top, deep dish vibes, the whole thing. But baked mac takes time, more dishes, and patience you don't have at midnight.
              </p>
              <div className="space-y-4">
                <div className="bg-slap-char rounded-xl p-5 border border-slap-smoke">
                  <p className="font-body text-slap-cream font-semibold text-sm mb-1">Stovetop</p>
                  <p className="font-body text-slap-muted text-sm leading-relaxed">
                    Fast, creamy, and done in 15 minutes with one pot. This is the move for quick comfort food. No oven, no waiting, no second pan. The crunch comes from crispy shallots on top instead — same texture payoff, fraction of the effort. This is what the Midnight Mac Attack is built for. For more one-pan crispy comfort, see <Link to="/recipes/crispy-gnocchi-situation" className="text-slap-orange hover:underline">Crispy Gnocchi Situation</Link>.
                  </p>
                </div>
                <div className="bg-slap-char rounded-xl p-5 border border-slap-smoke">
                  <p className="font-body text-slap-cream font-semibold text-sm mb-1">Baked</p>
                  <p className="font-body text-slap-muted text-sm leading-relaxed">
                    Better crust on top, more structure, feeds a crowd well. Takes 30–45 minutes total and requires an oven-safe dish. Worth it on a Sunday. Not what this recipe is.
                  </p>
                </div>
              </div>
            </div>

            {/* Easy Upgrades */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">Easy Upgrades</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-5">
                The box is the shortcut. These are the moves that make it yours.
              </p>
              <ul className="space-y-3">
                {[
                  ['Chili crisp', 'non-negotiable if you want heat and depth'],
                  ['Crispy breadcrumbs', 'toast them in butter first, pile on top — instant texture'],
                  ['Scallions', 'sliced thin, piled on, not a garnish'],
                  ['Bacon or pancetta', 'crisp it first, crumble it in — for when mac becomes a meal'],
                  ['Roasted garlic', 'stir a clove or two directly into the sauce while hot'],
                  ['Extra black pepper', 'more than you think. Keep going.'],
                  ['Parmesan', 'grated fresh on top — adds salt and sharpness at the finish'],
                ].map(([item, desc]) => (
                  <li key={item} className="flex items-start gap-3 font-body text-slap-muted">
                    <span className="mt-2 w-2 h-2 rounded-full bg-slap-orange/60 flex-shrink-0" aria-hidden="true" />
                    <span className="text-base"><span className="text-slap-cream font-medium">{item}</span> — {desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Make It Your Own */}
            <div>
              <h2 className="font-display text-3xl text-slap-cream mb-4">Make It Your Own</h2>
              <p className="font-body text-slap-muted leading-relaxed text-base mb-5">
                This recipe is a canvas. Here's where it can go:
              </p>
              <div className="space-y-3">
                {[
                  ['Extra spicy', 'double the chili crisp, add cayenne, don\'t be polite about it'],
                  ['Milder version', 'skip the chili crisp entirely, lean on smoked paprika and black pepper for warmth without fire'],
                  ['Protein add-ins', 'crispy chicken, canned tuna, pulled rotisserie chicken — fold it in while the mac is still hot'],
                  ['Veggie add-ins', 'frozen peas, roasted broccoli, sautéed mushrooms — stir them in at the end'],
                  ['Leftover reheating', 'add a splash of milk and heat low and slow on the stovetop. Don\'t microwave it dry.'],
                ].map(([label, desc]) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-slap-orange/60 flex-shrink-0" aria-hidden="true" />
                    <p className="font-body text-slap-muted text-base leading-relaxed">
                      <span className="text-slap-cream font-medium">{label}</span> — {desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-body text-slap-muted text-sm mt-5 leading-relaxed">
                Into late-night crispy comfort food? <Link to="/recipes/orange-chicken-after-dark" className="text-slap-orange hover:underline">Orange Chicken After Dark</Link> has the same energy. Want a spicy pasta recipe instead? <Link to="/recipes/assassins-penne" className="text-slap-orange hover:underline">Penne all'Assassina</Link> is the move.
              </p>
            </div>

            {/* More SlapCooking Recipes */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block w-5 h-px bg-slap-orange opacity-70 flex-shrink-0" />
                <span className="font-body text-slap-orange text-xs font-semibold tracking-widest uppercase">
                  More SlapCooking Recipes
                </span>
              </div>
              <p className="font-body text-slap-muted text-sm mb-6">
                Keep the momentum going.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { slug: 'orange-chicken-after-dark', label: "Trader Joe's Orange Chicken After Dark", desc: 'Crispy, spicy, sesame-hit late-night comfort food.' },
                  { slug: 'assassins-penne', label: "Penne all'Assassina", desc: 'Crispy spicy tomato pasta. Bari-style assassin energy.' },
                  { slug: 'crispy-gnocchi-situation', label: 'Crispy Gnocchi Situation', desc: "Don't boil it. Pan-fry it. Then make it saucy." },
                ].map((r) => (
                  <Link
                    key={r.slug}
                    to={`/recipes/${r.slug}`}
                    className="group relative bg-slap-char rounded-xl border border-slap-smoke hover:border-slap-orange/30 p-4 overflow-hidden transition-all duration-200"
                  >
                    <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-slap-orange/50 rounded-r-full" />
                    <h4 className="font-display text-base text-slap-cream mb-1.5 group-hover:text-slap-orange transition-colors duration-200">
                      {r.label}
                    </h4>
                    <p className="font-body text-slap-muted text-xs leading-relaxed">
                      {r.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Next Recipe CTA */}
        <div className="border-t border-slap-smoke pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-slap-warm text-xs uppercase tracking-widest mb-1">Up next</p>
            <p className="font-display text-xl text-slap-cream">{nextRecipe.title}</p>
          </div>
          <Link
            to={`/recipes/${nextRecipe.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slap-orange hover:bg-slap-ember text-white font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
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

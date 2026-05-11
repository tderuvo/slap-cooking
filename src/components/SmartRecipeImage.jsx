import { useState } from 'react'

/**
 * Tries to load a recipe image. On error (file not found), renders null
 * so the parent's existing placeholder treatment shows through unchanged.
 */
export function SmartRecipeThumb({ slug, title, gradientFrom, gradientTo }) {
  const [failed, setFailed] = useState(false)
  const src = `/images/recipes/${slug}/thumb.png`

  if (failed) return null

  return (
    <img
      src={src}
      alt={`${title} recipe`}
      onError={() => setFailed(true)}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ zIndex: 1 }}
    />
  )
}

/**
 * Tries to load a recipe hero image. On error, renders null so the
 * parent's existing gradient/stripe/emoji treatment shows through.
 */
export function SmartRecipeHero({ slug, title }) {
  const [failed, setFailed] = useState(false)
  const src = `/images/recipes/${slug}/hero.png`

  if (failed) return null

  return (
    <>
      <img
        src={src}
        alt={`${title} hero`}
        onError={() => setFailed(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      {/* Dark overlay so title text stays readable over any photo */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.52)', zIndex: 1 }}
      />
    </>
  )
}

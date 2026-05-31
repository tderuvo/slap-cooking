import { useState } from 'react'

/**
 * Card thumbnail — tries to load thumb.png, renders null on error so the
 * parent's gradient placeholder shows through unchanged.
 */
export function SmartRecipeThumb({ slug, title }) {
  const [failed, setFailed] = useState(false)
  const src = `/images/${slug}/thumb.png`

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
 * Recipe detail hero photo — self-contained section that renders nothing when
 * the image doesn't exist, so the title area above is always clean and light.
 */
export function SmartRecipeHero({ slug, title }) {
  const [failed, setFailed] = useState(false)
  const src = `/images/${slug}/hero.png`

  if (failed) return null

  return (
    <div className="w-full overflow-hidden" style={{ maxHeight: '520px' }}>
      <img
        src={src}
        alt={`${title} — Slap Cooking recipe`}
        onError={() => setFailed(true)}
        className="w-full object-cover"
        style={{ maxHeight: '520px' }}
      />
    </div>
  )
}

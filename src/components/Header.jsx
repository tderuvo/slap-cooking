import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const recipesHref = location.pathname === '/' ? '#recipes' : '/#recipes'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 border-b ${
        scrolled ? 'border-slap-smoke shadow-sm' : 'border-slap-smoke/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 group"
            aria-label="Slap Cooking home"
          >
            <span className="font-display text-xl md:text-2xl leading-none">
              <span className="italic font-bold text-slap-orange group-hover:text-slap-ember transition-colors duration-200">
                Slap
              </span>
              <span className="font-body font-semibold text-slap-cream ml-1.5 text-lg md:text-xl">
                Cooking
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href={recipesHref}
              className="font-body font-medium text-slap-muted hover:text-slap-cream transition-colors duration-200 text-sm"
            >
              Recipes
            </a>
            <Link
              to="/about"
              className="font-body font-medium text-slap-muted hover:text-slap-cream transition-colors duration-200 text-sm"
            >
              About
            </Link>
            <a
              href={recipesHref}
              className="inline-flex items-center px-5 py-2 rounded-full bg-slap-orange hover:bg-slap-ember text-white font-body font-semibold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-95"
            >
              Browse Recipes
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slap-muted hover:text-slap-cream transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slap-smoke px-4 py-6 flex flex-col gap-4">
          <a
            href={recipesHref}
            className="font-body font-medium text-slap-muted hover:text-slap-cream text-sm"
          >
            Recipes
          </a>
          <Link
            to="/about"
            className="font-body font-medium text-slap-muted hover:text-slap-cream text-sm"
          >
            About
          </Link>
          <a
            href={recipesHref}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-slap-orange hover:bg-slap-ember text-white font-body font-semibold text-sm transition-colors mt-2"
          >
            Browse Recipes
          </a>
        </div>
      </div>
    </header>
  )
}

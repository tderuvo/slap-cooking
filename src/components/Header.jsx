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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slap-black/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 group"
            aria-label="Slap Cooking home"
          >
            <span className="font-display text-2xl md:text-3xl tracking-wider">
              <span className="text-slap-orange group-hover:text-slap-gold transition-colors duration-200">
                SLAP
              </span>
              <span className="text-slap-cream ml-1.5">COOKING</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href={recipesHref}
              className="font-body font-medium text-slap-muted hover:text-slap-cream transition-colors duration-200 text-sm tracking-wide uppercase"
            >
              Recipes
            </a>
            <Link
              to="/about"
              className="font-body font-medium text-slap-muted hover:text-slap-cream transition-colors duration-200 text-sm tracking-wide uppercase"
            >
              About
            </Link>
            <a
              href={recipesHref}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-slap-orange hover:bg-slap-deep text-slap-cream font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-slap-orange/20"
            >
              Start Slapping
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
        <div className="bg-slap-dark border-t border-white/5 px-4 py-6 flex flex-col gap-4">
          <a
            href={recipesHref}
            className="font-body font-medium text-slap-muted hover:text-slap-cream text-sm tracking-widest uppercase"
          >
            Recipes
          </a>
          <Link
            to="/about"
            className="font-body font-medium text-slap-muted hover:text-slap-cream text-sm tracking-widest uppercase"
          >
            About
          </Link>
          <a
            href={recipesHref}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-slap-orange hover:bg-slap-deep text-slap-cream font-body font-semibold text-sm tracking-wide transition-colors mt-2"
          >
            Start Slapping
          </a>
        </div>
      </div>
    </header>
  )
}

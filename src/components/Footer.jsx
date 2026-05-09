import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slap-dark border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="group">
            <span className="font-display text-xl tracking-wider">
              <span className="text-slap-orange group-hover:text-slap-gold transition-colors">SLAP</span>
              <span className="text-slap-cream ml-1"> COOKING</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="/#recipes"
              className="font-body text-sm text-slap-muted hover:text-slap-cream transition-colors"
            >
              Recipes
            </a>
            <Link
              to="/about"
              className="font-body text-sm text-slap-muted hover:text-slap-cream transition-colors"
            >
              About
            </Link>
            <Link
              to="/privacy"
              className="font-body text-sm text-slap-muted hover:text-slap-cream transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="font-body text-sm text-slap-muted hover:text-slap-cream transition-colors"
            >
              Terms
            </Link>
          </nav>

          {/* Copy */}
          <p className="font-body text-sm text-slap-muted">
            &copy; {new Date().getFullYear()} Slap Cooking. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="font-display text-slap-muted/40 text-xs tracking-widest uppercase">
            No food snobbery. No shame. Just meals that hit.
          </p>
        </div>
      </div>
    </footer>
  )
}

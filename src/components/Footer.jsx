import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slap-dark border-t border-slap-smoke mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="group">
            <span className="font-display text-lg leading-none">
              <span className="italic font-bold text-slap-orange group-hover:text-slap-ember transition-colors">
                Slap
              </span>
              <span className="font-body font-semibold text-slap-cream ml-1.5">
                Cooking
              </span>
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

        <div className="mt-8 pt-8 border-t border-slap-smoke text-center">
          <p className="font-body text-slap-warm text-xs tracking-widest uppercase">
            No food snobbery. No shame. Just meals that hit.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] md:w-auto">
      {/* Pill nav */}
      <nav className="flex items-center justify-between gap-1 rounded-full bg-background/80 backdrop-blur-xl shadow-card border border-border/50 px-2 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center px-3 py-1 rounded-full" aria-label="Retell Home">
          <span className="font-young-serif text-lg text-foreground">Retell</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="/#features"
            className={`text-sm lowercase px-4 py-1.5 rounded-full transition-colors hover:bg-foreground/5 ${
              isActive('/') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Features
          </a>
          <Link
            to="/blog"
            className={`text-sm lowercase px-4 py-1.5 rounded-full transition-colors hover:bg-foreground/5 ${
              location.pathname.startsWith('/blog') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Blog
          </Link>
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-full bg-retell-gold text-retell-navy px-5 py-1.5 text-sm font-bold lowercase transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Retell
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full hover:bg-foreground/5"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-background/95 backdrop-blur-xl shadow-card border border-border/50 px-4 py-3 space-y-1">
          <a
            href="/#features"
            className="block text-sm lowercase text-foreground py-2 px-3 rounded-xl hover:bg-foreground/5"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <Link
            to="/blog"
            className="block text-sm lowercase text-foreground py-2 px-3 rounded-xl hover:bg-foreground/5"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <a
            href="#download"
            className="block text-center rounded-full bg-retell-gold text-retell-navy px-5 py-2.5 text-sm font-bold lowercase mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Get Retell
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

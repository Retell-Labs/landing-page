import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav className="flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-xl shadow-card border border-border/50 px-2 py-2 transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="flex items-center px-3 py-1 rounded-full" aria-label="Retell Home">
          <span className="font-young-serif text-lg text-retell-navy">Retell</span>
        </Link>

        {/* Desktop nav links — always visible on md+ */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="/#features"
            className={`text-sm lowercase px-4 py-1.5 rounded-full transition-colors hover:bg-foreground/5 ${
              isActive('/') ? 'text-retell-navy' : 'text-muted-foreground'
            }`}
          >
            Features
          </a>
          <Link
            to="/blog"
            className={`text-sm lowercase px-4 py-1.5 rounded-full transition-colors hover:bg-foreground/5 ${
              location.pathname.startsWith('/blog') ? 'text-retell-navy' : 'text-muted-foreground'
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

        {/* Mobile links — expand into the pill */}
        <div
          className={`md:hidden flex items-center gap-1 overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-w-[300px] opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          <a
            href="/#features"
            className="text-sm lowercase text-retell-navy px-4 py-1.5 rounded-full transition-colors hover:bg-foreground/5 whitespace-nowrap"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <Link
            to="/blog"
            className="text-sm lowercase text-retell-navy px-4 py-1.5 rounded-full transition-colors hover:bg-foreground/5 whitespace-nowrap"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-full bg-retell-gold text-retell-navy px-5 py-1.5 text-sm font-bold lowercase whitespace-nowrap"
            onClick={() => setMobileOpen(false)}
          >
            Get Retell
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full hover:bg-foreground/5 transition-transform duration-300 active:scale-90"
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
            className={`transition-transform duration-300 ${mobileOpen ? 'rotate-90' : 'rotate-0'}`}
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
    </header>
  );
};

export default Header;

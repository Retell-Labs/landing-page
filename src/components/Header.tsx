import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center py-1" aria-label="Retell Home">
          <span className="font-young-serif text-2xl text-foreground">Retell</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#features"
            className={`text-base lowercase transition-colors hover:text-foreground ${
              isActive('/') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Features
          </a>
          <Link
            to="/blog"
            className={`text-base lowercase transition-colors hover:text-foreground ${
              location.pathname.startsWith('/blog') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Blog
          </Link>
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-2 text-base font-extrabold lowercase transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Retell
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 bg-background space-y-3">
          <a
            href="/#features"
            className="block text-base lowercase text-foreground py-2"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <Link
            to="/blog"
            className="block text-base lowercase text-foreground py-2"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <a
            href="#download"
            className="block text-center rounded-full bg-foreground text-background px-5 py-2.5 text-base font-extrabold lowercase"
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

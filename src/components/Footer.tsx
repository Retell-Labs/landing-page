import { Link } from 'react-router-dom';
import RetellSmileLogo from '@/components/RetellSmileLogo';

const Footer = () => {
  return (
    <footer className="bg-retell-navy overflow-hidden">
      {/* Single row: logo | links + socials | copyright */}
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <Link to="/">
          <RetellSmileLogo className="w-16 h-16 text-retell-gold" interactive={false} />
        </Link>

        {/* Nav + socials in one line */}
        <div className="flex items-center gap-8 flex-wrap justify-center">
          <a href="/#features" className="text-sm text-white/50 hover:text-white transition-colors">
            Features
          </a>
          <Link to="/blog" className="text-sm text-white/50 hover:text-white transition-colors">
            Blog
          </Link>
          <a href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">
            Privacy
          </a>
          <a href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">
            Terms
          </a>
          <span className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/retell_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@retell_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52V6.78a4.86 4.86 0 0 1-1-.09z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@retell_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/retell_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/retell-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} Retell. All rights reserved.
        </p>
      </div>

      {/* Big "Retell" wordmark peeking from bottom */}
      <div className="flex justify-center -mt-14 md:-mt-20 translate-y-[4rem] md:translate-y-[7rem] lg:translate-y-[9rem]">
        <span className="font-young-serif text-[10rem] md:text-[18rem] lg:text-[24rem] text-white/[0.06] leading-none">
          Retell
        </span>
      </div>
    </footer>
  );
};

export default Footer;

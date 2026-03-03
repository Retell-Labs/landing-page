import { Link } from 'react-router-dom';
import RetellSmileLogo from '@/components/RetellSmileLogo';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-3 mb-3">
              <RetellSmileLogo className="w-9 h-9" />
              <span className="font-young-serif text-2xl text-foreground">Retell</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Learn languages from the content you already watch. AI-powered lessons, spaced
              repetition, and pronunciation practice.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Product
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="/#features"
                    className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="/privacy"
                    className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Connect
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://twitter.com/retell_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/retell_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                  >
                    <svg
                      width="14"
                      height="14"
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
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Retell. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with care for language learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

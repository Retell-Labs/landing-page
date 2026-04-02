import { Link } from 'react-router-dom';
import RetellSmileLogo from '@/components/RetellSmileLogo';

const Footer = () => {
  return (
    <footer className="bg-retell-navy py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <RetellSmileLogo className="w-7 h-7" interactive={false} />
          <span className="font-young-serif text-lg text-retell-gold tracking-tight">Retell</span>
        </Link>
        <nav className="flex items-center gap-6">
          <a
            href="/#features"
            className="text-xs text-white/50 hover:text-white transition-colors"
          >
            Features
          </a>
          <Link
            to="/blog"
            className="text-xs text-white/50 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <a
            href="/privacy"
            className="text-xs text-white/50 hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-xs text-white/50 hover:text-white transition-colors"
          >
            Terms
          </a>
        </nav>
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Retell. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

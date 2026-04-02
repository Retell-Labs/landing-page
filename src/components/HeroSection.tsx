import { useEffect, useRef } from 'react';
import RetellSmileLogo from '@/components/RetellSmileLogo';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add('visible'));
  }, []);

  return (
    <section className="p-3 md:p-5">
      <div
        className="bg-retell-navy rounded-[2rem] md:rounded-[2.5rem] h-[calc(100dvh-1.5rem)] md:h-[calc(100dvh-2.5rem)] flex flex-col items-center justify-center px-6 md:px-16 py-16 md:py-24 overflow-hidden text-white"
        ref={heroRef}
      >
        {/* Big smile face */}
        <div className="opacity-0 animate-fade-in-up">
          <RetellSmileLogo className="w-32 h-32 md:w-40 md:h-40 text-retell-gold" interactive />
        </div>

        {/* Headline */}
        <h1 className="mt-3 font-young-serif text-4xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-center max-w-3xl opacity-0 animate-fade-in-up animation-delay-100">
          Learn languages from your life.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg md:text-xl text-white/60 max-w-xl text-center opacity-0 animate-fade-in-up animation-delay-200">
          Import any short video or photo. Our AI creates a personalized lesson with vocabulary,
          pronunciation practice, and spaced repetition.
        </p>

        {/* App Store buttons */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 opacity-0 animate-fade-in-up animation-delay-300"
          id="download"
        >
          <a
            href="https://apps.apple.com/app/retell"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-retell-gold text-retell-navy rounded-full px-7 py-4 font-bold text-sm transition-all hover:scale-105 hover:shadow-elevated active:scale-100"
            aria-label="Download on the App Store"
          >
            <svg width="20" height="24" viewBox="0 0 22 26" fill="currentColor">
              <path d="M17.05 13.47c-.03-2.75 2.25-4.07 2.35-4.13-1.28-1.87-3.27-2.13-3.98-2.16-1.69-.17-3.31 1-4.17 1-.86 0-2.18-.98-3.59-.95-1.85.03-3.55 1.07-4.5 2.73-1.92 3.33-.49 8.27 1.38 10.97.92 1.33 2.01 2.82 3.44 2.76 1.38-.05 1.9-.89 3.57-.89 1.67 0 2.14.89 3.59.87 1.48-.03 2.43-1.35 3.34-2.69 1.05-1.54 1.49-3.03 1.51-3.11-.03-.01-2.91-1.12-2.94-4.4zM14.33 5.16c.76-.92 1.28-2.2 1.14-3.48-1.1.04-2.43.73-3.22 1.66-.71.82-1.33 2.13-1.16 3.39 1.23.1 2.48-.62 3.24-1.57z" />
            </svg>
            Download for iOS
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.retell.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 rounded-full px-7 py-4 font-bold text-sm transition-all hover:scale-105 hover:bg-white/15 active:scale-100"
            aria-label="Get it on Google Play"
          >
            <svg width="18" height="20" viewBox="0 0 512 512" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            Download for Android
          </a>
        </div>

        {/* Social proof line */}
        <div className="mt-6 flex items-center gap-4 text-xs text-white/40 opacity-0 animate-fade-in-up animation-delay-400">
          <span className="flex items-center gap-1">
            <span className="text-base">&#9733;</span> 4.8 on App Store
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>100% Free</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>12+ Languages</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

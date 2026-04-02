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
        <h1 className="mt-8 font-young-serif text-4xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-center max-w-3xl opacity-0 animate-fade-in-up animation-delay-100">
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
            <svg width="18" height="20" viewBox="0 0 20 22" fill="currentColor">
              <path d="M0.35 0.63C0.13 0.87 0 1.22 0 1.67v18.66c0 0.45 0.13 0.8 0.35 1.04l0.05 0.05 10.45-10.45v-0.25L0.4 0.58 0.35 0.63z" />
              <path d="M14.33 14.44l-3.48-3.48v-0.25l3.48-3.48 0.08 0.04 4.12 2.34c1.18 0.67 1.18 1.76 0 2.43l-4.12 2.34-0.08 0.06z" />
              <path d="M14.41 14.38L10.85 10.82 0.35 21.37c0.39 0.41 1.03 0.46 1.76 0.05l12.3-7.04z" />
              <path d="M14.41 7.27L2.11 0.23C1.38-0.18 0.74-0.13 0.35 0.28l10.5 10.54 3.56-3.55z" />
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

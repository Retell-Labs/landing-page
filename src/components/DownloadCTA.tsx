import { useRef, useEffect, useState } from 'react';
import RetellSmileLogo from '@/components/RetellSmileLogo';

const DownloadCTA = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 px-3 md:px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Testimonial Card (coral) */}
        <div
          className={`bg-retell-coral rounded-3xl p-10 md:p-12 flex flex-col justify-center transition-all duration-300 hover:shadow-card ${visible ? 'opacity-0 animate-fade-in-up animation-delay-100' : 'opacity-0'}`}
        >
          <span className="text-6xl leading-none text-white/30 font-bold">&ldquo;</span>
          <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed mt-2">
            I started learning Korean from drama clips I was already watching. Now I can follow
            whole conversations without subtitles.
          </p>
          <p className="text-sm text-white/60 mt-6">&mdash; Sarah M., Retell user</p>
        </div>

        {/* Download CTA Card (navy) */}
        <div
          className={`bg-retell-navy rounded-3xl p-10 md:p-12 flex flex-col justify-center transition-all duration-300 hover:shadow-elevated ${visible ? 'opacity-0 animate-fade-in-up animation-delay-200' : 'opacity-0'}`}
        >
          <RetellSmileLogo className="w-10 h-10 text-retell-gold" interactive={false} />
          <h2 className="font-young-serif text-3xl md:text-4xl text-retell-gold mt-6">
            Start learning for free
          </h2>
          <p className="text-sm text-white/50 mt-3 mb-8">
            Join thousands of learners turning their favorite videos into language lessons.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://apps.apple.com/app/retell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-retell-gold text-retell-navy rounded-full px-7 py-4 font-bold text-sm transition-all hover:scale-105 hover:shadow-elevated active:scale-100"
              aria-label="Download on the App Store"
            >
              <svg width="18" height="22" viewBox="0 0 22 26" fill="currentColor">
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
              <svg width="16" height="18" viewBox="0 0 20 22" fill="currentColor">
                <path d="M0.35 0.63C0.13 0.87 0 1.22 0 1.67v18.66c0 0.45 0.13 0.8 0.35 1.04l0.05 0.05 10.45-10.45v-0.25L0.4 0.58 0.35 0.63z" />
                <path d="M14.33 14.44l-3.48-3.48v-0.25l3.48-3.48 0.08 0.04 4.12 2.34c1.18 0.67 1.18 1.76 0 2.43l-4.12 2.34-0.08 0.06z" />
                <path d="M14.41 14.38L10.85 10.82 0.35 21.37c0.39 0.41 1.03 0.46 1.76 0.05l12.3-7.04z" />
                <path d="M14.41 7.27L2.11 0.23C1.38-0.18 0.74-0.13 0.35 0.28l10.5 10.54 3.56-3.55z" />
              </svg>
              Download for Android
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;

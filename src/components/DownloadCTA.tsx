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
    <section ref={ref} className="pb-16 md:pb-24 px-3 md:px-5">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          What people are saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <svg width="16" height="18" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                Download for Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;

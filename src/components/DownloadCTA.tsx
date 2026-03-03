import { useRef, useEffect } from 'react';

const DownloadCTA = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal" ref={ref}>
          <div className="rounded-3xl bg-card border border-border p-12 md:p-20 text-center">
            <h2 className="font-young-serif text-3xl md:text-5xl mb-4">Start learning for free</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-10">
              Join thousands of learners turning their favorite videos into language lessons.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://apps.apple.com/app/retell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background rounded-xl px-6 py-3 transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-foreground/90"
                aria-label="Download on the App Store"
              >
                <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor">
                  <path d="M17.05 13.47c-.03-2.75 2.25-4.07 2.35-4.13-1.28-1.87-3.27-2.13-3.98-2.16-1.69-.17-3.31 1-4.17 1-.86 0-2.18-.98-3.59-.95-1.85.03-3.55 1.07-4.5 2.73-1.92 3.33-.49 8.27 1.38 10.97.92 1.33 2.01 2.82 3.44 2.76 1.38-.05 1.9-.89 3.57-.89 1.67 0 2.14.89 3.59.87 1.48-.03 2.43-1.35 3.34-2.69 1.05-1.54 1.49-3.03 1.51-3.11-.03-.01-2.91-1.12-2.94-4.4zM14.33 5.16c.76-.92 1.28-2.2 1.14-3.48-1.1.04-2.43.73-3.22 1.66-.71.82-1.33 2.13-1.16 3.39 1.23.1 2.48-.62 3.24-1.57z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-80">Download on the</div>
                  <div className="text-base font-bold leading-tight">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.retell.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background rounded-xl px-6 py-3 transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-foreground/90"
                aria-label="Get it on Google Play"
              >
                <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor">
                  <path d="M0.35 0.63C0.13 0.87 0 1.22 0 1.67v18.66c0 0.45 0.13 0.8 0.35 1.04l0.05 0.05 10.45-10.45v-0.25L0.4 0.58 0.35 0.63z" />
                  <path d="M14.33 14.44l-3.48-3.48v-0.25l3.48-3.48 0.08 0.04 4.12 2.34c1.18 0.67 1.18 1.76 0 2.43l-4.12 2.34-0.08 0.06z" />
                  <path d="M14.41 14.38L10.85 10.82 0.35 21.37c0.39 0.41 1.03 0.46 1.76 0.05l12.3-7.04z" />
                  <path d="M14.41 7.27L2.11 0.23C1.38-0.18 0.74-0.13 0.35 0.28l10.5 10.54 3.56-3.55z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-80">Get it on</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;

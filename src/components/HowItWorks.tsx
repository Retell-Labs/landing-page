import { useRef, useEffect } from 'react';

const steps = [
  {
    number: '1',
    title: 'Share a video',
    description: 'Share a TikTok, YouTube Short, or pick a photo from your camera roll.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'AI creates your lesson',
    description: 'In seconds, get vocabulary, phrases, grammar, and pronunciation exercises.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Practice & level up',
    description:
      'Speak, swipe, and build sentences. Track your streak and watch your fluency grow.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal stagger-children" ref={ref}>
          <h2 className="font-young-serif text-center text-3xl md:text-4xl mb-4">How it works</h2>
          <p className="text-center text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-14">
            Three simple steps to start learning.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                  {step.icon}
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold mb-3">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

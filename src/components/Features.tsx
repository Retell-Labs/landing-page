import { useRef, useEffect, useState } from 'react';

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cardBase = 'rounded-3xl p-8 transition-all duration-300';
  const cardHover = 'hover:shadow-card hover:-translate-y-1';
  const animClass = (delay: string) =>
    visible ? `opacity-0 animate-fade-in-up ${delay}` : 'opacity-0';

  return (
    <section ref={sectionRef} id="features" className="py-16 md:py-24 px-3 md:px-5">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Everything you need to learn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card A — Phone Preview (tall, gold light) */}
          <div
            className={`${cardBase} bg-retell-navy text-white flex flex-col items-center justify-center ${cardHover} order-3 md:order-1 lg:row-span-2 p-6 ${animClass('animation-delay-100')}`}
          >
            <p className="text-xs font-semibold text-white/50 tracking-widest uppercase mb-4">
              See it in action
            </p>
            <div className="relative w-[200px] h-[400px] md:w-[220px] md:h-[440px] animate-float">
              <div className="absolute inset-0 rounded-[2.5rem] border-[6px] border-white/20 bg-white shadow-elevated overflow-hidden">
                <div className="h-10 bg-white flex items-center justify-center">
                  <div className="w-16 h-4 rounded-full bg-retell-navy/10" />
                </div>
                <div className="px-4 pt-3 space-y-3">
                  <div className="w-20 h-5 rounded-md bg-retell-gold/40" />
                  <div className="w-full aspect-video rounded-xl bg-retell-navy/5 flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-retell-navy/30"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2.5 rounded bg-retell-navy/5 w-full" />
                    <div className="h-2.5 rounded bg-retell-navy/5 w-3/4" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-14 rounded-lg bg-white border border-retell-navy/5 flex items-center justify-center"
                      >
                        <div className="w-8 h-2.5 rounded bg-retell-navy/5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card B — Import Any Video (purple light) */}
          <div
            className={`${cardBase} bg-[#D9CEFF] text-retell-navy ${cardHover} order-1 md:order-2 ${animClass('animation-delay-200')}`}
          >
            <div className="w-12 h-12 bg-white/50 rounded-2xl flex items-center justify-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8236C7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#8236C7]">Import Any Video</h3>
            <p className="mt-2 text-sm text-retell-navy/60 leading-relaxed">
              Share a TikTok, YouTube Short, or Instagram Reel. Pick a photo or video from your
              camera roll. We handle the rest.
            </p>
          </div>

          {/* Card C — AI-Powered Lessons (blue light) */}
          <div
            className={`${cardBase} bg-[#9FD1FF] text-retell-navy hover:shadow-elevated hover:-translate-y-1 order-2 md:order-3 ${animClass('animation-delay-300')}`}
          >
            <div className="w-12 h-12 bg-white/50 rounded-2xl flex items-center justify-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#004AAE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
                <line x1="9" y1="22" x2="15" y2="22" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#004AAE]">AI-Powered Lessons</h3>
            <p className="mt-2 text-sm text-retell-navy/60 leading-relaxed">
              Our AI transcribes, analyzes, and creates a personalized lesson: vocabulary, key
              phrases, grammar notes, and practice sentences.
            </p>
          </div>

          {/* Card D — Practice Speaking (rose light) */}
          <div
            className={`${cardBase} bg-[#FFCFE5] text-retell-navy ${cardHover} order-4 ${animClass('animation-delay-400')}`}
          >
            <div className="w-12 h-12 bg-white/50 rounded-2xl flex items-center justify-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E7115E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#E7115E]">Practice Speaking</h3>
            <p className="mt-2 text-sm text-retell-navy/60 leading-relaxed">
              Record yourself, get word-by-word pronunciation scores. AI evaluates your fluency and
              gives real-time feedback.
            </p>
          </div>

          {/* Card E — How It Works (green light) */}
          <div
            className={`${cardBase} bg-[#B3E59A] text-retell-navy ${cardHover} order-5 ${animClass('animation-delay-500')}`}
          >
            <h3 className="text-lg font-bold text-[#00553A] mb-6">How it works</h3>
            <div className="flex flex-col gap-4">
              {[
                { step: '1', label: 'Share a video or photo' },
                { step: '2', label: 'AI creates your lesson' },
                { step: '3', label: 'Practice & level up' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-[#00553A] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card F — Stats (full width, gold light) */}
          <div
            className={`${cardBase} bg-retell-gold text-retell-navy md:col-span-2 lg:col-span-3 hover:shadow-card order-6 ${animClass('animation-delay-600')}`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-0">
              {[
                { value: '10,000+', label: 'Active Learners' },
                { value: '12+', label: 'Languages' },
                { value: '50,000+', label: 'Lessons Created' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <span className="font-young-serif text-3xl md:text-4xl">{stat.value}</span>
                  <span className="text-sm text-retell-navy/50 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

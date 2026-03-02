import { useRef, useEffect } from 'react';

const stats = [
  { value: '10,000+', label: 'learners' },
  { value: '12+', label: 'languages' },
  { value: '50,000+', label: 'lessons created' },
];

const SocialProof = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-16 border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal" ref={ref}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                {i > 0 && (
                  <div className="hidden md:block w-px h-8 bg-border" />
                )}
                <div className="text-center md:text-left">
                  <span className="font-young-serif text-2xl md:text-3xl text-foreground">
                    {stat.value}
                  </span>
                  <span className="ml-2 text-sm text-muted-foreground">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

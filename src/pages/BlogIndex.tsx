import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RetellSmileLogo from '@/components/RetellSmileLogo';
import { blogPosts } from '@/data/blog-posts';

const BlogIndex = () => {
  const gridRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.title = 'Blog — Retell | Language Learning Tips & Insights';
  }, []);

  useEffect(() => {
    const el = gridRef.current;
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

  const animClass = (delay: string) =>
    visible ? `opacity-0 animate-fade-in-up ${delay}` : 'opacity-0';

  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Title */}
        <section className="p-3 md:p-5 pt-24 md:pt-32">
          <div className="max-w-6xl mx-auto bg-retell-navy rounded-[2rem] md:rounded-[2.5rem] px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
            <h1 className="font-young-serif text-3xl md:text-4xl lg:text-5xl leading-[0.95] tracking-tight text-white opacity-0 animate-fade-in-up">
              Blog
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-xl opacity-0 animate-fade-in-up animation-delay-100">
              Thoughts, tips, and science behind learning languages from the content you love.
            </p>
            <div className="absolute -right-10 md:-right-6 -bottom-4 md:-bottom-6 opacity-0 animate-fade-in-up animation-delay-200">
              <RetellSmileLogo
                className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 text-white/[0.07]"
                interactive={false}
              />
            </div>
          </div>
        </section>

        {/* Featured post */}
        <section className="px-3 md:px-5">
          <div className="max-w-6xl mx-auto px-8 md:px-16">
            <Link
              to={`/blog/${featured.slug}`}
              className="group block border-t border-border/40 pt-10 pb-16 opacity-0 animate-fade-in-up animation-delay-200"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="font-semibold text-primary">{featured.category}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <time dateTime={featured.date}>
                  {new Date(featured.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2 className="font-extrabold text-xl md:text-2xl lg:text-3xl leading-snug text-foreground/90 group-hover:text-primary transition-colors max-w-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-2xl">
                {featured.description}
              </p>
              <span className="mt-6 inline-block text-sm font-semibold text-foreground/60 group-hover:text-primary transition-colors">
                Read article &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* Grid */}
        <section ref={gridRef} className="px-3 md:px-5 pb-24 md:pb-40">
          <div className="max-w-6xl mx-auto px-8 md:px-16">
            <div className="border-t border-border/40 pt-10" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {rest.map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className={`group ${animClass(`animation-delay-${(index + 1) * 100}`)}`}
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="font-semibold text-primary">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h3 className="font-bold text-lg leading-snug text-foreground/90 group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {post.description}
                  </p>
                  <span className="text-xs font-semibold text-foreground/50 group-hover:text-primary transition-colors">
                    {post.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-3 md:px-5 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto bg-retell-navy rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-12">
            <RetellSmileLogo className="w-10 h-10 text-retell-gold" interactive={false} />
            <h3 className="font-extrabold text-3xl md:text-4xl text-retell-gold mt-6">
              Ready to start learning?
            </h3>
            <p className="text-sm text-white/50 mt-3 mb-8 max-w-sm">
              Download Retell and turn your favorite videos into personalized language lessons.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com/app/retell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-retell-gold text-retell-navy rounded-full px-7 py-4 font-bold text-sm transition-all hover:scale-105 hover:shadow-elevated active:scale-100"
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
                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 rounded-full px-7 py-4 font-bold text-sm transition-all hover:scale-105 hover:bg-white/15 active:scale-100"
                aria-label="Get it on Google Play"
              >
                <svg width="16" height="18" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                Download for Android
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;

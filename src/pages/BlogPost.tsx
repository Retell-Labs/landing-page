import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RetellSmileLogo from '@/components/RetellSmileLogo';
import { getBlogPost } from '@/data/blog-posts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Retell Blog`;
    }
  }, [post]);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCtaVisible(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Article header */}
        <section className="px-6 md:px-16 pt-28 md:pt-32 pb-12 md:pb-24">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-10 opacity-0 animate-fade-in-up">
              <Link
                to="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Back to Blog
              </Link>
            </nav>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-6 opacity-0 animate-fade-in-up animation-delay-100">
              <span className="font-semibold text-primary">{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30 hidden sm:block" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-foreground/90 opacity-0 animate-fade-in-up animation-delay-100">
              {post.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl opacity-0 animate-fade-in-up animation-delay-200">
              {post.description}
            </p>
          </div>
        </section>

        {/* Article body */}
        <section className="px-6 md:px-16 pb-24 md:pb-40">
          <article className="max-w-[720px] mx-auto">
            <div className="border-t border-border/40 pt-12" />
            <div className="prose-retell">
              {post.content.split('\n').map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return <br key={i} />;
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2
                      key={i}
                      className="font-extrabold text-2xl md:text-3xl mt-14 mb-6 text-foreground"
                    >
                      {trimmed.slice(3)}
                    </h2>
                  );
                }
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={i} className="font-bold text-xl mt-10 mb-4 text-foreground">
                      {trimmed.slice(4)}
                    </h3>
                  );
                }
                if (trimmed.startsWith('- **')) {
                  const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
                  if (match) {
                    return (
                      <li
                        key={i}
                        className="text-muted-foreground leading-relaxed ml-4 mb-2 list-disc"
                      >
                        <strong className="text-foreground">{match[1]}</strong>
                        {match[2] ? `: ${match[2]}` : ''}
                      </li>
                    );
                  }
                }
                if (trimmed.startsWith('- ')) {
                  return (
                    <li
                      key={i}
                      className="text-muted-foreground leading-relaxed ml-4 mb-2 list-disc"
                    >
                      {renderInlineMarkdown(trimmed.slice(2))}
                    </li>
                  );
                }
                const numMatch = trimmed.match(/^(\d+)\.\s+\*\*(.+?)\*\*:?\s*(.*)$/);
                if (numMatch) {
                  return (
                    <li
                      key={i}
                      className="text-muted-foreground leading-relaxed ml-4 mb-2 list-decimal"
                    >
                      <strong className="text-foreground">{numMatch[2]}</strong>
                      {numMatch[3] ? `: ${numMatch[3]}` : ''}
                    </li>
                  );
                }
                const numMatch2 = trimmed.match(/^(\d+)\.\s+(.*)$/);
                if (numMatch2) {
                  return (
                    <li
                      key={i}
                      className="text-muted-foreground leading-relaxed ml-4 mb-2 list-decimal"
                    >
                      {renderInlineMarkdown(numMatch2[2])}
                    </li>
                  );
                }
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {renderInlineMarkdown(trimmed)}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div
              ref={ctaRef}
              className={`mt-20 rounded-[2rem] md:rounded-[2.5rem] bg-retell-navy p-8 md:p-12 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
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
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

function renderInlineMarkdown(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default BlogPost;

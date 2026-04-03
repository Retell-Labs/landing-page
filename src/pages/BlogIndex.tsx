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
        <section className="px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
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
              <h2 className="font-young-serif text-xl md:text-2xl lg:text-3xl leading-[1.15] text-foreground/90 group-hover:text-primary transition-colors max-w-3xl">
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
        <section ref={gridRef} className="px-6 md:px-16 pb-24 md:pb-40">
          <div className="max-w-6xl mx-auto">
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
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;

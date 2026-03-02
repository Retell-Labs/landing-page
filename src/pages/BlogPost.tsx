import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogPost } from '@/data/blog-posts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Retell Blog`;
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground noise-bg">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <article className="max-w-[720px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
              {post.category}
            </span>
            <h1 className="font-young-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-4">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {post.description}
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground border-b border-border pb-6">
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
          </header>

          {/* Content */}
          <div className="prose-retell">
            {post.content.split('\n').map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return <br key={i} />;
              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={i} className="font-young-serif text-2xl md:text-3xl mt-12 mb-4 text-foreground">
                    {trimmed.slice(3)}
                  </h2>
                );
              }
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={i} className="font-semibold text-xl mt-8 mb-3 text-foreground">
                    {trimmed.slice(4)}
                  </h3>
                );
              }
              if (trimmed.startsWith('- **')) {
                const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
                if (match) {
                  return (
                    <li key={i} className="text-muted-foreground leading-relaxed ml-4 mb-2 list-disc">
                      <strong className="text-foreground">{match[1]}</strong>
                      {match[2] ? `: ${match[2]}` : ''}
                    </li>
                  );
                }
              }
              if (trimmed.startsWith('- ')) {
                return (
                  <li key={i} className="text-muted-foreground leading-relaxed ml-4 mb-2 list-disc">
                    {renderInlineMarkdown(trimmed.slice(2))}
                  </li>
                );
              }
              const numMatch = trimmed.match(/^(\d+)\.\s+\*\*(.+?)\*\*:?\s*(.*)$/);
              if (numMatch) {
                return (
                  <li key={i} className="text-muted-foreground leading-relaxed ml-4 mb-2 list-decimal">
                    <strong className="text-foreground">{numMatch[2]}</strong>
                    {numMatch[3] ? `: ${numMatch[3]}` : ''}
                  </li>
                );
              }
              const numMatch2 = trimmed.match(/^(\d+)\.\s+(.*)$/);
              if (numMatch2) {
                return (
                  <li key={i} className="text-muted-foreground leading-relaxed ml-4 mb-2 list-decimal">
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
          <div className="mt-16 rounded-2xl bg-card border border-border p-8 text-center">
            <h3 className="font-young-serif text-2xl mb-3">Ready to start learning?</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
              Download Retell and turn your favorite videos into personalized language lessons.
            </p>
            <a
              href="/#download"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-medium transition-all hover:bg-foreground/90"
            >
              Get Retell — Free
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

function renderInlineMarkdown(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-foreground font-medium">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default BlogPost;

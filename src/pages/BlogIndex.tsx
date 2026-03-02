import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog-posts';

const BlogIndex = () => {
  useEffect(() => {
    document.title = 'Blog — Retell | Language Learning Tips & Insights';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground noise-bg">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <h1 className="font-young-serif text-4xl md:text-5xl mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tips, science, and strategies for learning languages from the content you love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4">
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
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
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;

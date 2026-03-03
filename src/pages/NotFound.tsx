import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground noise-bg">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-6">
          <h1 className="font-young-serif text-6xl md:text-8xl mb-4 text-foreground">404</h1>
          <p className="text-lg text-muted-foreground mb-8">This page doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-2.5 text-base font-extrabold lowercase transition-all hover:bg-foreground/90"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

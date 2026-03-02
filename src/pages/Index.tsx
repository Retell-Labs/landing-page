import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground noise-bg">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <SocialProof />
        <HowItWorks />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

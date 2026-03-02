import React from 'react';
import { Shield, Lock, Globe, FileCheck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TrustSecurity = () => {
  const { isVisible, elementRef } = useScrollAnimation();
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure by Default",
      description: "All data encrypted in transit and at rest. Your learning data is yours alone.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy First",
      description: "We never sell your data. GDPR and CCPA compliant with full data export and deletion.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Available Worldwide",
      description: "Learn from anywhere with servers across the globe. Optimized for low-latency video streaming.",
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Offline Ready",
      description: "Download lessons for offline practice. Perfect for commutes, travel, and areas with limited connectivity.",
    },
  ];

  return (
    <section ref={elementRef} id="trust-security" className="w-full py-16 md:py-24 px-6 md:px-12 bg-card">
      <div className={`max-w-7xl mx-auto space-y-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-young-serif tracking-tighter text-foreground">
            Built for Learners, Designed for Privacy
          </h2>
          <p className="text-muted-foreground text-lg">
            Your data and learning progress are always safe with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`text-center space-y-4 p-6 rounded-xl border border-border bg-background/50 hover:bg-background/80 transition-all duration-300 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Shield className="h-4 w-4" />
            Your data, your control
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;
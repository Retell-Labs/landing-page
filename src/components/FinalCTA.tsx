import React from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FinalCTA = () => {
  const { isVisible, elementRef } = useScrollAnimation();
  return (
    <section ref={elementRef} className="w-full py-16 md:py-24 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cosmic-grid opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-5 bg-primary blur-[150px]"></div>
      </div>
      
      <div className={`max-w-4xl mx-auto text-center space-y-8 relative z-10 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-5xl font-young-serif tracking-tighter text-foreground">
          Start learning from the content you love. It's free.
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Join thousands of language learners who are building fluency with their favorite videos and personal photos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12 px-8 min-h-[48px]">
            Start Learning Free
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-muted text-base h-12 px-8 min-h-[48px]">
            See How It Works
          </Button>
        </div>
        
        <div className="pt-4 text-sm text-muted-foreground">
          Free forever • No credit card required
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
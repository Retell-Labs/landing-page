import React from 'react';
import { BookX, Users, AlertTriangle, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProblemSection = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section ref={elementRef} id="problem" className="w-full py-16 md:py-24 px-6 md:px-12 bg-card">
      <div className={`max-w-7xl mx-auto space-y-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-young-serif tracking-tighter text-foreground">
            Why Traditional Language Learning Fails
          </h2>
          <p className="text-muted-foreground text-lg">
            Most language apps feel like homework — Retell makes it personal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Boring textbook content */}
          <div className={`space-y-6 transition-all duration-500 transform ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <BookX className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground">Boring textbook content</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Traditional apps use scripted dialogues and artificial scenarios. You memorize phrases you'll never actually use, then forget them within weeks.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span>Generic content disconnected from real life</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <DollarSign className="h-5 w-5 text-destructive" />
                <span>No motivation to keep practicing</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span>Vocabulary that doesn't match your interests</span>
              </div>
            </div>
          </div>

          {/* One-size-fits-all approach */}
          <div className={`space-y-6 transition-all duration-500 transform ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground">One-size-fits-all approach</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every learner gets the same lessons regardless of their interests, level, or goals. There's no way to learn from content that actually matters to you.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span>Same lessons for everyone regardless of interests</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <DollarSign className="h-5 w-5 text-destructive" />
                <span>No personalization to your daily life</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span>Rigid curriculum with no flexibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

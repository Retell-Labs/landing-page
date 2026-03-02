
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Testimonials = () => {
  const { isVisible, elementRef } = useScrollAnimation();
  const testimonials = [
    {
      quote: "I learned more Spanish in 2 weeks with Retell than 6 months of Duolingo. Learning from TikToks I actually watch is a game-changer.",
      author: "Maria C.",
      position: "Learning Spanish",
      avatar: "bg-cosmic-light/30"
    },
    {
      quote: "The pronunciation scoring is incredible. I can finally hear exactly which words I'm mispronouncing in Japanese.",
      author: "Alex T.",
      position: "Learning Japanese",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "Using my own vacation photos to learn French vocabulary made everything click. It's like the words are attached to my memories.",
      author: "Sarah K.",
      position: "Learning French",
      avatar: "bg-cosmic-light/40"
    }
  ];
  
  return (
    <section ref={elementRef} className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className={`max-w-7xl mx-auto space-y-16 relative z-10 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-young-serif tracking-tighter text-foreground">
            Loved by language learners
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from people learning languages with their favorite content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Pricing = () => {
  const { isVisible, elementRef } = useScrollAnimation();
  
  const plans = [
    {
      name: "Free",
      price: "Free",
      period: "Free forever",
      description: "Perfect for getting started with language learning",
      features: [
        "3 video imports per month",
        "Basic vocabulary lessons",
        "Spaced repetition reviews",
        "1 target language",
        "Community support"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "Unlimited learning for serious language students",
      features: [
        "Unlimited video imports",
        "Camera roll photo lessons",
        "Advanced pronunciation scoring",
        "All 12+ languages",
        "Priority AI processing",
        "Detailed progress analytics",
        "Streak freeze (1/day)"
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Team",
      price: "$19.99",
      period: "per month",
      description: "Learn together with friends, family, or classrooms",
      features: [
        "Everything in Pro",
        "Up to 5 learners",
        "Shared video library",
        "Group leaderboards",
        "Friend challenges",
        "Admin dashboard",
        "Priority support"
      ],
      buttonText: "Start Team Trial",
      buttonVariant: "outline",
      popular: false
    }
  ];
  
  return (
    <section ref={elementRef} id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className={`max-w-7xl mx-auto space-y-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-young-serif tracking-tighter text-foreground">
            Simple pricing for every learner
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free, upgrade when you're ready — cancel anytime
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border flex flex-col h-full ${
                plan.popular 
                  ? "border-primary/50 cosmic-glow bg-card" 
                  : "border-border cosmic-gradient bg-card"
              } transition-all duration-300 relative ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-2xl font-medium tracking-tighter mb-1 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</div>
                  {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                </div>
                
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className={
                    plan.buttonVariant === "default" 
                      ? "w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "w-full border-border text-foreground hover:bg-muted"
                  }
                  variant={plan.buttonVariant as "default" | "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-muted-foreground">
          Have questions? <a href="#" className="text-primary hover:underline">Contact our support team</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

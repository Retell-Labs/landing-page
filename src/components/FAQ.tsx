import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { isVisible, elementRef } = useScrollAnimation();
  
  const faqs = [
    {
      question: "What types of videos can I import?",
      answer: "You can import YouTube Shorts, TikTok videos, and Instagram Reels by sharing the link. You can also use photos and videos from your camera roll for a deeply personal learning experience."
    },
    {
      question: "How does the AI create lessons from videos?",
      answer: "Our AI transcribes the audio using OpenAI Whisper, then analyzes the content to extract vocabulary, key phrases, grammar points, and practice sentences tailored to your proficiency level."
    },
    {
      question: "What languages are supported?",
      answer: "We currently support 12+ languages including Spanish, French, Japanese, Korean, Mandarin Chinese, German, Italian, Portuguese, Arabic, Russian, Hindi, and more being added regularly."
    },
    {
      question: "How does pronunciation scoring work?",
      answer: "When you record yourself speaking, Azure Speech AI analyzes your pronunciation word-by-word, scoring accuracy, fluency, and completeness. You'll see exactly which words need more practice."
    },
    {
      question: "Is it really free?",
      answer: "Yes! The free plan includes 3 video imports per month, spaced repetition reviews, and basic vocabulary lessons. Pro unlocks unlimited imports, all languages, and advanced features."
    },
    {
      question: "Can I learn from my own photos?",
      answer: "Absolutely! Import photos from your camera roll and our vision AI will describe the scene, identify objects and actions, and create vocabulary and phrase lessons based on your own life experiences."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <section ref={elementRef} id="faq" className="w-full py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className={`max-w-4xl mx-auto space-y-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-young-serif tracking-tighter text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Retell
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              open={openFAQ === index}
              onOpenChange={() => toggleFAQ(index)}
              className={`rounded-xl border border-border bg-card transition-all duration-300 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors">
                <h3 className="text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <div className="pt-2 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a href="#" className="text-primary hover:underline font-medium">
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
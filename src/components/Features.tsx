
import React from 'react';
import { Layers, Camera, Mic, Brain, Globe, Trophy, ArrowRight } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Features = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const features = [
    {
      title: "AI Video Analysis",
      description: "Import any short video and our AI transcribes, translates, and extracts key vocabulary automatically.",
      expandedDescription: "Our pipeline uses Whisper for accurate speech-to-text transcription in 50+ languages, then DeepSeek analyzes the content to identify key vocabulary, grammar patterns, and cultural context — all in seconds.",
      icon: <Layers size={32} className="text-primary" />
    },
    {
      title: "Camera Roll Learning",
      description: "Turn your vacation photos and daily life videos into personalized language lessons.",
      expandedDescription: "Select any photo from your camera roll and our vision AI describes the scene in your target language — identifying objects, actions, and context to generate vocabulary and phrases relevant to your real life.",
      icon: <Camera size={32} className="text-primary" />
    },
    {
      title: "Pronunciation Scoring",
      description: "Record yourself speaking and get word-by-word pronunciation scores powered by Azure Speech AI.",
      expandedDescription: "Get detailed feedback on accuracy, fluency, and completeness for every sentence you speak. Each word is scored individually so you know exactly where to improve, with real-time visual feedback.",
      icon: <Mic size={32} className="text-primary" />
    },
    {
      title: "Spaced Repetition",
      description: "Never forget what you learn with our SM-2 algorithm that schedules reviews at the perfect time.",
      expandedDescription: "Every word and phrase you learn becomes a flashcard that moves from New to Learning to Reviewing to Mastered. The SM-2 algorithm adapts intervals based on how well you recall each item, ensuring efficient long-term retention.",
      icon: <Brain size={32} className="text-primary" />
    },
    {
      title: "12+ Languages",
      description: "Learn Spanish, Japanese, Korean, French, Mandarin, and more — all from content you love.",
      expandedDescription: "Currently supporting Spanish, Japanese, Korean, French, Mandarin Chinese, German, Italian, Portuguese, Arabic, Hindi, Thai, and Vietnamese — with more languages added regularly based on community requests.",
      icon: <Globe size={32} className="text-primary" />
    },
    {
      title: "Gamified Progress",
      description: "Earn XP, maintain streaks, unlock achievements, and compete on leaderboards with friends.",
      expandedDescription: "Earn XP for every lesson completed, word learned, and speaking exercise finished. Level up through ranks, maintain daily streaks for bonus rewards, unlock achievements, and see how you stack up against friends on weekly leaderboards.",
      icon: <Trophy size={32} className="text-primary" />
    }
  ];

  return (
    <section ref={elementRef} id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className={`max-w-7xl mx-auto space-y-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-young-serif tracking-tighter">
            Everything You Need to Learn Languages
          </h2>
          <p className="text-muted-foreground text-lg">
            AI-powered tools that turn your favorite videos into complete language lessons
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className={`group h-full rounded-xl border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm ${isVisible ? 'animate-fade-in' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="p-6 h-full flex flex-col">
                      <div className="h-16 w-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 bg-primary/10">
                        <div className="transition-all duration-300 group-hover:scale-110">
                          {feature.icon}
                        </div>
                      </div>

                      <h3 className="text-xl font-medium tracking-tighter mb-3 transition-colors duration-300 group-hover:text-primary text-foreground">
                        {feature.title}
                      </h3>

                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-4 flex-grow">
                        {feature.description}
                      </p>

                      <div className="space-y-4 mt-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.expandedDescription}
                        </p>

                        <div className="flex justify-end">
                          <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-all duration-300 hover:gap-2">
                            Learn more
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

          <div className="flex justify-center mt-8 md:hidden">
            <div className="text-sm text-muted-foreground">
              Swipe to explore features →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

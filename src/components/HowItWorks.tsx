import React, { useState, useEffect } from 'react';
import { Upload, Sparkles, Mic, TrendingUp, Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const { isVisible, elementRef } = useScrollAnimation();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      number: "1",
      title: "Import a video or photo",
      description: "Share a TikTok, YouTube Short, or pick a photo from your camera roll.",
      icon: <Upload className="h-6 w-6" />,
    },
    {
      number: "2",
      title: "AI analyzes the content",
      description: "Our AI transcribes audio, identifies vocabulary, key phrases, and creates a personalized lesson.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      number: "3",
      title: "Practice vocabulary & speaking",
      description: "Learn new words, build phrases, and record yourself speaking with real-time pronunciation feedback.",
      icon: <Mic className="h-6 w-6" />,
    },
    {
      number: "4",
      title: "Track your progress",
      description: "Earn XP, maintain your streak, and review with spaced repetition to never forget what you learn.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && activeStep < steps.length) {
      interval = setInterval(() => {
        setCompletedSteps(prev => [...prev, activeStep]);
        setActiveStep(prev => {
          const next = prev + 1;
          if (next >= steps.length) {
            setIsPlaying(false);
            return prev;
          }
          return next;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeStep, steps.length]);

  const startDemo = () => {
    setActiveStep(0);
    setCompletedSteps([]);
    setIsPlaying(true);
  };

  const resetDemo = () => {
    setActiveStep(0);
    setCompletedSteps([]);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const selectStep = (stepIndex: number) => {
    setActiveStep(stepIndex);
    setIsPlaying(false);
  };

  return (
    <section ref={elementRef} id="how-it-works" className="w-full py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className={`max-w-7xl mx-auto space-y-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-young-serif font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From video import to fluent speaking in 4 simple steps
          </p>

          {/* Interactive Controls */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={startDemo}
              variant="default"
              className="bg-primary hover:bg-primary/90"
            >
              <Play className="h-4 w-4 mr-2" />
              Start Demo
            </Button>
            <Button
              onClick={togglePlayPause}
              variant="outline"
              disabled={!isPlaying && activeStep === 0 && completedSteps.length === 0}
            >
              {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {isPlaying ? 'Pause' : 'Resume'}
            </Button>
            <Button
              onClick={resetDemo}
              variant="ghost"
              size="sm"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto bg-border/30 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isCompleted = completedSteps.includes(index);
              const isPending = index > activeStep && !isCompleted;

              return (
                <div
                  key={index}
                  className={`text-center space-y-6 relative transition-all duration-700 transform cursor-pointer group ${
                    isVisible ? 'animate-fade-in' : ''
                  } ${isActive ? 'scale-105' : isPending ? 'opacity-60' : ''}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => selectStep(index)}
                >
                  <div className="relative">
                    {/* Step number circle */}
                    <div className={`w-14 h-14 mx-auto rounded-full font-bold text-lg flex items-center justify-center relative z-10 shadow-lg transition-all duration-500 ${
                      isCompleted
                        ? 'bg-green-500 text-white ring-4 ring-green-500/20'
                        : isActive
                          ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                          : 'bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                      {isCompleted ? <CheckCircle className="h-6 w-6" /> : step.number}
                    </div>

                  </div>

                  {/* Icon container */}
                  <div className={`w-18 h-18 mx-auto rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    isCompleted
                      ? 'bg-green-500/10 text-green-500 shadow-lg shadow-green-500/20'
                      : isActive
                        ? 'bg-primary/20 text-primary shadow-lg shadow-primary/20 scale-110'
                        : 'bg-primary/10 text-primary/70 group-hover:bg-primary/20 group-hover:text-primary group-hover:scale-110'
                  }`}>
                    <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isCompleted
                        ? 'text-green-600'
                        : isActive
                          ? 'text-primary'
                          : 'text-foreground group-hover:text-primary'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed max-w-xs mx-auto transition-colors duration-300 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.description}
                    </p>

                    {/* Status indicator */}
                    {isActive && (
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-xs text-primary font-medium">Processing...</span>
                      </div>
                    )}

                    {isCompleted && (
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-xs text-green-600 font-medium">Complete</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

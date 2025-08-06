import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Send } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Software Engineer & Full-Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // In a real implementation, you would link to your actual resume file
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-background/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-full animate-float delay-1000 hidden lg:block"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/30 rounded-full animate-float delay-500 hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4 animate-slide-in-left">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Your Name</span>
          </h1>
          
          {/* Animated Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 h-12">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly applications. 
            Specializing in MERN stack development and competitive programming with a focus on 
            clean code and innovative solutions.
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Frontend Developer', 'MERN Stack', 'Competitive Programmer', 'Problem Solver'].map((tag, index) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-primary-muted border border-primary/30 rounded-full text-primary text-sm font-medium animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline_primary" 
              size="lg"
              onClick={downloadResume}
              className="group"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group border border-border hover:border-primary"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
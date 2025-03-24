
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Intersection Observer for animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (heroTextRef.current) {
            heroTextRef.current.classList.add('animate-slide-in-left');
          }
          if (heroImageRef.current) {
            heroImageRef.current.classList.add('animate-slide-in-right');
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen pt-20 overflow-hidden flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>
      <div className="absolute -top-1/2 -left-1/4 w-1/2 h-screen rounded-full bg-neon-purple/20 blur-[120px] animate-pulse-glow"></div>
      <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-screen rounded-full bg-neon-pink/20 blur-[120px] animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 pt-10 pb-20 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Hero Text */}
          <div ref={heroTextRef} className="w-full lg:w-1/2 opacity-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
              <span className="text-sm font-medium text-white/80">Best gaming moments</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Set your mind 
              <span className="block">free and conquer</span>
              <span className="block">new worlds</span>
            </h1>
            
            <p className="text-white/70 text-lg mb-8 max-w-lg">
              Playing electronic games, whether through consoles, computers, mobile phones or 
              another medium altogether.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/collections" className="inline-flex items-center bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover-glow">
                Explore Collections
              </Link>
              
              <button className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </span>
                Watch Now
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div ref={heroImageRef} className="w-full lg:w-1/2 opacity-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-full blur-[100px]"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden image-shine">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
                  alt="VR Gaming Experience"
                  className="w-full h-auto object-cover rounded-3xl"
                />
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white font-medium border border-white/20">
                  15% off
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { value: "24K+", label: "Player" },
            { value: "30K+", label: "Games" },
            { value: "1M+", label: "Total Sales" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 flex flex-col items-center justify-center backdrop-blur-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

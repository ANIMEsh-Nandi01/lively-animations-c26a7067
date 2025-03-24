
import React, { useRef, useEffect } from 'react';
import GameCard, { GameProps } from './GameCard';

const FeaturedGames = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  
  const games: GameProps[] = [
    {
      id: '1',
      title: 'Neon Warfare',
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80',
      demoAvailable: true,
      delay: 100
    },
    {
      id: '2',
      title: 'Eclipse Protocol',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&auto=format&fit=crop&q=80',
      demoAvailable: true,
      delay: 200
    },
    {
      id: '3',
      title: 'Hypernova Conflict',
      image: 'https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?w=800&auto=format&fit=crop&q=80',
      demoAvailable: true,
      delay: 300
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add('animate-fade-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-1/2 right-0 w-1/2 h-screen rounded-full bg-neon-purple/10 blur-[120px]"></div>
      <div className="absolute -bottom-1/2 left-0 w-1/2 h-screen rounded-full bg-neon-pink/10 blur-[120px]"></div>
      
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-12 opacity-0">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
            <span className="text-sm font-medium text-white/80">Our Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose your <span className="text-neon-pink">favorite</span> games
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
            View All Games
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;

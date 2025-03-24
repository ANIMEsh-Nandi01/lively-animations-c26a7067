
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GameCard, { GameProps } from '@/components/GameCard';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('newest');
  const [games, setGames] = useState<GameProps[]>([]);
  
  // Simulate loading games based on category
  useEffect(() => {
    // Sample game data
    const allGames: GameProps[] = [
      {
        id: '1',
        title: 'Deadlock Protocol',
        image: '/public/lovable-uploads/e95f9fc5-34a4-472a-a66d-9c2e98c5df31.png',
      },
      {
        id: '2',
        title: 'Shadowfire: Warzone',
        image: '/public/lovable-uploads/c8813678-18e9-44b0-ab39-8776bfe73fac.png',
      },
      {
        id: '3',
        title: 'Neon Strike: Apocalypse',
        image: '/public/lovable-uploads/f0077a99-6cf1-4dcb-9344-c620ae03d065.png',
      },
      {
        id: '4',
        title: 'Cybernetic Revolution',
        image: '/public/lovable-uploads/7bf557e4-d809-423f-89b2-b390bc2b239a.png',
      },
      {
        id: '5',
        title: 'Quantum Breach',
        image: '/public/lovable-uploads/eecfdc45-81a3-4430-be93-266f40db159b.png',
      },
      {
        id: '6',
        title: 'Neural Override',
        image: '/public/lovable-uploads/003feb6e-1b8f-4076-8a6e-74cbd0f94b1d.png',
      },
    ];
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setGames(allGames);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);
  
  // Smooth page transition on load
  useEffect(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease-in-out';
      document.body.style.opacity = '1';
    }, 100);
    
    return () => {
      document.body.style.transition = '';
      document.body.style.opacity = '';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
              <span className="text-sm font-medium text-white/80">Top Categories</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Welcome to the <span className="text-neon-pink">top</span><br />
              <span className="text-neon-pink">games</span>
            </h1>
            
            {/* Category filters */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['newest', 'latest', 'fight', 'sport'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white'
                      : 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)} games
                </button>
              ))}
            </div>
          </div>
          
          {/* Game Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard 
                key={game.id} 
                {...game} 
                delay={index * 100}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white hover-glow transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collections;

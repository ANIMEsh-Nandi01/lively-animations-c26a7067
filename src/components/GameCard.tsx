
import React, { useState } from 'react';

export interface GameProps {
  id: string;
  title: string;
  image: string;
  demoAvailable?: boolean;
  genre?: string;
  delay?: number;
}

const GameCard: React.FC<GameProps> = ({ 
  id, 
  title, 
  image, 
  demoAvailable = true,
  genre,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group rounded-3xl overflow-hidden animate-scale-in transition-all duration-300 transform hover:scale-[1.02]"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background with Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl image-shine">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/95 via-gaming-dark/50 to-transparent"></div>
        
        {/* Timer Overlay */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-sm text-white/90 border border-white/10">
          3h:28m48s
        </div>
        
        {/* Favorite Button */}
        <button className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full backdrop-blur-md bg-black/30 border border-white/10 text-white/70 hover:text-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        
        <div className="flex items-center justify-between mt-4">
          <button className="text-neon-pink font-semibold transition-all duration-300 hover:text-white">
            Play Now
          </button>
          
          <div className="flex items-center">
            {demoAvailable && (
              <span className="mr-4 text-sm text-white/70">Live Demo</span>
            )}
            
            <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-neon-purple to-neon-pink hover-glow transition-all duration-300 transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;

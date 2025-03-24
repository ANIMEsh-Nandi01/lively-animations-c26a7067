
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const games = [
  {
    id: 1,
    title: "Neon Eclipse",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
    category: "Action RPG",
  },
  {
    id: 2,
    title: "Cyber Heist",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    category: "Stealth",
  },
  {
    id: 3,
    title: "Astral Odyssey",
    image: "https://images.unsplash.com/photo-1633265486501-0cf524a07213?w=800&auto=format&fit=crop&q=80",
    category: "Adventure",
  },
  {
    id: 4,
    title: "Quantum Drift",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80",
    category: "Racing",
  },
];

const GameBanner = () => {
  return (
    <div className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center">Featured Banners</h2>
          <p className="text-center text-white/70 mt-2">Explore our featured game banners</p>
        </div>
        
        <ScrollArea className="w-full h-[350px] rounded-xl">
          <div className="flex flex-col gap-6 pr-4">
            {games.map((game) => (
              <div 
                key={game.id}
                className="relative w-full h-64 rounded-xl overflow-hidden image-shine"
              >
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load image: ${game.image}`);
                    // Fallback image
                    e.currentTarget.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-sm text-neon-pink font-medium bg-white/10 px-3 py-1 rounded-full w-max mb-2">
                    {game.category}
                  </span>
                  <h3 className="text-2xl font-bold">{game.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default GameBanner;

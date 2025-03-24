
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const games = [
  {
    id: 1,
    title: "Neon Eclipse",
    image: "https://placehold.co/1200x600/120038/FF3DC3?text=Neon+Eclipse&font=montserrat",
    category: "Action RPG",
  },
  {
    id: 2,
    title: "Cyber Heist",
    image: "https://placehold.co/1200x600/1B0E42/3DFFFC?text=Cyber+Heist&font=montserrat",
    category: "Stealth",
  },
  {
    id: 3,
    title: "Astral Odyssey",
    image: "https://placehold.co/1200x600/0A051F/8B3DFF?text=Astral+Odyssey&font=montserrat",
    category: "Adventure",
  },
  {
    id: 4,
    title: "Quantum Drift",
    image: "https://placehold.co/1200x600/1F0A3D/3D8BFF?text=Quantum+Drift&font=montserrat",
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

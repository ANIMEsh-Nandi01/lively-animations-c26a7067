
import React from 'react';

const CategoryMarquee = () => {
  const categories = [
    "GAMING SPANING",
    "ACTION - PACKED",
    "MIND - BENDING",
    "COLLECTION OG GAME",
    "ADVENTURE AWAITS",
    "STRATEGY MASTERS",
    "RETRO CLASSICS",
    "INDIE GEMS"
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedCategories = [...categories, ...categories];

  return (
    <div className="w-full py-4 bg-gaming-dark border-y border-white/10 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {duplicatedCategories.map((category, index) => (
          <div key={index} className="inline-flex items-center mx-6">
            <span className="text-neon-pink mr-3">★</span>
            <span className="text-white font-bold tracking-wider">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMarquee;

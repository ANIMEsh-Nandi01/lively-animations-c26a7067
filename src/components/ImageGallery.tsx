
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&auto=format&fit=crop&q=80",
    alt: "Team Event"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
    alt: "Game Development"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&auto=format&fit=crop&q=80",
    alt: "Office Space"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1560419015-d63a9c5afc90?w=800&auto=format&fit=crop&q=80",
    alt: "Gaming Tournament"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&auto=format&fit=crop&q=80",
    alt: "Community Event"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    alt: "Award Ceremony"
  },
];

const ImageGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="py-12 bg-gaming-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(image => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-xl image-shine transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,61,195,0.3)]"
            >
              {isLoading && (
                <div className="w-full h-64 bg-white/5 animate-pulse flex items-center justify-center">
                  <span className="text-white/50">Loading...</span>
                </div>
              )}
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
                onLoad={handleImageLoad}
                onError={(e) => {
                  console.error(`Failed to load image: ${image.url}`);
                  // Fallback image
                  e.currentTarget.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;


import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop",
    alt: "Team Event"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1974&auto=format&fit=crop",
    alt: "Game Development"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop",
    alt: "Office Space"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1560419015-d63a9c5afc90?w=1974&auto=format&fit=crop&q=80",
    alt: "Gaming Tournament"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
    alt: "Community Event"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    alt: "Award Ceremony"
  },
];

const ImageGallery = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(image => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-xl image-shine transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,61,195,0.3)]"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

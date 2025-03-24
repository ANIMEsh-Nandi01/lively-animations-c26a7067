
import React from 'react';

const images = [
  {
    id: 1,
    url: "https://placehold.co/600x400/110A29/FF3DC3?text=Team+Event&font=montserrat",
    alt: "Team Event"
  },
  {
    id: 2,
    url: "https://placehold.co/600x400/1B0E42/3DFFFC?text=Game+Development&font=montserrat",
    alt: "Game Development"
  },
  {
    id: 3,
    url: "https://placehold.co/600x400/0A051F/8B3DFF?text=Office+Space&font=montserrat",
    alt: "Office Space"
  },
  {
    id: 4,
    url: "https://placehold.co/600x400/1F0A3D/3D8BFF?text=Gaming+Tournament&font=montserrat",
    alt: "Gaming Tournament"
  },
  {
    id: 5,
    url: "https://placehold.co/600x400/110A29/FF3DC3?text=Community+Event&font=montserrat",
    alt: "Community Event"
  },
  {
    id: 6,
    url: "https://placehold.co/600x400/1B0E42/3DFFFC?text=Award+Ceremony&font=montserrat",
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

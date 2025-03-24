
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';

const About = () => {
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
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute right-0 top-0 w-1/2 h-full rounded-full bg-neon-purple/5 blur-[150px]"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About GameTopia</h1>
              <p className="text-white/70 text-lg mb-8">
                Discover our story, mission, and the team behind GameTopia's gaming platform
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
                  <span className="text-sm font-medium text-white/80">Our Story</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From Passion to Platform: <br />The GameTopia Journey
                </h2>
                
                <p className="text-white/70 mb-6">
                  GameTopia began as a small community of gaming enthusiasts who shared a common vision: 
                  to create a platform where gamers from all backgrounds could discover, play, and connect 
                  through exceptional gaming experiences.
                </p>
                
                <p className="text-white/70 mb-6">
                  Founded in 2018, our team has grown from a handful of passionate developers to a diverse
                  crew of designers, engineers, and gaming experts dedicated to pushing the boundaries of
                  what's possible in the gaming industry.
                </p>
                
                <p className="text-white/70">
                  Today, GameTopia serves millions of players worldwide, offering a curated collection of 
                  games from both established studios and rising independent developers.
                </p>
              </div>
              
              <div className="image-shine">
                <img 
                  src="https://placehold.co/600x800/1B0E42/FF3DC3?text=Our+Story&font=montserrat" 
                  alt="GameTopia Story" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 relative">
          <div className="absolute left-0 bottom-0 w-1/2 h-full rounded-full bg-neon-cyan/5 blur-[150px]"></div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1 image-shine">
                <img 
                  src="https://placehold.co/600x600/110A29/3DFFFC?text=Our+Mission&font=montserrat" 
                  alt="Our Mission" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-neon-blue mr-2"></span>
                  <span className="text-sm font-medium text-white/80">Our Mission</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Revolutionizing the<br />Gaming Experience
                </h2>
                
                <p className="text-white/70 mb-6">
                  At GameTopia, our mission is to create an inclusive, innovative gaming ecosystem that 
                  empowers both players and creators. We believe that gaming is more than entertainment—it's 
                  a form of art, a social connector, and a platform for self-expression.
                </p>
                
                <div className="space-y-4 mb-6">
                  {[
                    "Curate exceptional gaming experiences across all genres",
                    "Support independent developers and nurture creative talent",
                    "Build technology that makes gaming more accessible and enjoyable",
                    "Foster a diverse, respectful community where all gamers belong"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mt-1 mr-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-neon-pink"></span>
                      </span>
                      <p className="text-white/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Image Gallery */}
        <ImageGallery />
        
        {/* Team Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-neon-purple mr-2"></span>
                <span className="text-sm font-medium text-white/80">Our Team</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet the Visionaries<br />Behind GameTopia
              </h2>
              
              <p className="text-white/70 max-w-2xl mx-auto">
                Our diverse team brings together expertise from gaming, technology, design, and business
                to create the ultimate gaming platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Alex Chen", role: "Founder & CEO", image: "https://placehold.co/400x500/0A051F/FF3DC3?text=Alex+C.&font=montserrat" },
                { name: "Maya Rodriguez", role: "Chief Technology Officer", image: "https://placehold.co/400x500/110A29/3DFFFC?text=Maya+R.&font=montserrat" },
                { name: "James Wilson", role: "Head of Game Curation", image: "https://placehold.co/400x500/1B0E42/8B3DFF?text=James+W.&font=montserrat" },
                { name: "Sarah Kim", role: "Creative Director", image: "https://placehold.co/400x500/1F0A3D/3D8BFF?text=Sarah+K.&font=montserrat" }
              ].map((member, index) => (
                <div key={index} className="glass-card rounded-xl p-5 transition-all duration-300 hover:bg-white/10">
                  <div className="image-shine rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-neon-pink">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

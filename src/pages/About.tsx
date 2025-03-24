
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About GameTopia</h1>
              <p className="text-white/70 text-lg">Your gateway to the world of gaming excellence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-white/70">At GameTopia, we're passionate about creating a vibrant community where gamers of all levels can discover, enjoy, and share incredible gaming experiences. Our mission is to provide a seamless platform that connects players with the games they love and helps them discover new favorites.</p>
                
                <h2 className="text-2xl font-bold mb-4 mt-8">Our Vision</h2>
                <p className="text-white/70">We envision a world where gaming is recognized as a powerful medium for creativity, connection, and cultural expression. We're committed to supporting developers, celebrating gaming culture, and fostering an inclusive community where everyone feels welcome.</p>
              </div>
              
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-full blur-[100px]"></div>
                <img 
                  src="/public/lovable-uploads/f0077a99-6cf1-4dcb-9344-c620ae03d065.png" 
                  alt="Gaming Setup" 
                  className="relative w-full h-full object-cover rounded-3xl image-shine"
                />
              </div>
            </div>
            
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Alex Morgan",
                    role: "Founder & CEO",
                    image: "/public/lovable-uploads/c8813678-18e9-44b0-ab39-8776bfe73fac.png"
                  },
                  {
                    name: "Jamie Chen",
                    role: "Head of Game Curation",
                    image: "/public/lovable-uploads/e95f9fc5-34a4-472a-a66d-9c2e98c5df31.png"
                  },
                  {
                    name: "Sam Wilson",
                    role: "Community Manager",
                    image: "/public/lovable-uploads/b5cb5cd3-7c24-4fc9-a473-c9f9920ecb74.png"
                  }
                ].map((member, index) => (
                  <div 
                    key={index} 
                    className="glass-card rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-neon-pink/30">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-white/70">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

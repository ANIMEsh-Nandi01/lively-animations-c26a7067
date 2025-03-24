
import React from 'react';

const BackgroundImages = () => {
  return (
    <>
      {/* Abstract shapes and elements */}
      <div className="fixed -z-10 top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"></div>
      <div className="fixed -z-10 bottom-0 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-[100px]"></div>
      <div className="fixed -z-10 top-0 right-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px]"></div>
      
      {/* Grid elements */}
      <div className="fixed -z-10 inset-0 opacity-[0.03] bg-[radial-gradient(circle_400px_at_center,#3d8bff10_0%,transparent_70%)]"></div>
      
      {/* Subtle noise background */}
      <div className="fixed -z-10 inset-0 bg-noise-pattern opacity-[0.03]"></div>
      
      {/* Floating elements */}
      <div className="fixed -z-10 top-[15%] left-[5%] w-24 h-24 rounded bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 animate-float"></div>
      <div className="fixed -z-10 top-[40%] right-[10%] w-16 h-16 rounded bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="fixed -z-10 bottom-[20%] left-[15%] w-20 h-20 rounded bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Background images */}
      <div className="fixed -z-10 bottom-0 right-0 w-full h-full opacity-[0.05] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop" 
          alt="Background Pattern" 
          className="absolute -right-1/4 bottom-0 w-1/2 opacity-30"
        />
      </div>
      <div className="fixed -z-10 top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
          alt="Background Pattern" 
          className="absolute -left-1/4 top-1/4 w-1/2 opacity-20 rotate-180"
        />
      </div>
    </>
  );
};

export default BackgroundImages;

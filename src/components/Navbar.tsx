
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-gaming-dark/80 backdrop-blur-xl border-b border-white/10' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform hover:scale-105 duration-300"
        >
          <div className="text-neon-pink font-bold text-2xl flex items-center">
            <span className="text-white">Game</span>
            <span className="text-gradient">Topia</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collections">Games</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Support</NavLink>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex bg-gradient-to-r from-neon-purple to-neon-pink text-white px-6 py-2 rounded-full hover-glow transition-all duration-300 hover:scale-105">
            Sign In
          </button>
          
          <button className="flex md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-white/80 font-medium transition-all duration-300 hover:text-neon-pink relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-neon-pink transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default Navbar;

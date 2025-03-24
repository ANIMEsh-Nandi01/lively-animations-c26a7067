
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <Link to="/login" className="hidden md:flex bg-gradient-to-r from-neon-purple to-neon-pink text-white px-6 py-2 rounded-full hover-glow transition-all duration-300 hover:scale-105">
            Sign In
          </Link>
          
          <button 
            className="flex md:hidden text-white" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gaming-dark/95 backdrop-blur-xl border-t border-white/10 px-4 py-4">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/collections">Games</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/contact">Support</MobileNavLink>
            <Link 
              to="/login" 
              className="bg-gradient-to-r from-neon-purple to-neon-pink text-white px-6 py-2 rounded-full text-center hover-glow transition-all duration-300 hover:scale-105"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-white/80 font-medium transition-all duration-300 hover:text-neon-pink relative group ${
        isActive ? 'text-neon-pink' : ''
      }`}
    >
      {children}
      <span className={`absolute left-0 bottom-0 h-0.5 bg-neon-pink transition-all duration-300 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </Link>
  );
};

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-white/80 font-medium py-2 transition-all duration-300 ${
        isActive ? 'text-neon-pink' : ''
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;

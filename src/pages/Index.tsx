
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryMarquee from '@/components/CategoryMarquee';
import FeaturedGames from '@/components/FeaturedGames';
import HowToGuide from '@/components/HowToGuide';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import GameBanner from '@/components/GameBanner';

const Index = () => {
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
      
      <main className="flex-grow">
        <HeroSection />
        <CategoryMarquee />
        <GameBanner />
        <FeaturedGames />
        <HowToGuide />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;


import React, { useRef, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.add('animate-fade-in');
            }
            if (formRef.current) {
              formRef.current.classList.add('animate-slide-in-right');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-screen rounded-full bg-neon-purple/10 blur-[120px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div ref={contentRef} className="w-full lg:w-1/2 opacity-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
              <span className="text-sm font-medium text-white/80">Newsletter</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated with the<br />
              Latest in Gaming!
            </h2>
            
            <p className="text-white/70 text-lg mb-8">
              Join our community and never miss out on exciting game
              releases, special offers, and insider tips. By subscribing to
              our newsletter, you'll get exclusive updates directly in your
              inbox.
            </p>
            
            <div className="animate-float">
              <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-neon-purple/30 to-neon-pink/30 rounded-full blur-3xl opacity-70"></div>
            </div>
          </div>
          
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="w-full lg:w-1/2 opacity-0">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-pink/50 focus:border-transparent text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Number"
                    className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-pink/50 focus:border-transparent text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-pink/50 focus:border-transparent text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Anything we should know?"
                  className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-pink/50 focus:border-transparent text-white resize-none"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-neon-purple to-neon-pink text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover-glow"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

const Support = () => {
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

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign In' button in the top-right corner and select 'Create Account'. Follow the prompts to enter your email, create a password, and verify your account."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and various cryptocurrency options including Bitcoin and Ethereum."
    },
    {
      question: "How do I download my purchased games?",
      answer: "After purchasing a game, go to your library in your account dashboard. You'll find all your games there with download buttons. Click the download button for the game you want to install."
    },
    {
      question: "Can I get a refund for a game?",
      answer: "Yes, we offer refunds within 14 days of purchase if you've played less than 2 hours. To request a refund, go to your purchase history in your account and select the 'Request Refund' option."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team through the form on this page, by emailing support@gametopia.com, or by using the live chat feature available at the bottom right of every page."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute right-0 top-0 w-1/2 h-full rounded-full bg-neon-pink/5 blur-[150px]"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Support Center</h1>
              <p className="text-white/70 text-lg mb-8">
                Get help with your account, game purchases, technical issues, or any other questions
              </p>
            </div>
          </div>
        </section>
        
        {/* Support Options */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Help Center",
                  description: "Browse our knowledge base for answers to common questions",
                  image: "https://placehold.co/400x300/110A29/FF3DC3?text=Help+Center&font=montserrat",
                  buttonText: "Visit Help Center"
                },
                {
                  title: "Contact Support",
                  description: "Reach out to our support team for personalized assistance",
                  image: "https://placehold.co/400x300/1B0E42/3DFFFC?text=Contact+Us&font=montserrat",
                  buttonText: "Contact Us"
                },
                {
                  title: "Community Forums",
                  description: "Connect with other users to find solutions and share experiences",
                  image: "https://placehold.co/400x300/0A051F/8B3DFF?text=Community&font=montserrat",
                  buttonText: "Join Community"
                }
              ].map((option, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-105">
                  <div className="image-shine">
                    <img 
                      src={option.image} 
                      alt={option.title} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-white/70 mb-4">{option.description}</p>
                    <button className="w-full bg-gradient-to-r from-neon-purple to-neon-pink text-white px-6 py-2 rounded-full hover-glow transition-all duration-300 hover:scale-105">
                      {option.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-16 relative">
          <div className="absolute left-0 bottom-0 w-1/2 h-full rounded-full bg-neon-blue/5 blur-[150px]"></div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
                  <span className="text-sm font-medium text-white/80">Get in Touch</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  We're Here to Help<br />With Any Questions
                </h2>
                
                <p className="text-white/70 mb-6">
                  Can't find what you're looking for? Fill out the form and our support team
                  will get back to you within 24 hours.
                </p>
                
                <div className="mb-8">
                  <div className="image-shine rounded-xl overflow-hidden">
                    <img 
                      src="https://placehold.co/600x400/1F0A3D/3DFFFC?text=Support+Team&font=montserrat" 
                      alt="Support Team" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Email", value: "support@gametopia.com" },
                    { label: "Phone", value: "+1 (555) 123-4567" },
                    { label: "Hours", value: "Monday-Friday: 9AM-6PM EST" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-neon-pink/20 flex items-center justify-center mt-1 mr-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-neon-pink"></span>
                      </span>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-white/70">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-pink/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-pink/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-pink/50"
                      placeholder="Enter subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-pink/50"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-neon-purple to-neon-pink text-white px-6 py-3 rounded-full font-medium hover-glow transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-neon-purple mr-2"></span>
                <span className="text-sm font-medium text-white/80">FAQs</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              
              <p className="text-white/70 max-w-2xl mx-auto">
                Find quick answers to common questions about our platform, services, and policies
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ScrollArea className="h-[500px] rounded-lg">
                <div className="space-y-6 pr-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="glass-card rounded-xl p-6 transition-all duration-300 hover:bg-white/10">
                      <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                      <p className="text-white/70">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Support</h1>
              <p className="text-white/70 text-lg">We're here to help you with any questions or issues</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: "How do I create an account?",
                    answer: "To create an account, click on the 'Sign In' button in the top-right corner of our website, then select 'Create Account'. Fill in your details and verify your email address to complete the registration process."
                  },
                  {
                    question: "How do I purchase games?",
                    answer: "To purchase a game, browse our collections, select the game you want, and click the 'Buy Now' or 'Add to Cart' button. Follow the checkout process to complete your purchase using your preferred payment method."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, PayPal, and various regional payment methods. You can view all available payment options during the checkout process."
                  },
                  {
                    question: "How do I download my purchased games?",
                    answer: "After purchase, go to your account library where all your games will be listed. Click on the game title and select 'Download' to begin the installation process."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
                      placeholder="Help with my account"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
                      placeholder="Describe your issue or question..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-neon-purple to-neon-pink text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover-glow w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Support</h3>
                    <p className="text-white/70">For general inquiries: support@gametopia.com</p>
                    <p className="text-white/70">For business inquiries: business@gametopia.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                    <p className="text-white/70">Customer Service: +1 (555) 123-4567</p>
                    <p className="text-white/70">Available Monday-Friday, 9 AM - 6 PM EST</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Social Media</h3>
                    <p className="text-white/70">Follow us on social media for the fastest responses</p>
                    <div className="flex space-x-4 mt-2">
                      {['instagram', 'facebook', 'twitter', 'discord'].map((social, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 hover:bg-neon-pink/20 hover:text-white transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 relative rounded-xl overflow-hidden">
                  <img 
                    src="/public/lovable-uploads/e95f9fc5-34a4-472a-a66d-9c2e98c5df31.png" 
                    alt="Support Team" 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-gaming-dark/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">Our support team is ready to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;

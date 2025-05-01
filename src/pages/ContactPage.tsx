
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 to-black text-white">
      <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">Spark Tech</Link>
          <Button asChild variant="ghost" className="text-white hover:bg-white/10">
            <Link to="/">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto py-16 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">Ready to Start?</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Get a free consultation and quote for your next digital project. Our team is ready to help you turn your ideas into reality.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-8 text-sky-300">Contact Us</h2>
            <ContactForm />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-sky-300">Our Office</h2>
              <p className="text-gray-300 mb-2">123 Tech Avenue</p>
              <p className="text-gray-300 mb-2">San Francisco, CA 94103</p>
              <p className="text-gray-300 mb-2">United States</p>
              <p className="text-gray-300">contact@sparktech.com</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-sky-300">Business Hours</h2>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-300">Monday - Friday:</p>
                <p className="text-white">9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Saturday:</p>
                <p className="text-white">10:00 AM - 4:00 PM</p>
                <p className="text-gray-300">Sunday:</p>
                <p className="text-white">Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-sky-500/30 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sky-300">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-gray-300">Our team of experts brings years of experience in delivering digital solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-sky-500/30 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sky-300">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
                <p className="text-gray-300">We work closely with you to understand your unique needs and goals.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-sky-500/30 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sky-300">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                <p className="text-gray-300">We focus on delivering measurable results that help grow your business.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;

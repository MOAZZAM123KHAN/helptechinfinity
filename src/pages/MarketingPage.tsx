
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const MarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
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
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Boost Your Online Presence</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our comprehensive digital marketing solutions will help your business stand out in today's competitive online landscape.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Search Engine Optimization</h2>
            <p className="text-gray-300 mb-6">Improve your website's visibility in search results with our strategic SEO services. We use data-driven techniques to boost your rankings and drive organic traffic.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Keyword Research & Strategy</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>On-page & Technical SEO</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Link Building & Authority Development</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Social Media Marketing</h2>
            <p className="text-gray-300 mb-6">Engage with your audience where they spend their time. We create compelling social media campaigns that build brand awareness and drive conversions.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Content Creation & Curation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Community Management</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Paid Social Advertising</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Content Marketing</h2>
            <p className="text-gray-300 mb-6">Tell your brand's story with engaging content that resonates with your audience and drives results. Our content strategies deliver value at every stage of the buyer's journey.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Blog Posts & Articles</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Video & Visual Content</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Email Marketing Campaigns</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Analytics & Reporting</h2>
            <p className="text-gray-300 mb-6">Make informed decisions based on data. We provide comprehensive analytics and reporting to measure the success of your marketing campaigns.</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Performance Tracking</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Conversion Rate Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-500 rounded-full p-1 mr-3 mt-1"></span>
                <span>Custom Reporting Dashboards</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to transform your online presence?</h2>
            <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium px-8 py-6 text-lg">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketingPage;

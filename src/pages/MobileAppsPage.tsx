
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const MobileAppsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white">
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
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Mobile Apps Development</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Reach more customers with beautiful, functional mobile applications that work seamlessly across iOS and Android devices.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Native Apps</h2>
              <p className="text-gray-300 mb-6">We build high-performance native applications for iOS and Android platforms that provide the best user experience and take full advantage of device capabilities.</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-green-500 rounded-full p-1 mr-3 mt-1"></span>
                  <span>Swift & SwiftUI for iOS</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 rounded-full p-1 mr-3 mt-1"></span>
                  <span>Kotlin & Jetpack Compose for Android</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 rounded-full p-1 mr-3 mt-1"></span>
                  <span>Full Device Feature Integration</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Cross-Platform Solutions</h2>
              <p className="text-gray-300 mb-6">Maximize your reach with cross-platform technologies that allow you to deploy a single codebase across multiple platforms without sacrificing quality.</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-green-500 rounded-full p-1 mr-3 mt-1"></span>
                  <span>React Native Development</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 rounded-full p-1 mr-3 mt-1"></span>
                  <span>Flutter Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 rounded-full p-1 mr-3 mt-1"></span>
                  <span>Cost-Effective Development</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Our Mobile App Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-green-500/20 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
                <p className="text-gray-300">We analyze your business needs and create a detailed roadmap for your mobile application.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-300">Our designers create intuitive, engaging interfaces that delight your users.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                <p className="text-gray-300">We build and rigorously test your app to ensure it's reliable and performant.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-3xl p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">See Our Mobile App Portfolio</h2>
                <p className="text-gray-300 mb-6">
                  Browse through our collection of successful mobile applications we've built for clients across various industries.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white">
                  <Link to="/portfolio">View Examples</Link>
                </Button>
              </div>
              <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-green-400">Client Success Story</h3>
                <p className="text-gray-300 italic mb-4">
                  "Spark Tech delivered an exceptional mobile app that exceeded our expectations. The intuitive design and seamless functionality have significantly improved our customer engagement."
                </p>
                <p className="text-right text-green-400 font-medium">- Jane Doe, CEO of TechCorp</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to build your mobile application?</h2>
            <Button asChild size="lg" className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-medium px-8 py-6 text-lg">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MobileAppsPage;

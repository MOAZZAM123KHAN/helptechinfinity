
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-[90vh] flex items-center bg-black text-white pt-16">
      <HeroCanvas />
      <div className="max-w-7xl mx-auto z-10 px-4 py-20 md:py-32 w-full">
        <Parallax speed={-5}>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Digital solutions 
            <span className="block">for modern businesses.</span>
          </motion.h1>
        </Parallax>
        
        <Parallax speed={-2}>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web development, mobile apps, SEO, and email marketing to take your business to the next level
          </motion.p>
        </Parallax>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button size={isMobile ? "default" : "lg"} className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button size={isMobile ? "default" : "lg"} variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-900/20 w-full sm:w-auto" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-purple-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

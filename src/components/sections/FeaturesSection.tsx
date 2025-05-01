
import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

export const FeaturesSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="features" className="py-12 md:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:col-span-2">
            <Link to="/marketing" className="block h-full">
              <FeatureCard
                title="Boost Your Online Presence"
                description="Our comprehensive digital marketing solutions will help your business stand out in today's competitive online landscape."
                buttonText="LEARN MORE"
                backgroundColor="bg-pink-500"
                onClick={() => {}}
              />
            </Link>
          </div>
          <div>
            <Link to="/mobile-apps" className="block h-full">
              <FeatureCard
                title="Mobile Apps"
                description="Reach more customers with beautiful, functional mobile applications that work seamlessly across iOS and Android devices."
                buttonText="SEE EXAMPLES"
                backgroundColor="bg-green-400"
                onClick={() => {}}
              />
            </Link>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-sky-300 rounded-3xl p-5 md:p-10 flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Ready to Start?</h2>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
                <p className="text-base md:text-lg text-center md:text-left">Get a free consultation and quote for your next digital project.</p>
                <Button 
                  className="bg-black text-white hover:bg-gray-800 font-medium rounded-full whitespace-nowrap w-full md:w-auto"
                >
                  <Link to="/contact" className="flex items-center justify-center w-full">
                    CONTACT US
                    <ArrowRight className="ml-2" size={isMobile ? 16 : 18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

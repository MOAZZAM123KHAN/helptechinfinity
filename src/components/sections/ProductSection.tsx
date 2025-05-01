
import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { useIsMobile } from "@/hooks/use-mobile";

// Fallback heading for mobile or when 3D component is loading
const ProductHeadingFallback = () => {
  return (
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-center text-white my-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      OUR UPCOMING PRODUCTS
    </motion.h2>
  );
};

// Lazy load the 3D heading component
const ProductHeading3D = lazy(() => import("@/components/3D/ProductHeading3D"));

export const ProductSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="products" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <ProductHeadingFallback />
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Discover our innovative solutions coming soon to market
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-16">
          <ProductCard
            title="AI Assistant"
            description="Intelligent virtual assistant powered by our advanced AI technology."
            image="/placeholder.svg"
            details={{
              title: "AI Assistant Pro",
              description: "Our flagship AI assistant that helps businesses automate customer support, schedule appointments, and provide personalized recommendations. Built with state-of-the-art natural language processing capabilities.",
              features: [
                "24/7 Automated Customer Support",
                "Multi-language Support",
                "Voice Recognition",
                "Integration with CRM Systems",
                "Advanced Analytics Dashboard"
              ],
              pricing: "Starting at $99/month",
              releaseDate: "Q3 2023"
            }}
          />
          
          <ProductCard
            title="Smart Analytics"
            description="Data visualization and analytics platform for business intelligence."
            image="/placeholder.svg"
            details={{
              title: "Smart Analytics Platform",
              description: "Transform your business data into actionable insights with our comprehensive analytics platform. Visualize trends, track KPIs, and make data-driven decisions with ease.",
              features: [
                "Real-time Data Processing",
                "Custom Dashboard Creation",
                "Predictive Analytics",
                "Export in Multiple Formats",
                "Role-based Access Control"
              ],
              pricing: "Starting at $149/month",
              releaseDate: "Available now"
            }}
          />
          
          <ProductCard
            title="Cloud Storage"
            description="Secure and scalable cloud storage solution for enterprises."
            image="/placeholder.svg"
            details={{
              title: "Enterprise Cloud Storage",
              description: "Secure, reliable, and infinitely scalable cloud storage designed for enterprise needs. Keep your data safe and accessible from anywhere with industry-leading encryption and redundancy.",
              features: [
                "End-to-end Encryption",
                "Automatic Backup",
                "Version History",
                "Team Collaboration Tools",
                "99.99% Uptime Guarantee"
              ],
              pricing: "Starting at $0.01 per GB",
              releaseDate: "Available now"
            }}
          />
        </div>
      </div>
    </section>
  );
};

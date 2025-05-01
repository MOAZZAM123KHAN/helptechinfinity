
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Code, Smartphone, Search, Mail } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Stars } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";
import { Suspense, lazy } from "react";

// Fallback heading for mobile or when 3D component is loading
const ServicesHeadingFallback = () => {
  return (
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-center text-white my-4 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      OUR SERVICES
    </motion.h2>
  );
};

const services = [
  {
    title: "Web Development",
    description: "Custom-built responsive websites and web applications designed to meet your business needs and impress your customers",
    icon: Code,
    color: "#6366f1",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences",
    icon: Smartphone,
    color: "#818cf8",
  },
  {
    title: "SEO Optimization",
    description: "Comprehensive search engine optimization strategies to improve visibility and drive targeted traffic to your website",
    icon: Search,
    color: "#1e293b",
  },
  {
    title: "Email Marketing",
    description: "Effective email campaigns that engage your audience, nurture leads, and drive conversions for your business",
    icon: Mail,
    color: "#38bdf8",
  },
];

export const ServicesSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <ServicesHeadingFallback />
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            We offer a comprehensive range of digital solutions to help your business grow
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
      
      {/* Background animated particles - only show on non-mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.1} />
              <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={0.5} />
              <OrbitControls enableZoom={false} enablePan={false} enableRotate enableDamping dampingFactor={0.05} />
            </Canvas>
          </Suspense>
        </div>
      )}
    </section>
  );
};

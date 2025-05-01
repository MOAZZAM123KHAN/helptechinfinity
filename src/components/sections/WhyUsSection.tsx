
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, OrbitControls } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";

const WhyUsHeadingFallback = () => {
  return (
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      WHY CHOOSE US
    </motion.h2>
  );
};

const WhyUsHeading = () => {
  return (
    <Canvas style={{ height: "120px" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={1.2}
          height={0.2}
          position={[-3, 0, 0]}
        >
          Why Choose Us
          <meshStandardMaterial color="#6366f1" />
        </Text3D>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

const ReasonBox = ({ rotate = false }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh rotation={rotate ? [0.1, 0.1, 0] : [0, 0, 0]}>
        <boxGeometry args={[3.8, 2, 0.2]} />
        <meshStandardMaterial 
          color="#1e293b" 
          metalness={0.5} 
          roughness={0.5} 
          emissive="#6366f1"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

export const WhyUsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="why-us" className="py-20 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <WhyUsHeadingFallback />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
          {[
            { title: "Expert Team", desc: "Skilled professionals with years of industry experience" },
            { title: "Modern Solutions", desc: "Using latest technologies and best practices" },
            { title: "Dedicated Support", desc: "24/7 customer support and maintenance" }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="p-8 rounded-lg border border-gray-800 shadow-lg relative h-64 flex flex-col justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 z-0">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <ReasonBox rotate={index % 2 === 0} />
                  <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                </Canvas>
              </div>
              <Parallax speed={3} translateY={[-10, 10]}>
                <h3 className="text-xl font-bold mb-4 text-white z-10 relative">{item.title}</h3>
                <p className="text-gray-400 z-10 relative">{item.desc}</p>
              </Parallax>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

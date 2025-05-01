
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";
import { Suspense } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

// Simple Icon component as fallback for mobile
const SimpleIcon = ({ Icon, color }: { Icon: LucideIcon, color: string }) => {
  return (
    <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full" style={{ backgroundColor: color }}>
      <Icon className="w-6 h-6 text-white" />
    </div>
  );
};

// 3D Icon component for desktop
const Icon3D = ({ Icon, color }: { Icon: LucideIcon, color: string }) => {
  return (
    <div className="w-16 h-16 mb-4">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <mesh>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={3}
        />
      </Canvas>
      <div className="relative -mt-12 ml-4 z-10">
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export const ServiceCard = ({ title, description, icon: Icon, color = "#6366f1" }: ServiceCardProps) => {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // Skip tilt effect on mobile
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    
    setTiltX(tiltX);
    setTiltY(tiltY);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={{
          transform: !isMobile ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` : 'none',
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm border border-gray-200/50 h-full">
          <CardHeader>
            <div style={{ transform: !isMobile ? "translateZ(20px)" : "none" }}>
              {isMobile ? (
                <SimpleIcon Icon={Icon} color={color} />
              ) : (
                <Suspense fallback={<SimpleIcon Icon={Icon} color={color} />}>
                  <Icon3D Icon={Icon} color={color} />
                </Suspense>
              )}
              <CardTitle>{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600" style={{ transform: !isMobile ? "translateZ(20px)" : "none" }}>{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};


import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
  bio?: string;
  skills?: string[];
  experience?: string;
  email?: string;
}

const TeamBox = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[2.7, 3.7, 0.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </mesh>
    </Float>
  );
};

export const TeamMember = ({ 
  name, 
  role, 
  image, 
  delay = 0,
  bio = "A talented professional with expertise in various aspects of digital technology and design.",
  skills = ["JavaScript", "React", "UI/UX Design"],
  experience = "5+ years of industry experience",
  email = "contact@example.com"
}: TeamMemberProps) => {
  const [hovered, setHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="flex flex-col items-center p-8 relative cursor-pointer group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setDialogOpen(true)}
      >
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} />
            <TeamBox />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={hovered} autoRotateSpeed={4} />
          </Canvas>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.08, z: 10 }}
          className="mb-6 z-10 mt-4"
        >
          <Avatar className="w-36 h-36 border-4 border-purple-500 shadow-lg shadow-purple-500/20">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
        </motion.div>
        <h3 className="text-2xl font-semibold mb-2 text-white z-10">{name}</h3>
        <p className="text-purple-300 z-10 text-lg">{role}</p>
        <div className="text-sm bg-purple-500 mt-4 z-10 px-4 py-2 rounded-full text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-y-2 group-hover:translate-y-0">Click for details</div>
      </motion.div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-gray-900 text-white border border-purple-500/20 shadow-xl shadow-purple-500/10 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl text-purple-400 font-bold flex items-center gap-3">
              <Users className="h-7 w-7" /> {name}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <div className="flex justify-center items-start">
              <Avatar className="w-44 h-44 border-4 border-purple-500 shadow-lg shadow-purple-500/20">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">{role}</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{bio}</p>
              
              <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Experience</h4>
              <p className="text-gray-300 text-lg">{experience}</p>
              
              <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Contact</h4>
              <p className="text-gray-300 text-lg hover:text-purple-400 transition-colors duration-200">{email}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

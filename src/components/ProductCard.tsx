
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Package } from "lucide-react";

interface ProductDetails {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  releaseDate: string;
}

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  details: ProductDetails;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  details
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-full"
      >
        <motion.div
          style={{
            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transformStyle: "preserve-3d"
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="h-full"
        >
          <Card className="hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 h-full flex flex-col">
            <CardHeader className="pb-4">
              <div style={{ transform: "translateZ(30px)" }} className="flex items-center justify-center mb-6">
                <div className="rounded-full bg-gradient-to-tr from-indigo-700 to-purple-600 p-4 shadow-lg shadow-purple-500/20">
                  <Package size={30} className="text-white" />
                </div>
              </div>
              <CardTitle className="text-white text-center text-2xl" style={{ transform: "translateZ(30px)" }}>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col pt-2">
              <p className="text-gray-300 mb-8 text-center text-lg" style={{ transform: "translateZ(30px)" }}>{description}</p>
              <div className="mt-auto flex justify-center" style={{ transform: "translateZ(30px)" }}>
                <Button 
                  onClick={() => setIsOpen(true)} 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-6 py-5 text-lg"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl bg-gray-900 text-white border border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-400">{details.title}</DialogTitle>
            <DialogDescription className="text-lg mt-2 text-gray-300">
              {details.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Key Features</h3>
            <ul className="space-y-3">
              {details.features.map((feature, index) => (
                <li key={index} className="flex items-start bg-purple-900/20 p-3 rounded-lg">
                  <Check className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="border border-purple-500/20 rounded-lg p-5 bg-purple-900/10">
              <h3 className="text-sm font-medium text-purple-300 mb-2">Pricing</h3>
              <p className="text-xl font-semibold text-white">{details.pricing}</p>
            </div>
            <div className="border border-purple-500/20 rounded-lg p-5 bg-purple-900/10">
              <h3 className="text-sm font-medium text-purple-300 mb-2">Availability</h3>
              <p className="text-xl font-semibold text-white">{details.releaseDate}</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white"
              size="lg"
            >
              Request Demo
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

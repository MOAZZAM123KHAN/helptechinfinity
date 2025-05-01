
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type FeatureCardProps = {
  title: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
  onClick?: () => void;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  backgroundColor,
  onClick,
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={`${backgroundColor} rounded-3xl p-6 md:p-10 flex flex-col justify-between h-full`}
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{title}</h2>
        <p className="text-base md:text-lg mb-6 md:mb-8">{description}</p>
      </div>
      <div>
        <Button 
          onClick={onClick} 
          className="bg-black text-white hover:bg-gray-800 font-medium rounded-full w-full md:w-auto"
        >
          {buttonText}
          <ArrowRight className="ml-2" size={isMobile ? 16 : 18} />
        </Button>
      </div>
    </div>
  );
};

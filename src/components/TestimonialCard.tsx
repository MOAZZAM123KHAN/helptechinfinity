
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  testimonial: string;
  rating: number;
  avatarUrl?: string;
  imageAlt?: string;
}

export const TestimonialCard = ({
  name,
  company,
  testimonial,
  rating,
  avatarUrl,
  imageAlt,
}: TestimonialCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        <blockquote className="text-gray-700 italic mb-6 flex-grow">
          "{testimonial}"
        </blockquote>
        
        <div className="flex items-center mt-auto">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={avatarUrl} alt={imageAlt || name} />
            <AvatarFallback className="bg-primary/20">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

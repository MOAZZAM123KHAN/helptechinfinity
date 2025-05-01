
import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { TestimonialCard } from '@/components/TestimonialCard';
import { useIsMobile } from "@/hooks/use-mobile";

// Fallback heading for mobile or when 3D component is loading
const TestimonialsHeadingFallback = () => {
  return (
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-center my-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      CLIENT TESTIMONIALS
    </motion.h2>
  );
};

export const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Tech Innovators',
      testimonial: 'Working with DigitalEdge transformed our online presence. Their team delivered a stunning website that exceeded our expectations and significantly improved our conversion rate.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'GrowthFirst Marketing',
      testimonial: 'The mobile app developed by DigitalEdge has been a game-changer for our business. User engagement increased by 45% within the first month after launch.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'InnovateNow',
      testimonial: 'Their SEO expertise helped us climb to the first page of search results for our key terms. Highly professional and responsive throughout the entire process.',
      rating: 4,
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'FutureBrand',
      testimonial: "DigitalEdge consistently delivers high-quality work on time and within budget. Their team's attention to detail makes them our go-to digital partner.",
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Olivia Martinez',
      company: 'Elevate Solutions',
      testimonial: 'The digital marketing strategy DigitalEdge created for us has doubled our leads. Their data-driven approach and creativity are exceptional.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <TestimonialsHeadingFallback />
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Don't just take our word for it. See what our clients have to say about working with us.
          </motion.p>
        </div>
        
        <div className="px-4 md:px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                  >
                    <TestimonialCard {...testimonial} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="left-0 md:-left-4" />
              <CarouselNext className="right-0 md:-right-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

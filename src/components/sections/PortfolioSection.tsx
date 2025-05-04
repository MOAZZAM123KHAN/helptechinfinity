
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Archive, LinkIcon, View } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string[];
  demoLink: string;
  featured: boolean;
}

const PortfolioHeadingFallback = () => {
  return (
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      OUR PORTFOLIO
    </motion.h2>
  );
};

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern online shopping experience with integrated payment processing and inventory management.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500", 
      category: ["web", "frontend"],
      demoLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Real-time analytics dashboard for financial data visualization and portfolio management.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
      category: ["dashboard", "data"],
      demoLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Mobile-first social platform with real-time messaging and content sharing capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=500",
      category: ["mobile", "frontend"],
      demoLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Smart content generation tool powered by machine learning algorithms.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500",
      category: ["ai", "web"],
      demoLink: "#",
      featured: true
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description: "Comprehensive solution for managing patient records and streamlining healthcare operations.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      category: ["enterprise", "dashboard"],
      demoLink: "#",
      featured: false
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Interactive platform for online courses with progress tracking and assessment tools.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500",
      category: ["education", "web"],
      demoLink: "#",
      featured: false
    }
  ];

  const filters = [
    { value: "all", label: "All" },
    { value: "web", label: "Web Apps" },
    { value: "mobile", label: "Mobile" },
    { value: "dashboard", label: "Dashboards" },
    { value: "ai", label: "AI Solutions" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-blue to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <PortfolioHeadingFallback />
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore our latest projects and see what we can do for you
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map(filter => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="px-2 md:px-6 lg:px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredProjects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110" 
                        />
                        {project.featured && (
                          <Badge className="absolute top-2 right-2 bg-primary/90" variant="default">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.category.map((cat, index) => (
                            <Badge key={index} variant="outline" className="text-xs bg-gray-100">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <CardDescription className="text-sm text-gray-600">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-0">
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={project.demoLink}>
                            <View className="mr-1 h-4 w-4" />
                            Preview
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <LinkIcon className="mr-1 h-4 w-4" />
                          Details
                        </Button>
                      </CardFooter>
                    </Card>
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
        
        <div className="text-center mt-10">
          <Button variant="default" size="lg" className="rounded-full px-8" asChild>
            <Link to="/portfolio">
              <Archive className="mr-2 h-4 w-4" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};


import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { LinkIcon, View } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string[];
  demoLink: string;
  featured: boolean;
}

const PortfolioPage = () => {
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
    },
    {
      id: 7,
      title: "Project Management Tool",
      description: "Comprehensive solution for tracking projects, tasks, and team collaboration.",
      imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=500",
      category: ["web", "enterprise"],
      demoLink: "#",
      featured: false
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      description: "Mobile application for tracking workouts, nutrition, and health metrics.",
      imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=500",
      category: ["mobile", "health"],
      demoLink: "#",
      featured: false
    },
    {
      id: 9,
      title: "Real Estate Platform",
      description: "Property listing and management system with advanced search capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=500",
      category: ["web", "enterprise"],
      demoLink: "#",
      featured: false
    }
  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Apps" },
    { value: "mobile", label: "Mobile" },
    { value: "dashboard", label: "Dashboards" },
    { value: "ai", label: "AI Solutions" },
    { value: "enterprise", label: "Enterprise" },
    { value: "education", label: "Education" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Portfolio
            </motion.h1>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our diverse range of projects showcasing our expertise in web development, 
              mobile applications, and enterprise solutions.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
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
            ))}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;

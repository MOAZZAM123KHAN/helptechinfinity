
import { motion } from "framer-motion";
import { TeamMember } from "@/components/TeamMember";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D } from "@react-three/drei";
import { Suspense, lazy } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Fallback component for mobile or when the 3D component is loading
const TeamHeadingFallback = () => {
  return (
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-center text-Bolue my-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      OUR TEAM MEMBERS
    </motion.h2>
  );
};

// Lazy load the 3D heading component
const TeamHeading3D = lazy(() => import("@/components/3D/TeamHeading3D"));

export const TeamSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="team" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <TeamHeadingFallback />
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet the talented professionals behind our success
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-12">
          <TeamMember
            name="Mohammad Wakeel"
            role="Lead Developer"
            image="\Team\1702490806822.jpg"
            delay={0.1}
            bio="Mohammad Wakeel is our lead developer with over 8 years of experience in building scalable web applications. He specializes in frontend architecture and has led multiple successful projects."
            skills={["JavaScript", "React", "Node.js", "System Architecture"]}
            experience="8+ years in full-stack development"
            //email="john.smith@example.com"
          />
           <TeamMember
            name="Mo Moazzam Khan"
            role="Full-Stack Developer"
            image="\Team\moazzam.png"
            delay={0.1}
            bio=" Mo Moazzam is our Full-Stack Developer with over 2+ years of experience in building scalable web applications. He specializes in frontend architecture and has led multiple successful projects."
            skills={["html","CSS","JavaScript", "React", "Node.js", "System Architecture" , "NextJS " ," GraphQL", "MongoDB" ," AWS", "Docker"]}
            experience="2+ years in full-stack development"
            email="moazzam575khan@gmail.com"
          />
          <TeamMember
            name="Aasif Ali"
            role="Backend Developer"
            image="\Team\asif.jpg"
            delay={0.2}
            bio="Asif has a As a seasoned Backend Java Developer, I weave intricate solutions from threads of code, crafting scalable, efficient, and robust systems that power digital innovation. With expertise in Java, Spring, and cloud technologies, I help businesses thrive in the digital landscape."
            skills={["Java | SpringBoot & Microservices | Restful Web Services | Hibernate & JPA | Junit & Mokito | Tomcat Deployment | Apache Kafka | MySQL | MongoDB | GitHub"]}
            experience="3+ years in digital design"
            // email="sarah.johnson@example.com"
          />
          <TeamMember
            name="Mohammad Danish"
            role="Project Manager"
            image="/photo-1581092795360-fd1ca04f0952"
            delay={0.3}
            bio="Mohammad Danish ensures our projects are delivered on time and within scope. With his strategic planning and team coordination skills, he keeps the development process smooth and efficient."
            skills={["Agile Methodology", "Team Leadership", "Strategic Planning"]}
            experience="7+ years in project management"
            //email="mike.wilson@example.com"
          />
           <TeamMember
            name="Sarthak Raj"
            role="Data Engeenior"
            image="\Team\sarthak.jpg"
            delay={0.3}
            bio=" Enthusiastic Data Engineer Trainee specializing in ETL, Informatica, SQL, and seamless data migration. 💼 Open to networking and exploring opportunities in data engineering. 💡 Passionate about optimizing workflows and staying ahead of industry trends. Let's connect and explore the endless possibilities of data together"
            skills={["Data Scrapping ", "Python", "AWS","Extract Transform Load (ETL)","Data Leak"]}
            experience="3+ years in Data Engeering"
            //email="mike.wilson@example.com"
          />
        </div>
      </div>
    </section>
  );
};

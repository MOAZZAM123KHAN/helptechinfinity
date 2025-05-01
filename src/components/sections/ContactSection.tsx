
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { useIsMobile } from "@/hooks/use-mobile";

export const ContactSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            GET IN TOUCH WITH US
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to start your project? Reach out to our team for a free consultation
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-5 md:p-8 rounded-xl shadow-lg border border-white/10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

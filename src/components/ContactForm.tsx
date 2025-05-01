
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MessageSquare, Briefcase, User } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  workType: z.string().min(1, { message: "Please select a work type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [typingText, setTypingText] = useState("");
  const fullText = "Let's build something amazing...";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      workType: "",
      message: "",
    },
  });

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    }, 1000);
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <>
      <motion.h3 
        className="text-2xl font-bold mb-6 text-primary relative inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {typingText}
        <span className="animate-pulse ml-1">|</span>
      </motion.h3>
      
      <Form {...form}>
        <motion.form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-4"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white/70 rounded-md backdrop-blur-sm px-3 border border-gray-100">
            <User className="text-gray-400" size={18} />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Your Name" {...field} className="border-0 bg-transparent focus:ring-0 focus-visible:ring-0 px-0" />
                  </FormControl>
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white/70 rounded-md backdrop-blur-sm px-3 border border-gray-100">
            <Mail className="text-gray-400" size={18} />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input type="email" placeholder="Your Email" {...field} className="border-0 bg-transparent focus:ring-0 focus-visible:ring-0 px-0" />
                  </FormControl>
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white/70 rounded-md backdrop-blur-sm px-3 border border-gray-100">
            <Phone className="text-gray-400" size={18} />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input type="tel" placeholder="Your Contact Number" {...field} className="border-0 bg-transparent focus:ring-0 focus-visible:ring-0 px-0" />
                  </FormControl>
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="workType"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full backdrop-blur-sm bg-white/70 border-gray-100 flex items-center gap-2">
                      <Briefcase className="text-gray-400" size={18} />
                      <SelectValue placeholder="Select Work Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                      <SelectItem value="seo">SEO Services</SelectItem>
                      <SelectItem value="email">Email Marketing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex gap-2 bg-white/70 rounded-md backdrop-blur-sm px-3 py-2 border border-gray-100">
            <MessageSquare className="text-gray-400 mt-1" size={18} />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea placeholder="Your Message" {...field} className="min-h-[120px] border-0 bg-transparent focus:ring-0 focus-visible:ring-0 px-0 resize-none" />
                  </FormControl>
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
          </motion.div>
        </motion.form>
      </Form>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="text-xl font-semibold mb-4 text-gray-700">Contact Us Directly</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-green-500/10 hover:bg-green-500/20 text-green-700 rounded-lg transition-all duration-300"
          >
            <div className="bg-green-500 text-white p-2 rounded-full">
              <MessageSquare size={20} />
            </div>
            <div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm">+1 (234) 567-890</div>
            </div>
          </a>
          
          <a
            href="https://t.me/digitaledge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 rounded-lg transition-all duration-300"
          >
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <MessageSquare size={20} />
            </div>
            <div>
              <div className="font-semibold">Telegram</div>
              <div className="text-sm">@digitaledge</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

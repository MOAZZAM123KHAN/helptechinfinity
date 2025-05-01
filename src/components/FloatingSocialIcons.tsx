
import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingSocialIcons = () => {
  const iconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex gap-6 justify-center mt-6">
      {[
        { Icon: Mail, href: "mailto:contact@sparktech.com", label: "Email" },
        { Icon: MessageSquare, href: "https://wa.me/1234567890", label: "WhatsApp" },
        { Icon: MessageSquare, href: "https://t.me/digitaledge", label: "Telegram" },
      ].map(({ Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 hover:border-primary/20"
          variants={iconVariants}
          whileHover="hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-6 h-6 text-gray-600 hover:text-primary transition-colors" />
        </motion.a>
      ))}
    </div>
  );
};

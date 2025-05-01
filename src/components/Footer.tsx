
import { Github, Globe, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

export const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">Get in touch with DigitalEdge</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Services Column */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-3">
              <li><a href="/services/web" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="/services/mobile" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="/services/seo" className="hover:text-primary transition-colors">SEO Services</a></li>
              <li><a href="/services/email" className="hover:text-primary transition-colors">Email Marketing</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/team" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="/guides" className="hover:text-primary transition-colors">Guides</a></li>
              <li><a href="/tools" className="hover:text-primary transition-colors">Free Tools</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">CONNECT</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://twitter.com" className="flex items-center hover:text-primary transition-colors">
                  Twitter <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="flex items-center hover:text-primary transition-colors">
                  LinkedIn <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" className="flex items-center hover:text-primary transition-colors">
                  Facebook <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="flex items-center hover:text-primary transition-colors">
                  Instagram <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-gray-800 rounded-t-3xl bg-white/5 flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
          <div className="font-bold text-xl md:text-2xl mb-4 md:mb-0">DigitalEdge</div>
          <div className="flex items-center">
            <Globe className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            <span>DIGITALEDGE.COM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

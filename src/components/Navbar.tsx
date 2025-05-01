import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-black/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl sm:text-2xl flex items-center">
            <Link to="/" className="flex items-center">
              <div className="mr-2">
                <div className="h-6 w-6 bg-gradient-to-r from-green-400 to-purple-500 rounded"></div>
              </div>
              <span>DIGITALEDGE</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                            to="/"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Digital Solutions
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Comprehensive digital services to grow your business
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/services/web" title="Web Development">
                        Custom websites and web applications
                      </ListItem>
                      <ListItem href="/services/mobile" title="Mobile Apps">
                        iOS and Android applications
                      </ListItem>
                      <ListItem href="/services/seo" title="SEO Services">
                        Improve your search rankings
                      </ListItem>
                      <ListItem href="/services/email" title="Email Marketing">
                        Effective email campaigns
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#portfolio" className="text-white hover:text-gray-300 transition-colors px-3 py-2">
                    Portfolio
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#about" className="text-white hover:text-gray-300 transition-colors px-3 py-2">
                    About
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#testimonials" className="text-white hover:text-gray-300 transition-colors px-3 py-2">
                    Testimonials
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#contact" className="text-white hover:text-gray-300 transition-colors px-3 py-2">
                    Contact
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="block px-3 py-2 text-white">
              <div className="flex justify-between items-center">
                <span>Services</span>
                <ChevronDown size={16} />
              </div>
            </div>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Link
              to="/marketing"
              className="block px-3 py-2 text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketing
            </Link>
            <Link
              to="/mobile-apps"
              className="block px-3 py-2 text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Mobile Apps
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// ListItem component for navigation dropdowns
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

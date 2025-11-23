import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ["home", "about", "services", "portfolio", "team", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass backdrop-blur-xl border-b border-[#00d4ff]/20 shadow-2xl" 
          : "bg-transparent"
      }`}
      style={{
        boxShadow: isScrolled ? "0 0 30px rgba(0, 212, 255, 0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick("#home", "home")}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff] via-[#b026ff] to-[#ff00ff] flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 neon-glow-blue"
            >
              <span className="text-white font-bold text-lg">F</span>
            </motion.div>
            <div>
              <div className={`font-bold tracking-tight text-lg transition-colors ${
                isScrolled ? "text-white" : "text-white"
              }`}>
                Facto Technologies Pvt Ltd
              </div>
              <div className={`text-xs transition-colors ${
                isScrolled ? "text-gray-400" : "text-gray-300"
              }`}>
                Factoit.com
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? "text-[#00d4ff] bg-[#00d4ff]/10 neon-glow-blue border border-white/20"
                    : "text-white hover:text-[#00d4ff] hover:bg-[#00d4ff]/5 border border-transparent hover:border-white/10"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#ff00ff] rounded-full"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
            <ThemeToggle />
            <Button
              onClick={() => handleNavClick("#contact", "contact")}
              className="bg-gradient-to-r from-[#00d4ff] to-[#b026ff] hover:from-[#00ffff] hover:to-[#ff00ff] text-white rounded-lg px-6 ml-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 neon-glow-blue"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-[#00d4ff]/20 glass"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`block w-full text-left px-4 py-3 transition-colors rounded-lg mb-2 ${
                  activeSection === item.id
                    ? "text-[#00d4ff] bg-[#00d4ff]/10 neon-glow-blue"
                    : "text-gray-300 hover:text-[#00d4ff] hover:bg-[#00d4ff]/5"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-3 flex items-center gap-2">
              <ThemeToggle />
              <Button
                onClick={() => handleNavClick("#contact", "contact")}
                className="flex-1 bg-gradient-to-r from-[#00d4ff] to-[#b026ff] text-white rounded-lg"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
  
      const sections = ["hero", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/Anvisha-Singh",
      label: "GitHub"
    },
    {
      Icon: FaLinkedin,
      href: "https://linkedin.com/in/anvisha-singh",
      label: "LinkedIn"
    },
    {
      Icon: FaEnvelope,
      href: "mailto:anvishasingh2905@gmail.com",
      label: "Email"
    }
  ];

  return (
   <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className={`fixed w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-slate-900/40 backdrop-blur-xl shadow-md" // Glassy background, remove border
      : "bg-transparent"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="w-10" />

          
          <div className="hidden md:flex gap-2 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-6 py-2 text-base font-medium transition-colors duration-300 group"
              >
               
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-teal-400"
                    : "text-slate-300 group-hover:text-teal-400"
                }`}>
                  {link.name}
                </span>

               
                <AnimatePresence>
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-slate-800/50 rounded-lg border border-teal-400/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 
                  transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          
          <div className="flex gap-4 items-center">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg
                  border border-slate-700 bg-slate-800/50 text-slate-400
                  transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
               
                <Icon className="relative z-10 text-lg group-hover:text-teal-400 transition-colors duration-300" />
                
               
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Border glow on hover */}
                <span className="absolute inset-0 rounded-lg border border-teal-400/0 
                  group-hover:border-teal-400/50 transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </motion.nav>
  );
}
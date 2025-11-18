import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-slate-900 bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-white font-bold text-xl">Anvisha Singh</div>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-teal-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

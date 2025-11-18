import { motion } from "framer-motion";
import { FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiGoland, SiPython, SiTypescript } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-4 
      bg-gradient-to-b from-slate-900 to-slate-800"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold text-slate-100 tracking-tight"
      >
        Anvisha Singh
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-slate-400 mt-3 mb-12 max-w-xl"
      >
        Full-Stack Developer · Oracle Alumni · MS Computer Science
      </motion.p>

      {/* Tech icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex items-center justify-center gap-8 text-3xl text-slate-400 mb-14"
      >
        <FaReact className="hover:text-teal-300 transition duration-300" />
        <SiGoland className="hover:text-teal-300 transition duration-300" />
        <SiPython className="hover:text-teal-300 transition duration-300" />
        <SiTypescript className="hover:text-teal-300 transition duration-300" />
        <FaAws className="hover:text-teal-300 transition duration-300" />
        <FaDocker className="hover:text-teal-300 transition duration-300" />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="/resume.pdf"  
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-medium bg-gray-700 hover:bg-gray-600 
          text-white transition duration-300 hover:text-teal-300"
        >
          Resume
        </a>
      </motion.div>
    </section>
  );
}

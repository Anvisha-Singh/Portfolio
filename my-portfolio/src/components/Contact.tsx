import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:anvishasingh2905@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "anvishasingh2905@gmail.com",
      href: "mailto:anvishasingh2905@gmail.com",
      color: "from-teal-400 to-cyan-400"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "anvisha-singh",
      href: "https://www.linkedin.com/in/anvisha-singh-1a201b217/",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Anvisha-Singh",
      href: "https://github.com/Anvisha-Singh",
      color: "from-slate-400 to-slate-600"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col items-center relative overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(94, 234, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(94, 234, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-56 h-56 bg-teal-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            I'm actively seeking full-time opportunities in software development.
            Let's discuss how I can contribute to your team!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4 text-slate-200">
              Get In Touch
            </h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="text-xl text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-400 mb-1">{method.label}</p>
                  <p className="text-white font-medium group-hover:text-teal-400 transition-colors">
                    {method.value}
                  </p>
                </div>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -6 }}
                  whileHover={{ x: 0 }}
                >
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-br from-teal-400/10 to-blue-400/10 border border-teal-400/20"
            >
              <h4 className="text-sm font-semibold mb-2 text-teal-400">Quick Response</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                I typically respond within 24 hours. For urgent inquiries, feel free to reach out via email directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-slate-200">
                Send a Message
              </h3>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-slate-900/50 text-white border border-slate-700 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 placeholder-slate-500"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-slate-900/50 text-white border border-slate-700 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 placeholder-slate-500"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                className="w-full p-3 rounded-lg bg-slate-900/50 text-white border border-slate-700 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 placeholder-slate-500 resize-none"
                required
              />

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-teal-400/20 hover:shadow-teal-400/40"
              >
                Send Message <FaPaperPlane />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12 text-slate-500 text-sm"
        >
          Built with React, TypeScript, and Tailwind CSS • Designed with passion ✨
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiGoland, SiPython, SiTypescript } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 80;
    const connectionDistance = 150;

    class ParticleClass implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(94, 234, 212, 0.5)";
        context.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleClass());
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(94, 234, 212, ${
              0.2 * (1 - distance / connectionDistance)
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  const techIcons = [
    { Icon: FaReact, delay: 0 },
    { Icon: SiGoland, delay: 0.6 },
    { Icon: SiPython, delay: 1.2 },
    { Icon: SiTypescript, delay: 1.8 },
    { Icon: FaAws, delay: 2.4 },
    { Icon: FaDocker, delay: 3 },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20
      bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Particle Network Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(94, 234, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(94, 234, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Center Glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-40 h-40 rounded-full bg-teal-400 blur-3xl opacity-30" />
        </motion.div>
       
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          style={{
            background:
               "linear-gradient(90deg, #5eead4, #06b6d4, #3b82f6, #38bdf8, #5eead4)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradient 8s linear infinite",
          }}
        >
          Anvisha Singh
        </motion.h1>

        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 mt-3 mb-6 max-w-xl mx-auto"
        >
          MS in CS | Full-Stack Developer | Oracle Alumni
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12 px-4"
        >
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Backend engineer with experience at Oracle, focused on building scalable distributed systems 
            and optimizing performance. I solve complex technical problems and deliver reliable infrastructure 
            that drives business impact.
          </p>
        </motion.div>

      
        <div className="relative w-64 h-64 mx-auto mb-8">
          {techIcons.map(({ Icon, delay }, index) => {
            const angle = (index / techIcons.length) * 2 * Math.PI;
            const radius = 100;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{ left: "50%", top: "50%" }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: Math.cos(angle) * radius - 20,
                  y: Math.sin(angle) * radius - 20,
                }}
                transition={{ delay: delay * 0.2, duration: 0.8 }}
              >
                <motion.div
                  className="text-3xl text-teal-400 hover:text-teal-300 cursor-pointer hover:scale-125 filter drop-shadow-lg"
                  whileHover={{ scale: 1.3 }}
                >
                  <Icon />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

       
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-3 rounded-lg font-medium 
              bg-gradient-to-r from-teal-500 to-blue-500 text-white transition duration-300 
              group overflow-hidden hover:shadow-lg hover:shadow-teal-500/50"
            >
              <span className="relative z-10 group-hover:scale-105 inline-block transition duration-300">
                View Resume
              </span>
            </a>
            
            <a
              href="#projects"
              className="relative inline-block px-8 py-3 rounded-lg font-medium 
              bg-slate-800 text-teal-400 transition duration-300 
              group overflow-hidden border border-teal-400/50 hover:bg-slate-700"
            >
              <span className="relative z-10 group-hover:scale-105 inline-block transition duration-300">
                See My Work
              </span>
            </a>
          </div>
        </motion.div>

      
        <motion.div
          className="absolute -left-20 top-20 text-xs text-teal-400/20 font-mono"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
          {`const dev = {`}
          <br />
          {`  skills: ['React', 'Go']`}
          <br />
          {`}`}
        </motion.div>

        <motion.div
          className="absolute -right-20 bottom-40 text-xs text-blue-400/20 font-mono"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
          }}
        >
          {`function build() {`}
          <br />
          {`  return <App />`}
          <br />
          {`}`}
        </motion.div>
      </div>

      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(transparent 0%, rgba(94, 234, 212, 0.03) 50%, transparent 100%)",
          height: "100px",
        }}
      />

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </section>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

type Project = {
  name: string;
  stack: string;
  period: string;
  description: string[];
  github?: string;
};

const projectsData: Project[] = [
  {
    name: "Full-Stack Housing App",
    stack: "React, Go, NLP",
    period: "Jan 2025 – May 2025",
    description: [
      "Built and deployed a full-stack web app for 1000+ users to find housing and roommates via personalized filters, Google Maps integration, and NLP-powered property summaries.",
      "Developed scalable Go APIs, React UI, secure authentication, and a custom matchmaking algorithm to enable real-time search, favorites, and profile management.",
    ],
    github: "https://github.com/Anvisha-Singh/fullstack-housing-app",
  },
  {
    name: "Reddit Clone",
    stack: "Go, ProtoActor, Rest API",
    period: "Oct 2024 – Dec 2024",
    description: [
      "Built a scalable, multi-process Reddit-like engine simulating thousands of users efficiently managing user interactions.",
      "Optimized MongoDB queries to handle 1,000+ requests/sec, reducing response latency by 20%.",
    ],
    github: "https://github.com/Anvisha-Singh/reddit-clone",
  },
  {
    name: "Gossip Algorithm",
    stack: "Pony, Distributed Systems",
    period: "Jan 2021 – Mar 2021",
    description: [
      "Implemented a fault-tolerant gossip protocol using Pony’s actor model, distributing tasks across 8 CPU cores to achieve parallelism.",
      "Enhanced CPU utilization by 25% and ensured efficient convergence in a 100-node network.",
    ],
    github: "https://github.com/Anvisha-Singh/gossip-algo",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    (project) =>
      filter === "All" ||
      project.stack.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="projects" className="py-16 px-4 bg-slate-800 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["All", "React", "Go", "Distributed Systems", "Pony", "NLP"].map(
          (f) => (
            <button
              key={f}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === f
                  ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white"
                  : "bg-slate-700 text-slate-200 hover:bg-slate-600"
              }`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          )
        )}
      </div>

      {/* Project cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(14, 165, 233, 0.5)",
            }}
            className="bg-gradient-to-br from-slate-900/70 to-slate-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-2">
              {project.stack.split(",").map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

            <p className="text-slate-300 mb-4">{project.period}</p>

            <ul className="list-disc list-inside space-y-1 mb-4 text-slate-200">
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 mt-2 text-teal-400 font-semibold hover:underline"
              >
                <FaGithub /> Code
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

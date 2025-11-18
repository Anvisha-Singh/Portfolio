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
    stack: "React, Go",
    period: "Jan 2025 – May 2025",
    description: [
     "Developed an end-to-end housing marketplace with React frontend and Go backend APIs, featuring Google Maps integration, real-time filtering across 5,000+ listings, and ML-based property summarization.",
    "Engineered a custom matchmaking algorithm using weighted scoring across lifestyle, budget, and location preferences, with OAuth2 authentication and RESTful API design supporting 500+ daily active users.",
    ],
    github: "https://github.com/Kamehamehaaaaa/UF-NestMate.git",
  },
  {
    name: "Reddit Clone",
    stack: "Go , Rest API, Distributed Systems",
    period: "Oct 2024 – Dec 2024",
    description: [
      "Engineered a distributed Reddit platform using Go's Proto.Actor framework with actor-model programming, spawning isolated actors for users, posts, and subreddits to eliminate lock contention and enable true parallelism.",
"Designed worker pool architectures and message-passing patterns to simulate 10,000+ concurrent user operations, achieving 1,000+ req/sec with 20% lower latency through non-blocking actor communication.",
    ],
    github: "https://github.com/Anvisha-Singh/Reddit-Clone",
  },
  {
    name: "Gossip Algorithm",
    stack: "Pony, Distributed Systems",
    period: "Oct 2025 – Dec 2025",
    description: [
     "Built a fault-tolerant gossip protocol in Pony leveraging actor-model concurrency to parallelize message dissemination across 100 nodes and 8 cores, achieving 3× computation speedup",
    " Designed configurable network topologies (full, 3D grid, line, imperfect) supporting both push-sum and push-pull gossip variants for distributed consensus.",
    ],
    github: "https://github.com/Anvisha-Singh/Gossip-Protocol",
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

     
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["All", "React", "Go", "Distributed Systems", "Pony"].map(
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
            className="bg-gradient-to-br from-slate-900/70 to-slate-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg "
          >
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

           
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

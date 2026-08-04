import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.03,
      }}
      transition={{ duration: .3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-3 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">

          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
            >
              {item}
            </span>
          ))}

        </div>

        <div className="mt-7 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 transition hover:bg-cyan-500"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 transition hover:bg-cyan-400"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>
    </motion.div>
  );
}
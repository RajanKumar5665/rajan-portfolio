import { PROJECTS } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pb-24 pt-8 section-shell" ref={ref}>
      <SectionHeader
        number="03"
        label="// PROJECTS_ARCHIVE"
        title="Featured Projects"
        subtitle="Real-world MERN applications — auth, ecommerce, hiring & AI tools."
      />

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.12, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="cyber-card group overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-500/15 bg-cyan-500/5">
              <span className="font-mono text-[0.62rem] text-cyan-400 tracking-widest">
                PROJECT_{String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[0.62rem] text-stone-600">STATUS: DEPLOYED</span>
            </div>

            <div className="relative h-44 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    title="Live demo"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    title="GitHub"
                  >
                    <FaGithub size={14} />
                  </a>
                )}
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 font-mono text-[0.72rem] leading-relaxed text-stone-500 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="cyber-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Project;

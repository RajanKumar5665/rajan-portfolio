import { PROJECTS } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className='pb-24' ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='mb-16 text-center'
      >
        <motion.span
          className="inline-block text-cyan-400 font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          My Work
        </motion.span>
        <motion.h2
          className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-stone-400 bg-clip-text text-transparent'
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2"
      >
        {PROJECTS.map((project, index) => (
          <motion.article
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-gradient-to-br from-stone-900/60 to-stone-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-stone-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: 20 }}
                whileHover={{ x: 0 }}
              >
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="View Live Project"
                  >
                    <FaExternalLinkAlt size={16} />
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="View on GitHub"
                  >
                    <FaGithub size={16} />
                  </motion.a>
                )}
              </motion.div>
            </div>

            <div className="p-6">
              <motion.h3
                className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all"
              >
                {project.title}
              </motion.h3>
              <p className="text-stone-400 mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="text-xs bg-stone-800/80 hover:bg-cyan-500/20 border border-stone-700 hover:border-cyan-500/50 px-3 py-1.5 rounded-full text-stone-300 hover:text-cyan-300 transition-all cursor-default"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-0 group-hover:w-full transition-all duration-500"
            />
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}

export default Project;

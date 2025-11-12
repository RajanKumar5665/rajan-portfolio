import { EXPERIENCES } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pb-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <motion.span
          className="inline-block text-cyan-400 font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          My Journey
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-stone-400 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>
        <motion.div
          className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30" />

        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row gap-6"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/4 -translate-x-1/2 top-2">
                <motion.div
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-black shadow-lg"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                />
              </div>

              {/* Year */}
              <div className="w-full md:w-1/4 pl-12 md:pl-0 md:pr-8">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaBriefcase className="text-cyan-400" size={14} />
                  <span className="text-sm font-semibold text-cyan-300">
                    {experience.year}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                className="flex-1 pl-12 md:pl-0"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-stone-900/60 to-stone-800/40 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/10">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.1 }}
                  >
                    {experience.role}
                  </motion.h3>
                  {experience.company && (
                    <motion.p
                      className="text-cyan-400 font-semibold mb-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.2 }}
                    >
                      {experience.company}
                    </motion.p>
                  )}
                  <motion.p
                    className="text-stone-400 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {experience.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: index * 0.2 + idx * 0.1 + 0.4,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="px-3 py-1.5 rounded-full bg-stone-800/80 hover:bg-cyan-500/20 border border-stone-700 hover:border-cyan-500/50 text-sm font-medium text-stone-300 hover:text-cyan-300 transition-all cursor-default"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience;

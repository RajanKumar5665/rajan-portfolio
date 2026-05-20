import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    period: "2021 - Present",
    title: "B.Tech CSE, Budge Budge Institute of Technology",
    description:
      "Gained hands-on experience in computer science and engineering, focusing on web development, data structures, algorithms, and cloud computing architectures.",
    result: "Final Year (7.0 CGPA)",
  },
  {
    period: "Class 11th - 12th (2019 - 2021)",
    title: "Vision Academy, Patna (BSEB/Bihar Board)",
    description:
      "Prepared rigorously for JEE Main while completing board studies. Balanced core scientific principles with advanced analytical problem-solving and time management skills.",
    result: "Passed with 74% (JEE Main: 65 percentile)",
  },
  {
    period: "Class 3rd - 10th (2012 - 2019)",
    title: "Hostel Life (CBSE Board)",
    description:
      "Lived in a hostel during my formative school years, learning independence, self-discipline, and strong interpersonal communication skills.",
    result: "Passed 10th with 67% from CBSE Board",
  },
];

const Education = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  return (
    <section id="education" className="scroll-mt-24 py-16" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <span className="inline-block text-cyan-400 font-semibold mb-4">
          Learning Paths
        </span>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-stone-400 bg-clip-text text-transparent">
          Education Timeline
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
      </motion.div>

      <div className="relative max-w-3xl mx-auto pl-6 md:pl-10">
        {/* Continuous Timeline vertical line */}
        <div className="absolute left-[7px] md:left-[11px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 opacity-20" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative flex flex-col gap-2"
            >
              {/* Timeline dot/node with pulse effect */}
              <div className="absolute -left-[24px] md:-left-[34px] top-6 z-10">
                <motion.div
                  className="w-4 h-4 rounded-full bg-cyan-400 border-4 border-black shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: idx * 0.25 + 0.3, type: "spring", stiffness: 200 }}
                />
              </div>

              {/* Glassmorphic timeline card */}
              <motion.div
                whileHover={{ x: 8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group bg-gradient-to-br from-stone-900/60 to-stone-800/40 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/10 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <FaGraduationCap size={18} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400/90 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full self-start md:self-auto">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-stone-400 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {edu.result}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

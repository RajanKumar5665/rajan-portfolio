import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

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
    <section id="education" className="scroll-mt-24 py-8 pb-24 section-shell" ref={containerRef}>
      <SectionHeader
        number="04.1"
        label="// EDUCATION_DATA"
        title="Education Timeline"
        subtitle="Academic background and learning milestones."
      />

      <div className="relative max-w-3xl pl-8">
        <div className="absolute left-[4px] top-2 bottom-2 cyber-timeline-line" />

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
              <div className="absolute -left-[26px] top-7 z-10 cyber-timeline-dot" />

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
                className="cyber-card group p-5 md:p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 border border-cyan-500/30 text-cyan-400 bg-cyan-500/5">
                      <FaGraduationCap size={16} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.title}
                    </h3>
                  </div>
                  <span className="cyber-tag self-start shrink-0">{edu.period}</span>
                </div>

                <p className="font-mono text-[0.72rem] leading-relaxed text-stone-500 mb-4">
                  {edu.description}
                </p>

                <div className="cyber-tag text-emerald-400 border-emerald-500/30 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
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

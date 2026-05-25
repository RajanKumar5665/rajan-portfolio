import { EXPERIENCES } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pb-24 pt-8 section-shell" ref={ref}>
      <SectionHeader
        number="04"
        label="// EXPERIENCE_LOG"
        title="Professional Experience"
        subtitle="Education, certifications, and continuous learning journey."
      />

      <div className="relative max-w-3xl">
        <div className="absolute left-[5px] top-2 bottom-2 cyber-timeline-line" />

        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-6 cyber-timeline-dot" />

              <div className="cyber-card p-5 md:p-6 group">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="cyber-tag">{experience.year}</span>
                  <span className="font-mono text-[0.62rem] text-stone-600">
                    LOG_{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {experience.role}
                </h3>
                {experience.company && (
                  <p className="mt-1 font-mono text-xs text-cyan-400/90 tracking-wide">
                    @ {experience.company}
                  </p>
                )}
                <p className="mt-4 font-mono text-[0.72rem] leading-relaxed text-stone-500">
                  {experience.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="cyber-tag text-stone-400 border-stone-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

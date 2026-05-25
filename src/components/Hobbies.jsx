import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

const hobbies = [
  {
    title: "Playing Chess",
    description:
      "I enjoy the strategic depth and mental challenge of chess. It sharpens my problem-solving skills and helps me stay focused.",
    icon: "♟️",
    glow: "rgba(168, 85, 247, 0.15)", // Purple
    borderGlow: "group-hover:border-purple-500/40",
  },
  {
    title: "Going to the Gym",
    description:
      "Fitness is a big part of my life. Regular workouts keep me energetic, disciplined, and motivated to achieve my goals.",
    icon: "🏋️",
    glow: "rgba(239, 68, 68, 0.15)", // Red
    borderGlow: "group-hover:border-red-500/40",
  },
  {
    title: "Playing Cricket",
    description:
      "Cricket teaches me teamwork, patience, and resilience. I love the excitement and camaraderie of the game.",
    icon: "🏏",
    glow: "rgba(245, 158, 11, 0.15)", // Amber
    borderGlow: "group-hover:border-amber-500/40",
  },
  {
    title: "Listening to Music",
    description:
      "Music is my escape and inspiration. It helps me relax, focus, and fuels my creativity during work and study.",
    icon: "🎧",
    glow: "rgba(6, 182, 212, 0.15)", // Cyan
    borderGlow: "group-hover:border-cyan-500/40",
  },
];

const Hobbies = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="hobbies" className="scroll-mt-24 py-8 pb-24 section-shell" ref={containerRef}>
      <SectionHeader
        number="04.2"
        label="// HOBBIES_MODULE"
        title="Hobbies & Interests"
        subtitle="Life outside the terminal — balance fuels creativity."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
      >
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="cyber-card group relative p-6 flex flex-col items-center text-center"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${hobby.glow}, transparent 70%)`,
              }}
            />

            <motion.div
              className="text-4xl mb-4 relative z-10 select-none"
              whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.4 }}
            >
              {hobby.icon}
            </motion.div>

            <h3 className="font-display text-base font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors relative z-10">
              {hobby.title}
            </h3>

            <p className="font-mono text-[0.68rem] leading-relaxed text-stone-500 relative z-10">
              {hobby.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hobbies;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    <section id="hobbies" className="scroll-mt-24 py-16" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <span className="inline-block text-cyan-400 font-semibold mb-4">
          Life Outside Coding
        </span>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-stone-400 bg-clip-text text-transparent">
          Hobbies & Interests
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
      </motion.div>

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
            className={`group relative bg-gradient-to-br from-stone-900/60 to-stone-800/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center border border-stone-800/80 ${hobby.borderGlow} transition-all duration-300 shadow-lg hover:shadow-2xl`}
          >
            {/* Custom glowing background behind the hobby card */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${hobby.glow}, transparent 70%)`,
              }}
            />

            {/* Hover floating emoji */}
            <motion.div
              className="text-5xl mb-6 relative z-10 select-none cursor-default"
              whileHover={{ scale: 1.25, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              {hobby.icon}
            </motion.div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors relative z-10">
              {hobby.title}
            </h3>
            
            <p className="text-stone-400 text-sm leading-relaxed relative z-10">
              {hobby.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hobbies;

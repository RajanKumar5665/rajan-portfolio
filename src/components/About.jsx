import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import profilePic from "../assets/profileimg.png";
import { FaGithub, FaCode, FaBrain, FaCloud, FaFolderOpen, FaAward } from "react-icons/fa";
import { FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";

const About = ({ onBackHome, onNavigateHomeSection }) => {
  const footerLinks = [
    { label: "About", action: () => onBackHome?.() },
    { label: "Projects", action: () => onNavigateHomeSection?.("#projects") },
    { label: "Experience", action: () => onNavigateHomeSection?.("#experience") },
    { label: "Contact", action: () => onNavigateHomeSection?.("#contact") },
  ];

  const stats = [
    {
      value: "300+",
      label: "DSA Problems Solved",
      icon: <FaBrain className="text-purple-400 text-xl" />,
      glow: "hover:shadow-purple-500/10 hover:border-purple-500/30",
    },
    {
      value: "4+",
      label: "Featured Projects",
      icon: <FaFolderOpen className="text-cyan-400 text-xl" />,
      glow: "hover:shadow-cyan-500/10 hover:border-cyan-500/30",
    },
    {
      value: "OCI",
      label: "Oracle Cloud Certified",
      icon: <FaAward className="text-amber-400 text-xl" />,
      glow: "hover:shadow-amber-500/10 hover:border-amber-500/30",
    },
  ];

  const principles = [
    {
      title: "Clean & Modern Code",
      description: "Writing maintainable, scalable, and optimized code with deep focus on design patterns.",
      icon: <FaCode className="text-cyan-400" />,
    },
    {
      title: "Cloud & DevOps Solutions",
      description: "Oracle Certified Developer. Designing secure architectures using Docker and Cloud services.",
      icon: <FaCloud className="text-indigo-400" />,
    },
    {
      title: "Competitive Programming",
      description: "Active problem solver on LeetCode and GFG with a strong command of Data Structures & Algorithms in C++.",
      icon: <FaBrain className="text-purple-400" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.div
      className="pt-28 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-start">
          
          {/* Left Column: Heading & Detailed Bio */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-block text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-sm">
                About Me
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
                Hey! I&apos;m <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Rajan Mandal</span>,<br />a full stack engineer.
              </h1>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="p-6 rounded-2xl bg-stone-900/40 backdrop-blur-sm border border-stone-800 space-y-6 text-stone-300 text-base md:text-lg leading-8"
            >
              <p className="font-medium text-white">{ABOUT_TEXT}</p>
              <p>
                I&apos;ve always been passionate about technology, design, and building things that solve practical problems. My journey has taken me through full-stack web development, algorithmic problem solving, and cloud computing — all driven by a love for learning and making complex ideas feel simple and highly usable.
              </p>
              <p>
                As a developer, I care about performance, clean architecture, and fluid user experiences. I enjoy learning continuously and using that knowledge to craft polished products, one codebase at a time.
              </p>
            </motion.div>

            {/* Core Values/Principles Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">Core Competencies</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {principles.map((pr, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-cyan-500/20 transition-all flex flex-col gap-3"
                  >
                    <div className="p-2.5 rounded-lg bg-stone-800 w-fit text-xl">
                      {pr.icon}
                    </div>
                    <h3 className="font-bold text-white text-base">{pr.title}</h3>
                    <p className="text-xs text-stone-400 leading-relaxed">{pr.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile, Socials & Live Stats */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[360px]">
                {/* Profile Image with outline glows */}
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="absolute -inset-1 rounded-[2.1rem] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-30 group-hover:opacity-80 blur transition duration-500" />
                  <img
                    src={profilePic}
                    alt="Rajan Mandal"
                    className="relative w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl border border-white/10"
                  />
                </motion.div>

                {/* Social media links */}
                <div className="mt-5 flex items-center justify-center gap-5 text-stone-500">
                  <motion.a 
                    whileHover={{ scale: 1.15, color: "#fff" }} 
                    whileTap={{ scale: 0.95 }}
                    href="https://www.youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="YouTube" 
                    className="hover:text-white transition-colors"
                  >
                    <FaYoutube className="text-xl" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.15, color: "#fff" }} 
                    whileTap={{ scale: 0.95 }}
                    href="https://x.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Twitter/X" 
                    className="hover:text-white transition-colors"
                  >
                    <FaXTwitter className="text-xl" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.15, color: "#fff" }} 
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/rajan-mandal-64b426294" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn" 
                    className="hover:text-white transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.15, color: "#fff" }} 
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/RajanKumar5665" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub" 
                    className="hover:text-white transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Interactive Stats Panel */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 max-w-[360px] mx-auto w-full">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className={`p-4 rounded-2xl bg-stone-900/60 border border-stone-800 flex items-center gap-4 transition-all duration-300 shadow-md ${stat.glow}`}
                >
                  <div className="p-3 rounded-xl bg-stone-800/80">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white font-sans">{stat.value}</div>
                    <div className="text-xs text-stone-400 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Back Home Button */}
            <div className="flex justify-center max-w-[360px] mx-auto w-full">
              <motion.button
                onClick={onBackHome}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3.5 font-bold text-white transition-colors shadow-lg"
              >
                Back to Home
              </motion.button>
            </div>
          </div>

        </div>

        {/* Cohesive Footer */}
        <footer className="mt-20 flex flex-col items-center justify-center gap-6 border-t border-white/10 pt-10 pb-4 text-center">
          <div className="flex items-center gap-3">
            <img
              src={profilePic}
              alt="Rajan Mandal"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
            />
            <span className="text-2xl font-black tracking-[-0.04em] text-white">Rajan Mandal</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-stone-300">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-8 text-stone-500">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors hover:text-white">
              <FaYoutube className="text-xl" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="transition-colors hover:text-white">
              <FaXTwitter className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/rajan-mandal-64b426294" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/RajanKumar5665" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
              <FaGithub className="text-xl" />
            </a>
          </div>

          <p className="pt-2 text-sm text-stone-600">
            © {new Date().getFullYear()} Rajan Kumar — Built with React + Tailwind CSS
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default About;
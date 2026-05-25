import { useState, useEffect } from "react";
import profilePic from "../assets/profileimg.png";
import { HERO_CONTENT, RESUME_URL, CONTACT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaArrowDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { lenisInstance } from "../main";

const ROTATING_ROLES = [
  "Software Engineer",
  "Developer",
  "Problem Solver",
  "Full-Stack Builder",
  "MERN Developer",
  "Code Architect",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const roleVariants = {
  enter: { y: 28, opacity: 0, filter: "blur(6px)" },
  center: { y: 0, opacity: 1, filter: "blur(0px)" },
  exit: { y: -28, opacity: 0, filter: "blur(6px)" },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [recTime, setRecTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROTATING_ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setRecTime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const formatTime = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  const currentRole = ROTATING_ROLES[roleIndex];

  return (
    <div className="pb-10 lg:mb-20 pt-24 md:pt-28">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-14 lg:min-h-[70vh]">
        {/* Image panel */}
        <motion.div
          className="w-full lg:basis-[40%] lg:shrink-0 flex justify-center lg:justify-end order-1 lg:order-none"
          initial={{ opacity: 0, scale: 0.96, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[360px]"
          >
            <div className="hero-cam-panel">
              <div className="hero-cam-header">
                <span className="hero-cam-dot" />
                LIVE_FEED.CAM
              </div>
              <div className="hero-cam-frame">
                <img
                  src={profilePic}
                  alt="Rajan Mandal profile"
                  className="hero-cam-img"
                />
                <div className="hero-scan-line" />
                <div className="hero-cam-corners" />
              </div>
              <div className="hero-cam-footer">
                <span className="hero-rec-dot" />
                REC&nbsp;•&nbsp;{formatTime(recTime)}
              </div>
              <div className="hero-stats">
                <div className="hero-stat-card hero-stat-card--projects">
                  <span className="hero-stat-tag hero-stat-tag--deploy">
                    <span className="hero-stat-deploy-dot" />
                    SHIPPED
                  </span>
                  <div className="hero-stat-num hero-stat-num--projects">
                    <span className="hero-stat-num-main hero-stat-num-main--projects">
                      10
                    </span>
                    <span className="hero-stat-num-suffix hero-stat-num-suffix--projects">
                      +
                    </span>
                  </div>
                  <span className="hero-stat-label">PROJECTS</span>
                  <div className="hero-stat-blocks" aria-hidden>
                    {Array.from({ length: 10 }, (_, i) => (
                      <motion.span
                        key={i}
                        className="hero-stat-block"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{
                          delay: 0.55 + i * 0.05,
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    ))}
                  </div>
                  <div className="hero-stat-bar hero-stat-bar--projects" aria-hidden>
                    <motion.span
                      className="hero-stat-bar-fill hero-stat-bar-fill--projects"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>

                <div className="hero-stat-card hero-stat-card--commits">
                  <span className="hero-stat-tag hero-stat-tag--git">
                    <span className="hero-stat-git-dot" />
                    GIT_PUSH
                  </span>
                  <div className="hero-stat-num hero-stat-num--commits">
                    <span className="hero-stat-num-main">3.4</span>
                    <span className="hero-stat-num-suffix">k</span>
                  </div>
                  <span className="hero-stat-label">COMMITS</span>
                  <div className="hero-stat-bar" aria-hidden>
                    <motion.span
                      className="hero-stat-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: "86%" }}
                      transition={{ delay: 0.8, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>

                <div className="hero-stat-card hero-stat-card--coffee">
                  <span className="hero-stat-tag">FUEL</span>
                  <span className="hero-stat-num hero-stat-num--coffee">∞</span>
                  <span className="hero-stat-label">COFFEE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <div className="w-full lg:basis-[60%] lg:shrink-0 order-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-start max-w-2xl"
          >
            <motion.div variants={childVariants} className="hero-status-badge mb-6">
              <span className="hero-status-dot" />
              SYSTEM_ONLINE — V2.0.26
            </motion.div>

            <motion.div variants={childVariants} className="display-heading-block">
              <h1 className="display-heading display-heading--hero">
                <span className="display-heading-lead">Trust me, I am a</span>
                <br />
                <span className="display-heading-accent display-heading-accent--hero">
                  software engineer
                </span>
              </h1>
            </motion.div>

            <motion.div variants={childVariants} className="hero-rotator-wrap">
              <span className="hero-role-prefix">&gt;&nbsp;currently:</span>
              <div className="hero-rotator-viewport" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    variants={roleVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="hero-rotator-text"
                  >
                    {currentRole}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span
                className="hero-cursor"
                style={{ opacity: showCursor ? 1 : 0 }}
                aria-hidden
              >
                ▌
              </span>
            </motion.div>

            <motion.p variants={childVariants} className="hero-byline">
              <span className="hero-tag-prefix">{"// "}</span>
              Rajan Mandal · Kolkata, India
            </motion.p>

            <motion.p variants={childVariants} className="hero-description">
              {HERO_CONTENT}
            </motion.p>

            <motion.p variants={childVariants} className="hero-building-tag">
              <span className="hero-tag-prefix">{"// "}</span>
              Building Teachyst next-gen LMS&nbsp;
              <span className="text-cyan-400 animate-pulse">✨</span>
            </motion.p>

            <motion.div
              variants={childVariants}
              className="mt-7 flex flex-wrap gap-3 items-center"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#projects");
                  if (!el) return;
                  if (lenisInstance) {
                    lenisInstance.scrollTo(el, { offset: -80, duration: 1.2 });
                  } else {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(34,211,238,0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="hero-btn-primary"
              >
                VIEW PROJECTS
                <FaArrowDown className="text-xs" />
              </motion.a>
              <motion.a
                href={`mailto:${CONTACT.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hero-btn-secondary"
              >
                <span className="w-2 h-2 bg-cyan-400 inline-block" />
                CONTACT
              </motion.a>
              <motion.a
                href={RESUME_URL}
                download="Rajan_Mandal_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hero-btn-secondary"
              >
                <FaDownload className="text-xs" />
                RESUME
              </motion.a>

              <div className="flex items-center gap-4 w-full sm:w-auto sm:ml-1">
                <motion.a
                  whileHover={{ scale: 1.2, color: "#22d3ee" }}
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hero-social-icon"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#22d3ee" }}
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hero-social-icon"
                >
                  <FaGithub />
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={childVariants} className="hero-location">
              <span>◈ INDIA</span>
              <span className="hero-location-sep">·</span>
              <span>KOLKATA, WEST BENGAL</span>
              <span className="hero-location-sep">·</span>
              <span>UTC+5:30</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

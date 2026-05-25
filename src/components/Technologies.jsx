import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const SKILL_COLUMNS = [
  {
    id: "frontend",
    dir: "FRONTEND.DIR/",
    title: "FRONTEND",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "TailwindCSS", level: 95 },
      { name: "Redux / Zustand", level: 78 },
    ],
  },
  {
    id: "backend",
    dir: "BACKEND.DIR/",
    title: "BACKEND",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 92 },
      { name: "MongoDB", level: 88 },
      { name: "REST / JWT Auth", level: 96 },
      { name: "Socket.io", level: 75 },
    ],
  },
  {
    id: "tools",
    dir: "TOOLS.DIR/",
    title: "TOOLS",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Vercel / Render", level: 85 },
      { name: "Postman", level: 92 },
      { name: "Linux / Bash", level: 78 },
    ],
  },
];

const SYSTEM_DESIGN_SKILLS = [
  { name: "Scalability", level: 82 },
  { name: "Load Balancing", level: 78 },
  { name: "Microservices", level: 76 },
  { name: "Caching (Redis)", level: 80 },
  { name: "Database Design", level: 84 },
  { name: "Message Queues", level: 72 },
];

const MARQUEE_TAGS = [
  "REACT",
  "NODE.JS",
  "MONGODB",
  "MONGOOSE",
  "REDIS",
  "GRAPHQL",
  "REST",
  "JWT",
  "SOCKET.IO",
  "NEXT.JS",
  "TAILWINDCSS",
  "VITE",
  "DOCKER",
  "GIT",
  "LINUX",
  "SYSTEM DESIGN",
];

const TITLE_TEXT = "SKILLS";

const columnVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SkillRow({ name, level, index, isInView, variant = "default" }) {
  return (
    <motion.div
      className={`skills-row ${variant === "compact" ? "skills-row--compact" : ""}`}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.05, duration: 0.35 }}
    >
      <span className="skills-row-name">{name}</span>
      <div className="skills-row-bar-wrap">
        <div className="skills-bar-track">
          <motion.div
            className="skills-bar-fill"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : {}}
            transition={{
              delay: 0.3 + index * 0.06,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
        <motion.span
          className="skills-row-pct"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 + index * 0.06 }}
        >
          {level}%
        </motion.span>
      </div>
    </motion.div>
  );
}

function SkillColumn({ column, columnIndex, isInView }) {
  const count = column.skills.length;

  return (
    <motion.div
      className="skills-column"
      custom={columnIndex}
      variants={columnVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="skills-column-head">
        <span className="skills-dir">{column.dir}</span>
        <span className="skills-entries">
          {count} ENTRIES
        </span>
      </div>
      <h3 className="skills-column-title">{column.title}</h3>
      <div className="skills-column-body">
        {column.skills.map((skill, i) => (
          <SkillRow
            key={skill.name}
            name={skill.name}
            level={skill.level}
            index={columnIndex * 8 + i}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
}

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [typedTitle, setTypedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= TITLE_TEXT.length) {
        setTypedTitle(TITLE_TEXT.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 85);

    return () => clearInterval(typeInterval);
  }, [isInView]);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((c) => !c), 520);
    return () => clearInterval(id);
  }, []);

  const marqueeItems = [...MARQUEE_TAGS, ...MARQUEE_TAGS];

  return (
    <div className="pb-24 pt-8 skills-section" ref={ref}>
      <motion.div
        className="skills-top-meta"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.45 }}
      >
        <span className="skills-meta-left">
          <span className="skills-meta-accent">/ 02 /</span>
          <span className="skills-meta-slash"> // </span>
          SYSTEM_DIAGNOSTICS
        </span>
        <span className="skills-meta-right">
          <span>SECTION.02</span>
          <span className="skills-scroll-hint">// SCROLL FOR MORE ↓</span>
        </span>
      </motion.div>

      <motion.div
        className="skills-title-wrap"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.08 }}
      >
        <div className="display-heading-block">
          <h2
            className="display-heading display-heading--section display-heading--uppercase"
            aria-label="Skills"
          >
            {typedTitle}
            <span
              className="display-heading-cursor"
              style={{ opacity: showCursor ? 1 : 0 }}
              aria-hidden
            >
              _
            </span>
          </h2>
        </div>
        <div className="section-title-rule" aria-hidden>
          <span className="section-title-rule-glow" />
          <span className="section-title-rule-line" />
        </div>
      </motion.div>

      <div className="skills-columns">
        {SKILL_COLUMNS.map((col, i) => (
          <SkillColumn
            key={col.id}
            column={col}
            columnIndex={i}
            isInView={isInView}
          />
        ))}
      </div>

      {/* System Design */}
      <motion.section
        id="system-design"
        aria-label="System Design skills"
        className="skills-sys-panel scroll-mt-28"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <div className="skills-sys-panel-inner cyber-card">
          <div className="skills-column-head">
            <span className="skills-dir">SYSTEM_DESIGN.DIR/</span>
            <span className="skills-entries">{SYSTEM_DESIGN_SKILLS.length} ENTRIES</span>
          </div>
          <h3 className="skills-column-title">SYSTEM DESIGN</h3>
          <p className="skills-sys-desc">
            // Scalability, architecture patterns & distributed systems fundamentals
          </p>
          <div className="skills-sys-grid">
            {SYSTEM_DESIGN_SKILLS.map((skill, i) => (
              <SkillRow
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={24 + i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <div className="skills-marquee-wrap" aria-hidden>
        <div className="skills-marquee-fade skills-marquee-fade--left" />
        <div className="skills-marquee-fade skills-marquee-fade--right" />
        <div className="skills-marquee-track">
          {marqueeItems.map((tag, i) => (
            <span key={`${tag}-${i}`} className="skills-marquee-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

import { motion } from "framer-motion";

/** Last word gets cyan gradient accent — e.g. "Featured Projects" */
function splitTitle(title) {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) {
    return { lead: "", accent: title };
  }
  const accent = words.pop();
  return { lead: words.join(" "), accent };
}

const SectionHeader = ({ number, label, title, subtitle }) => {
  const { lead, accent } = splitTitle(title);

  return (
    <motion.header
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="section-header"
    >
      <div className="section-header-meta">
        <span className="section-num">[{number}]</span>
        <span className="section-meta-divider" aria-hidden>
          //
        </span>
        <span className="section-label">{label.replace(/^\/\/\s*/, "")}</span>
      </div>

      <div className="display-heading-block">
        <h2 className="display-heading display-heading--section">
          {lead ? (
            <>
              <span className="display-heading-lead">{lead} </span>
              <span className="display-heading-accent">{accent}</span>
            </>
          ) : (
            <span className="display-heading-accent">{accent}</span>
          )}
        </h2>
      </div>

      {subtitle && <p className="section-subtitle">{subtitle}</p>}

      <div className="section-title-rule" aria-hidden>
        <span className="section-title-rule-glow" />
        <span className="section-title-rule-line" />
      </div>
    </motion.header>
  );
};

export default SectionHeader;

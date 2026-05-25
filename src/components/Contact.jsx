import { CONTACT, RESUME_URL } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPhone, FaMapMarkerAlt, FaGithub, FaDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const channels = [
    {
      id: "EMAIL",
      icon: <HiMail className="text-lg text-cyan-400" />,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      id: "PHONE",
      icon: <FaPhone className="text-lg text-cyan-400" />,
      label: "Phone",
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`,
    },
    {
      id: "LOC",
      icon: <FaMapMarkerAlt className="text-lg text-cyan-400" />,
      label: "Location",
      value: CONTACT.address,
      href: null,
    },
  ];

  return (
    <div className="border-t border-cyan-500/10 pb-24 pt-16 section-shell" ref={ref}>
      <SectionHeader
        number="05"
        label="// CONTACT_INTERFACE"
        title="Get in Touch"
        subtitle="Open for internships, freelance work, and full-time opportunities."
      />

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="cyber-card p-6 md:p-8 flex flex-col justify-between min-h-[280px]"
        >
          <div>
            <p className="font-mono text-[0.65rem] text-cyan-400 tracking-widest mb-4">
              ◈ INIT_CONNECTION
            </p>
            <h3 className="font-display text-2xl font-bold text-white leading-tight">
              Let&apos;s build something together.
            </h3>
            <p className="mt-4 font-mono text-[0.72rem] leading-relaxed text-stone-500">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={`mailto:${CONTACT.email}`} className="cyber-btn justify-center flex-1">
              <HiMail />
              SEND_EMAIL
            </a>
            <a
              href={RESUME_URL}
              download="Rajan_Mandal_Resume.pdf"
              className="cyber-btn justify-center flex-1 border-stone-600 text-stone-300"
            >
              <FaDownload />
              RESUME
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="cyber-card p-4 flex items-center gap-4 group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-cyan-500/25 bg-cyan-500/5">
                {ch.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[0.6rem] text-stone-600 tracking-widest">
                  {ch.id}
                </p>
                {ch.href ? (
                  <a
                    href={ch.href}
                    className="block mt-0.5 font-mono text-sm text-white truncate group-hover:text-cyan-400 transition-colors"
                  >
                    {ch.value}
                  </a>
                ) : (
                  <p className="mt-0.5 font-mono text-sm text-white">{ch.value}</p>
                )}
              </div>
              <span className="font-mono text-[0.6rem] text-stone-700 group-hover:text-cyan-500/50">
                →
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="cyber-card p-4"
          >
            <p className="font-mono text-[0.6rem] text-stone-600 tracking-widest mb-3">
              SOCIAL_LINKS
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-cyan-500/15 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all font-mono text-xs text-stone-400 hover:text-cyan-400"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-cyan-500/15 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all font-mono text-xs text-stone-400 hover:text-cyan-400"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

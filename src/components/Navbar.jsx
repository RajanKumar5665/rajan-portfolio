import { useState, useEffect } from "react";
import { lenisInstance } from "../main";
import { RESUME_URL, CONTACT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ onOpenAbout, onNavigateHomeSection, currentView = "home" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#about", num: "01", label: "ABOUT" },
    { href: "#technologies", num: "02", label: "SKILLS" },
    { href: "#projects", num: "03", label: "PROJECTS" },
    { href: "#experience", num: "04", label: "EXPERIENCE" },
    { href: "#contact", num: "05", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (currentView !== "home") return;
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [currentView]);

  const handleNavClick = (e, href) => {
    if (href === "#about") {
      e.preventDefault();
      onOpenAbout?.();
      setMobileMenuOpen(false);
      return;
    }
    if (currentView !== "home") {
      e.preventDefault();
      onNavigateHomeSection?.(href);
      setMobileMenuOpen(false);
      return;
    }
    if (href.startsWith("#") && lenisInstance) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) lenisInstance.scrollTo(el, { offset: -80, duration: 1.2 });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 transition-all ${scrolled ? "pt-3" : "pt-4"}`}
    >
      <div className={`cyber-nav ${scrolled ? "border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.08)]" : ""}`}>
        <motion.button
          type="button"
          aria-label="Home"
          className="flex items-center gap-3 shrink-0"
          onClick={() => onNavigateHomeSection?.("#home")}
        >
          <span className="cyber-logo-box">RM</span>
          <span className="cyber-logo-text hidden sm:inline">RAJAN_MANDAL</span>
        </motion.button>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`cyber-nav-link ${
                (currentView === "about" && link.href === "#about") ||
                activeSection === link.href
                  ? "active"
                  : ""
              }`}
            >
              <span className="cyber-nav-num">{link.num}</span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href={`mailto:${CONTACT.email}`}
            className="cyber-hire-btn hidden sm:inline-flex"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="w-2 h-2 bg-cyan-400" />
            HIRE ME
          </motion.a>
          <motion.button
            type="button"
            className="lg:hidden p-2 text-cyan-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 mx-auto max-w-6xl cyber-card p-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 cyber-nav-link text-sm border-b border-cyan-500/10 last:border-0"
              >
                <span className="cyber-nav-num">{link.num}</span>
                {link.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              download="Rajan_Mandal_Resume.pdf"
              className="block py-3 cyber-nav-link text-cyan-400"
            >
              ↓ RESUME
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-2 cyber-hire-btn w-full justify-center"
            >
              <span className="w-2 h-2 bg-cyan-400" />
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

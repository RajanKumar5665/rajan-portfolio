import React, { useState, useEffect } from 'react'
import { lenisInstance } from '../main';
import logo from "../assets/raviKumarLogo.webp"
import { motion, AnimatePresence } from "framer-motion"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#technologies", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#contact", label: "Contact" },
  ];

  // Custom scroll handler using Lenis
  const handleNavClick = (e, href) => {
    if (href.startsWith('#') && lenisInstance) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        lenisInstance.scrollTo(el, { offset: -60, duration: 1.2 });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            aria-label="Home"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={logo}
              className="rounded-lg"
              width={48}
              height={32}
              alt="Rajan Mandal logo"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            />
            <span className="ml-2 text-xl font-bold tracking-tight bg-gradient-to-r from-white to-stone-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all">
              Rajan Mandal
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-300 hover:text-white relative group transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://www.linkedin.com/in/rajan-mandal-64b426294"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg bg-stone-900/50 hover:bg-blue-600 text-stone-300 hover:text-white transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/RajanKumar5665"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="p-2.5 rounded-lg bg-stone-900/50 hover:bg-stone-700 text-stone-300 hover:text-white transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </div>

          <motion.button
            className="md:hidden p-2 text-stone-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-stone-800"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-stone-300 hover:text-white py-2 transition-colors"
                  onClick={e => handleNavClick(e, link.href)}
                  whileHover={{ x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-800">
                <a href="https://www.linkedin.com/in/rajan-mandal-64b426294" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-stone-900/50 text-stone-300 hover:text-white">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/RajanKumar5665" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-stone-900/50 text-stone-300 hover:text-white">
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

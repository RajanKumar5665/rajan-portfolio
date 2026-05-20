import React, { useState, useEffect } from 'react'
import { lenisInstance } from '../main';
import profilePic from "../assets/profileimg.png"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ onOpenAbout, onNavigateHomeSection, currentView = "home" }) => {
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
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  // Custom scroll handler using Lenis
  const handleNavClick = (e, href) => {
    if (href === '#about') {
      e.preventDefault();
      onOpenAbout?.();
      setMobileMenuOpen(false);
      return;
    }

    if (currentView !== 'home') {
      e.preventDefault();
      onNavigateHomeSection?.(href);
      setMobileMenuOpen(false);
      return;
    }

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
      className="fixed top-4 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center w-full">
        <div className={`inline-flex items-center rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'bg-stone-950/85 py-2 px-4 sm:px-6 border-cyan-500/20' : 'bg-stone-900/60 py-2 px-4 sm:px-6'
        }`}>
          <div className="flex items-center justify-start gap-5 sm:gap-8">
            <motion.button
              type="button"
              aria-label="Home"
              className="flex items-center gap-3 group shrink-0 pr-1"
              onClick={() => onNavigateHomeSection?.('#home')}
            >
              <motion.img
                src={profilePic}
                className="rounded-full object-cover ring-1 ring-white/10"
                width={38}
                height={38}
                alt="Rajan Mandal"
              />
              <span className="hidden sm:block text-[15px] font-extrabold tracking-[-0.03em] text-white group-hover:text-stone-200 transition-all">
                Rajan Mandal
              </span>
            </motion.button>

            <div className="hidden md:flex items-center gap-8 pl-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium relative group transition-colors ${currentView === 'about' && link.href === '#about' ? 'text-white' : 'text-stone-300 hover:text-white'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={e => handleNavClick(e, link.href)}
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
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
        </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-3 rounded-3xl bg-[#1b1b1f]/96 backdrop-blur-xl border border-white/10 overflow-hidden"
          >
            <div className="px-5 py-5 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`block py-2 transition-colors ${currentView === 'about' && link.href === '#about' ? 'text-white' : 'text-stone-300 hover:text-white'}`}
                  onClick={e => handleNavClick(e, link.href)}
                  whileHover={{ x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

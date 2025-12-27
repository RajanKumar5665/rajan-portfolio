import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased bg-black min-h-screen">
      {/* Enhanced background with animated gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full">
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[length:14px_24px]"></div>
          
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,#3b82f620,#000)] opacity-40 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,#06b6d420,#000)] opacity-40 blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Central radial gradient */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-20 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,#ffffff08,#000)] opacity-30" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <header id="home">
          <Navbar />
        </header>

        <main>
          <motion.section aria-label="Hero section" className="scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Hero />
          </motion.section>

          <motion.section id="technologies" aria-label="Technologies" className="scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Technologies />
          </motion.section>

          <motion.section id="projects" aria-label="Projects" className="scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Project />
          </motion.section>

          <motion.section id="experience" aria-label="Experience" className="scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
            <Experience />
          </motion.section>

          <motion.section id="education" aria-label="Education" className="scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
            <Education />
          </motion.section>

          <motion.section id="hobbies" aria-label="Hobbies" className="scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
            <Hobbies />
          </motion.section>

          <motion.section id="contact" aria-label="Contact" className="scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }}>
            <Contact />
          </motion.section>
        </main>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 text-center border-t border-stone-800/50 mt-16"
        >
          <p className="text-stone-500 mb-2">
            © {new Date().getFullYear()} Rajan Kumar — Built with React + Tailwind CSS
          </p>
          <p className="text-stone-600 text-sm">
            Crafted with ❤️ and attention to detail
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;


import profilePic from "../assets/profileimg.png";
import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"
import { HiArrowDown } from "react-icons/hi";
import { FaDownload, FaPaperPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
}

const Hero = () => {
  return (
    <div className='pb-10 lg:mb-24 pt-28 md:pt-32'>
      <div className='flex flex-col lg:flex-row-reverse lg:flex-nowrap items-start lg:items-center gap-14 lg:gap-20 min-h-[80vh]'>
        <div className='w-full lg:basis-[42%] lg:shrink-0'>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px]">
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-1 rounded-[1.85rem] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-30 group-hover:opacity-80 blur transition duration-500" />
                <img
                  src={profilePic}
                  alt="Rajan Mandal profile"
                  className='relative w-full aspect-[4/5] object-cover rounded-[1.75rem] shadow-2xl border border-white/10'
                />
              </motion.div>
              <div className="mt-6 flex items-center justify-center gap-6 text-stone-500">
                <motion.a 
                  whileHover={{ scale: 1.2, color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/rajan-mandal-64b426294" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn" 
                  className="inline-flex items-center justify-center rounded-full p-2 text-xl hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/RajanKumar5665" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub" 
                  className="inline-flex items-center justify-center rounded-full p-2 text-xl hover:text-white transition-colors"
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:basis-[58%] lg:shrink-0'>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='flex flex-col items-start mt-2 lg:mt-0'
          >
            <motion.h1 
              variants={childVariants} 
              className='pb-2 max-w-[12ch] text-5xl md:text-6xl lg:text-7.5xl font-extrabold tracking-tight leading-[0.95] text-white'
            >
              Trust me, I&apos;m a <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">software</span><br className="hidden lg:block" />engineer.
            </motion.h1>

            <motion.p 
              variants={childVariants} 
              className='mt-8 max-w-[60ch] text-base md:text-lg leading-8 text-stone-400'
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.p
              variants={childVariants}
              className="mt-6 text-sm text-stone-500 flex items-center gap-2"
            >
              Building Teachyst next-gen LMS <span className="text-cyan-400 animate-pulse">✨</span>
            </motion.p>

            <motion.div 
              variants={childVariants} 
              className='mt-8 flex gap-4 flex-wrap'
            >
              <motion.a 
                href="https://www.discord.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, shadow: "0px 0px 20px rgb(99, 102, 241)" }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#4f46e5] px-8 py-3.5 font-semibold text-white transition-all shadow-lg hover:shadow-indigo-500/35 border border-indigo-400/20'
              >
                <FaPaperPlane />
                Join Discord
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero;

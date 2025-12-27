import profilePic from "../assets/profileraj.jpg";
import {HERO_CONTENT} from "../constants"
import { motion } from "framer-motion"
import { HiArrowDown } from "react-icons/hi";
import { FaDownload, FaPaperPlane } from "react-icons/fa";

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
    <div className='pb-6 lg:mb-28 pt-24 md:pt-32'>
      <div className='flex flex-wrap lg:flex-row-reverse items-center min-h-[80vh]'>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-end lg:p-6 relative'>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse"></div>
              <motion.img
                src={profilePic}
                alt="Rajan Mandal profile"
                className='relative w-64 h-80 md:w-72 md:h-96 object-cover rounded-3xl border-2 border-stone-700 shadow-2xl'
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
              >
                Available for Work
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='flex flex-col items-center lg:items-start mt-12 lg:mt-0'
          >
            <motion.div variants={childVariants} className="flex items-center gap-2 mb-4">
              <motion.span 
                className="text-sm text-cyan-400 font-semibold"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋 Hello, I'm
              </motion.span>
            </motion.div>

            <motion.h1 
              variants={childVariants} 
              className='pb-2 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-stone-200 to-stone-400 bg-clip-text text-transparent'
            >
              Rajan Mandal
            </motion.h1>

            <motion.div variants={childVariants} className="flex items-center gap-3 my-4">
              <motion.span 
                className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-2xl md:text-3xl font-bold text-transparent'
                animate={{ 
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Full Stack Developer (MERN)
              </motion.span>
            </motion.div>

            <motion.p 
              variants={childVariants} 
              className='my-6 max-w-lg text-base md:text-lg leading-relaxed text-stone-400 text-center lg:text-left'
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div 
              variants={childVariants} 
              className='flex gap-4 mt-8 flex-wrap justify-center lg:justify-start'
            >
              <motion.a 
                href="/rajanresume.pdf" 
                target='_blank' 
                rel='noopener noreferrer' 
                download 
                className='group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </motion.a>
              <motion.a 
                href="#contact" 
                className='group inline-flex items-center gap-2 border-2 border-stone-600 hover:border-cyan-500 px-6 py-3 rounded-full text-stone-200 hover:text-white bg-stone-900/50 hover:bg-stone-800/50 transition-all'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="mt-12 lg:mt-16"
            >
              <motion.a
                href="#technologies"
                className="flex flex-col items-center gap-2 text-stone-400 hover:text-cyan-400 transition-colors"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm">Scroll Down</span>
                <HiArrowDown className="text-2xl" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero;

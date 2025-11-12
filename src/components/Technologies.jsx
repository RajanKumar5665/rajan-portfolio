import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { 
      node: <RiReactjsLine className="text-6xl text-cyan-400" />, 
      label: 'React',
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    { 
      node: <TbBrandNextjs className="text-6xl text-white" />, 
      label: 'Next.js',
      color: 'from-white to-stone-300',
      bgColor: 'bg-stone-500/10',
      borderColor: 'border-stone-500/30'
    },
    { 
      node: <SiMongodb className="text-6xl text-emerald-500" />, 
      label: 'MongoDB',
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30'
    },
    { 
      node: <DiRedis className="text-6xl text-red-600" />, 
      label: 'Redis',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    { 
      node: <FaNodeJs className="text-6xl text-green-500" />, 
      label: 'Node.js',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    { 
      node: <BiLogoPostgresql className="text-6xl text-sky-600" />, 
      label: 'PostgreSQL',
      color: 'from-sky-400 to-sky-600',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/30'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className='pb-24' ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='mb-20 text-center'
      >
        <motion.span
          className="inline-block text-cyan-400 font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Skills & Technologies
        </motion.span>
        <motion.h2
          className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-stone-400 bg-clip-text text-transparent'
        >
          Technologies I Work With
        </motion.h2>
        <motion.div
          className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8'
      >
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1, 
              y: -10,
              rotate: [0, -5, 5, -5, 0],
            }}
            className={`
              group relative flex flex-col items-center justify-center 
              p-6 rounded-2xl border-2 ${tech.borderColor}
              ${tech.bgColor} backdrop-blur-sm
              cursor-pointer transition-all duration-300
              hover:shadow-2xl hover:shadow-cyan-500/20
            `}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${tech.color.split(' ')[1]}20, ${tech.color.split(' ')[3]}20)`
              }}
            />
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {tech.node}
              </motion.div>
              <motion.p
                className="mt-4 text-sm font-semibold text-stone-300 group-hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: idx * 0.1 + 0.3 }}
              >
                {tech.label}
              </motion.p>
            </div>
            <motion.div
              className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r ${tech.color} rounded-full group-hover:w-full transition-all duration-300`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Technologies;

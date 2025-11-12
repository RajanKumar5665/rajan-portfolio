import { CONTACT } from "../constants"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: CONTACT.address,
      href: null,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <HiMail className="text-2xl" />,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: "from-blue-500 to-cyan-500"
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: CONTACT.linkedin || "https://www.linkedin.com/in/rajan-mandal-64b426294",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FaGithub />,
      href: CONTACT.github || "https://github.com/RajanKumar5665",
      label: "GitHub",
      color: "hover:bg-stone-700"
    },
  ];

  return (
    <div className='border-t border-stone-800/50 pb-24 pt-16' ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <motion.span
          className="inline-block text-cyan-400 font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Let's Connect
        </motion.span>
        <motion.h2
          className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-stone-400 bg-clip-text text-transparent mb-4'
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-stone-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </motion.p>
        <motion.div
          className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>

      <div className='max-w-4xl mx-auto'>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`
                group relative bg-gradient-to-br from-stone-900/60 to-stone-800/40 
                backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50 
                hover:border-cyan-500/50 transition-all duration-300
                text-center cursor-pointer
              `}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${info.color} mb-4 mx-auto`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white">
                  {info.icon}
                </div>
              </motion.div>
              <h3 className="text-stone-400 text-sm font-semibold mb-2">{info.label}</h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-white hover:text-cyan-400 transition-colors block"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-white">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-stone-300">Connect with me</h3>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`
                  p-4 rounded-xl bg-stone-900/50 backdrop-blur-sm 
                  border border-stone-700/50 text-stone-300 
                  ${social.color} transition-all duration-300
                `}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="text-2xl">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-stone-700 hover:border-cyan-500 text-stone-300 hover:text-white bg-stone-900/50 hover:bg-stone-800/50 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

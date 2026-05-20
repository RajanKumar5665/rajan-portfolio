import auth from "../assets/projects/auth.png";
import shopping from "../assets/projects/shopping.png";
import hiring from "../assets/projects/hiring.png";
import recipe from "../assets/projects/recipe.png";

export const HERO_CONTENT = `Meet Rajan Mandal, a Full-Stack Developer passionate about building scalable web applications and backend systems. Skilled in the MERN stack and Data Structures & Algorithms (C++), he enjoys solving real-world problems through clean and efficient code while continuously learning modern technologies.
~ ChatGPT`;

export const ABOUT_TEXT = `Hi, I’m Rajan Mandal — a full-stack developer who enjoys building practical web apps, learning modern tools, and turning ideas into simple, polished products. I work mostly with the MERN stack and C++ for DSA, and I like creating software that feels fast, clean, and easy to use.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "B.Tech - Computer Science and Engineering",
    company: "MAKAUT (Maulana Abul Kalam Azad University of Technology)",
    description: `Pursuing Bachelor of Technology in Computer Science and Engineering with a CGPA of 7.1. Expected graduation in May 2026. Focused on Web Development, Cloud Computing, and Data Structures & Algorithms.`,
    technologies: ["C++", "DSA", "MERN Stack", "Cloud Computing"],
  },
  {
    year: "2025",
    role: "Oracle Cloud Infrastructure Certified Developer",
    company: "Oracle",
    description: `Achieved Oracle Cloud Infrastructure 2025 Certified Developer Professional certification. Gained expertise in Oracle Cloud services, application deployment, resource management, and cloud architecture best practices.`,
    technologies: ["Oracle Cloud", "Docker", "Cloud Architecture", "DevOps"],
  },
  {
    year: "2024",
    role: "Full Stack Web Development Certification",
    company: "MERN Stack Training",
    description: `Completed comprehensive certification in Full Stack Web Development specializing in MERN Stack. Built multiple real-world projects demonstrating proficiency in MongoDB, Express.js, React.js, and Node.js with focus on scalable web applications.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
  },
  {
    year: "2025 - Present",
    role: "Competitive Programming",
    company: "LeetCode & GeeksforGeeks",
    description: `Actively solving Data Structures & Algorithms problems to strengthen problem-solving skills. Solved 100+ problems on LeetCode and 200+ on GeeksforGeeks using C++. Focused on optimizing code efficiency and mastering algorithmic thinking.`,
    technologies: ["C++", "DSA", "Problem Solving", "Algorithms"],
  },
];

export const PROJECTS = [
  {
    title: "MERN Authentication System",
    image: auth,
    description:
      "A secure authentication platform with OTP-based email verification, password reset, and JWT-based login/logout features. Built with a RESTful backend API for seamless integration.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Bcrypt", "Nodemailer"],
    liveLink: "https://mern-authenication-three.vercel.app/",
    github: "https://github.com/RajanKumar5665"
  },
  {
    title: "Shopping Website",
    image: shopping,
    description:
      "A full-featured shopping and ecommerce web application. Features include a modular product catalog, custom shopping cart with checkout, secure user accounts, and a responsive administrative dashboard built with Shadcn and Tailwind.",
    technologies: ["React.js", "Tailwind CSS", "Shadcn UI", "Express.js", "Node.js", "MongoDB", "Redux"],
    liveLink: "https://shoping-website-theta.vercel.app",
    github: "https://github.com/RajanKumar5665"
  },
  {
    title: "Skill Hire",
    image: hiring,
    description:
      "A modern freelance and professional hiring portal connecting employers with developers. Features advanced skill-based searching, application status tracking, secure candidate authentication, and job posting.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    liveLink: "https://skill-h-ire.vercel.app/",
    github: "https://github.com/RajanKumar5665"
  },
  {
    title: "AI Recipe Generator",
    image: recipe,
    description:
      "An intelligent recipe generation system utilizing the Gemini API. Users input available ingredients, select dietary preferences, and specify complexity to receive customized recipes with step-by-step instructions instantly.",
    technologies: ["React.js", "Tailwind CSS", "Express.js", "Node.js", "Gemini API", "MongoDB"],
    liveLink: "https://ai-recipe-genrator-henna.vercel.app/",
    github: "https://github.com/RajanKumar5665"
  },
];

export const CONTACT = {
  address: "Kolkata, West Bengal",
  phoneNo: "+91 9693153290",
  email: "rk4009023@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajan-mandal-64b426294",
  github: "https://github.com/RajanKumar5665"
};

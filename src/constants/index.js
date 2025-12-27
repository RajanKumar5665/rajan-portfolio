import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Aspiring Full-Stack Developer (MERN) with experience in building scalable and secure web applications. Skilled in MongoDB, Express.js, React, Node.js, and proficient in Data Structures & Algorithms (C++). A proactive learner with strong problem-solving and analytical abilities, eager to contribute to real-world software development projects.`;

export const ABOUT_TEXT = `I am Rajan Mandal, a passionate B.Tech Computer Science student at Maulana Abul Kalam Azad University of Technology (MAKAUT) with a CGPA of 7.1, graduating in May 2026. My journey in web development is driven by curiosity and a commitment to continuous learning. I've solved over 100+ DSA problems on LeetCode and 200+ on GeeksforGeeks, which has sharpened my analytical and problem-solving skills. I thrive in building full-stack applications using the MERN stack and love exploring new technologies. I'm a quick learner, adaptable, and enjoy collaborating with teams to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
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
    year: "2023 - Present",
    role: "Competitive Programming",
    company: "LeetCode & GeeksforGeeks",
    description: `Actively solving Data Structures & Algorithms problems to strengthen problem-solving skills. Solved 100+ problems on LeetCode and 200+ on GeeksforGeeks using C++. Focused on optimizing code efficiency and mastering algorithmic thinking.`,
    technologies: ["C++", "DSA", "Problem Solving", "Algorithms"],
  },
];

export const PROJECTS = [
  {
    title: "Job Portal",
    image: project1,
    description:
      "A full-stack web application connecting job seekers and recruiters with role-based authentication and secured routes using JWT. Features include job posting, application management, and candidate tracking.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    liveLink: "https://jobportal-frontend-u7cn.onrender.com",
    github: "https://github.com/RajanKumar5665"
  },
  {
    title: "MERN Authentication System",
    image: project2,
    description:
      "A secure authentication platform with OTP-based email verification, password reset, and JWT-based login/logout features. Built with RESTful backend API for seamless integration.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Bcrypt", "Nodemailer"],
    liveLink: "https://mern-auth-frontend-usmh.onrender.com",
    github: "https://github.com/RajanKumar5665"
  },
  {
    title: "Blog Application",
    image: project4,
    description:
      "A full-stack blogging platform allowing users to create, edit, and view blog posts with image uploads and secure authentication. Features include rich text editor, comment system, and user profiles.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Bcrypt", "Cloudinary", "Tailwind CSS"],
    liveLink: "https://your-blog-app-link.com",
    github: "https://github.com/RajanKumar5665"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A modern personal portfolio showcasing projects, skills, and resume with integrated GitHub & LinkedIn links and downloadable resume option. Deployed on Vercel with continuous integration.",
    technologies: ["React.js", "Tailwind CSS", "Vite", "Vercel"],
    liveLink: "https://portfolio-rajan-mandal.vercel.app",
    github: "https://github.com/RajanKumar5665/RajanPortfolio"
  },
];

export const CONTACT = {
  address: "Kolkata, West Bengal",
  phoneNo: "+91 9693153290",
  email: "rk4009023@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajan-mandal-64b426294",
  github: "https://github.com/RajanKumar5665"
};

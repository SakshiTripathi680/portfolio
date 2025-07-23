import React from "react";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiPostman,
  SiVite,
  SiNodemon,
  SiExpress,
  SiMongoose,
  SiNextdotjs,
  SiReactrouter,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState(null);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseURL}/api/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills data:", err));
  }, [baseURL]);

  if (!skills) return <p className="p-10 text-white">Loading...</p>;

  const techIcons = {
    HTML: <SiHtml5 className="text-orange-500 text-2xl" />,
    CSS: <SiCss3 className="text-blue-500 text-2xl" />,
    JavaScript: <SiJavascript className="text-yellow-400 text-2xl" />,
    React: <FaReact className="text-blue-400 text-2xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-2xl" />,
    "Framer Motion": <SiFramer className="text-pink-500 text-2xl" />,
    C: <span className="text-2xl">🔵</span>,
    "C++": <SiCplusplus className="text-blue-800 text-2xl" />,
    Python: <FaPython className="text-yellow-400 text-2xl" />,
    Vite: <SiVite className="text-purple-500 text-2xl" />,
    "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
    "Express.js": <SiExpress className="text-white text-2xl" />,
    "React Router": <SiReactrouter className="text-red-500 text-2xl" />,
    "Next.js": <SiNextdotjs className="text-white text-2xl" />, // changed from black
    Nodemon: <SiNodemon className="text-green-700 text-2xl" />,
    MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
    Mongoose: <SiMongoose className="text-red-500 text-2xl" />,
    Git: <FaGitAlt className="text-orange-600 text-2xl" />,
    Github: <FaGithub className="text-white text-2xl" />, // changed from black
    Postman: <SiPostman className="text-orange-500 text-2xl" />,
    "VS Code": <VscVscode className="text-blue-400 text-2xl" />,
  };

  return (
    <Element name="skills" className="pt-20 px-4 sm:px-6 md:px-12">
      <div>
        <motion.h3
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white drop-shadow-[0_0_5px_rgba(0,191,255,0.9)] mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Tech Stack
        </motion.h3>

        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="mb-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h4 className="text-xl sm:text-2xl text-gray-400 font-semibold mb-4 text-center">
              {category.name}
            </h4>

            <motion.section
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              <ul className="flex flex-wrap justify-center gap-4">
                {category.list.map((tech, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded-xl shadow text-sm sm:text-base"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {techIcons[tech] || <span className="text-2xl">💻</span>}{" "}
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </motion.div>
        ))}
      </div>
    </Element>
  );
};

export default Skills;

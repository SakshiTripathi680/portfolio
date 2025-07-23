// no changes in imports
import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseURL}/api/about`)
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((err) => console.error("Error fetching about data:", err));
  }, [baseURL]);

  if (!aboutData) return <p className="p-10 text-white">Loading...</p>;

  return (
    <Element name="about" className="pt-20">
      <motion.section
        className="p-6 md:p-10 text-white w-full min-h-screen flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="flex md:flex-col text-4xl md:text-5xl font-bold text-center animate-bounce">
          Hi, I am
          <span className="block text-6xl sm:text-7xl md:text-8xl drop-shadow-[0_0_5px_rgba(0,191,255,0.9)]">
            Sakshi
          </span>
        </h2>
        <p className="mt-4 text-xl md:text-2xl text-center">{aboutData.tagline}</p>
        <p className="mt-2 text-lg md:text-2xl text-center">{aboutData.description}</p>
        <button className="mt-8 px-6 py-2 text-xl md:text-2xl border border-none bg-blue-600 rounded-2xl hover:bg-blue-800 shadow-lg shadow-blue-500/50">
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
            View Projects
          </Link>
        </button>
      </motion.section>

      <div className="w-full min-h-screen mt-10 bg-gray-900 text-white flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 👈 Left Column – Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
            className="flex justify-center"
          >
            <img
              src="/profile.jpg"
              alt="Sakshi Tripathi"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
            />
          </motion.div>

          {/* 👉 Right Column – Bio */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Hi! I'm{" "}
              <span className="text-white font-semibold">Sakshi Tripathi</span>,
              a passionate and dedicated web developer who loves turning ideas into reality through code.
              I'm especially drawn to building interactive full-stack applications and am actively{" "}
              <span className="text-cyan-300 font-medium">seeking opportunities</span>{" "}
              to grow and contribute in the tech world.
            </p>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}

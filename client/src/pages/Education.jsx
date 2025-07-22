import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Element } from "react-scroll";

const EducationCard = ({ edu, index }) => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({
        y: index === 0 ? -100 : 100,
        opacity: 0,
      });
    }
  }, [isInView, index, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{
        y: index === 0 ? -100 : 100,
        opacity: 0,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-900 text-white rounded-xl p-6 shadow-lg transition-transform hover:scale-105 duration-200"
    >
      <h2 className="text-xl font-bold text-cyan-400">{edu.degree}</h2>
      <p className="text-sm text-gray-300">{edu.institution}</p>
      <p className="text-xs text-gray-400">{edu.duration}</p>
    </motion.div>
  );
};

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/education")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((err) => console.error("Error fetching education data:", err));
  }, []);

  if (!education.length) {
    return <p className="p-10 text-white">Loading...</p>;
  }

  return (
    <Element name="education" className="pt-20">
      <div className="p-10 flex flex-col gap-6">
        <h2 className="text-white text-6xl font-bold text-center mb-12 drop-shadow-[0_0_5px_rgba(0,191,255,0.9)]">
          Education
        </h2>
        {education.map((edu, index) => (
          <EducationCard key={edu._id || index} edu={edu} index={index} />
        ))}
      </div>
    </Element>
  );
};

export default Education;

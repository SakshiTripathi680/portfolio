import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  const baseURL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    fetch(`${baseURL}/api/experience`)
      .then((res) => res.json())
      .then((data) => setExperience(data))
      .catch((err) => console.error("Error fetching experience data:", err));
  }, [baseURL]);

  if (!experience) return <p className="p-10 text-white">Loading...</p>;

  return (
    <Element name="experience" className="pt-20">
      <div className="relative px-4 md:px-6 py-10 bg-black min-h-screen">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 drop-shadow-[0_0_5px_rgba(0,191,255,0.9)]">
          Experience
        </h2>

        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-400"></div>

        <div className="space-y-16">
          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 px-4 ${
                    isLeft ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div className="bg-cyan-600 hover:bg-cyan-800 text-white p-6 rounded-xl shadow-lg border border-cyan-500 transition-transform hover:scale-105 duration-300">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {exp.designation}
                    </h3>
                    <p className="text-sm italic mb-1">{exp.company}</p>
                    <p className="text-sm text-cyan-100 mb-2">{exp.timeline}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </div>

                {/* Dot on the line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 border-4 border-white rounded-full z-8 hidden md:block"></div>
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Experience;

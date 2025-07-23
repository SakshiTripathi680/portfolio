import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseURL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    fetch(`${baseURL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else if (Array.isArray(data.projects)) {
          setProjects(data.projects);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects data:", err);
        setLoading(false);
      });
  }, [baseURL]);

  if (loading) return <p className="p-10 text-white">Loading...</p>;

  return (
    <Element name="projects" className="pt-20">
      <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-center drop-shadow-[0_0_5px_rgba(0,191,255,0.9)]">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="w-full h-48 sm:h-52 md:h-56 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xl font-bold text-white">
                    Coming Soon
                  </span>
                )}
              </div>

              <div className="p-4 sm:p-6 flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 px-2 py-1 rounded-full text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,191,255,0.9)] transition-transform hover:scale-105 duration-300 text-sm border rounded-full px-3 py-1 w-fit"
                    >
                      View on GitHub
                    </a>
                  )}

                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-black bg-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,191,255,0.9)] hover:scale-105 duration-300 text-sm border rounded-full px-3 py-1 w-fit ">Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;

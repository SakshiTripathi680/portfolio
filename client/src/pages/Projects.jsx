import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        // handle if backend returns { message, projects }
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
  }, []);

  if (loading) return <p className="p-10 text-white">Loading...</p>;

  return (
    <Element name="projects" className="pt-20">
      <div className="min-h-screen bg-black text-white p-6 md:p-10">
        <h2 className="text-6xl font-bold mt-15 mb-18 text-center drop-shadow-[0_0_5px_rgba(0,191,255,0.9)]">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Placeholder for image */}
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 px-2 py-1 rounded-full text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,191,255,0.9)] transition-transform hover:scale-105 duration-300 text-sm mt-2 border rounded-full px-3 py-1 w-fit "
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;

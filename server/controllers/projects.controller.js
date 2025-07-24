import Project from "../models/project.model.js";

// GET: /api/projects
export const getProjects = async (req, res) => {
  try {
    const myProjects = await Project.find().sort({ createdAt: -1 });
    res.json(myProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST: /api/projects
export const postProjects = async (req, res) => {
  try {
    // This is for dynamic data
    // const project = new Project(req.body);
    // await project.save();

    // This is for the static data
    await Project.deleteMany();

    const projects = await Project.insertMany([
      {
        image: "https://sakshitripathi-portfolio.vercel.app/PortfolioDemo.png",
        title: "Portfolio Website",
        description: "A full-stack personal portfolio website built with the MERN stack, featuring dynamic project updates and a sleek, animated, responsive UI. Includes an admin dashboard for easy content management directly from the database.",
        techStack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/SakshiTripathi680/portfolio",
        demoLink: "https://sakshitripathi-portfolio.vercel.app/"
      },
      {
        image: "",
        title: "Gmail Clone",
        description: "Developed a full-stack Gmail clone with React, Node.js, and MongoDB, enabling users to send, view, and manage emails. Built RESTful APIs with Express and added user authentication with protected routes for a secure, Gmail-like experience.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        githubLink: "https://github.com/SakshiTripathi680/gmail-clone",
        demoLink: ""
      },
      {
        image: "",
        title: "YouTube Clone",
        description: "Developed a responsive YouTube clone using React and Tailwind CSS with sidebar navigation, video grid, and dark mode. Integrated YouTube Data API v3 and React Router for dynamic content rendering and seamless SPA navigation.",
        techStack: ["React", "Tailwind CSS", "React", "Node.js", "MongoDB", "Express"],
        githubLink: "https://github.com/SakshiTripathi680/youtube-clone",
        demoLink: ""
      },
      {
        image: "https://sakshitripathi-portfolio.vercel.app/TypyingGameDemo.png",
        title: "Typing Speed Game",
        description: "Developed a web-based typing game with real-time feedback, WPM and accuracy tracking, and best score saved via localStorage. Built a fully responsive, cross-device UI for an engaging user experience.",
        techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        githubLink: "https://github.com/SakshiTripathi680/typing-speed-game",
        demoLink: "https://sakshi-typing-game.netlify.app/"
      },
      {
        image: "",
        title: "To-Do List App",
        description: "Built a to-do list application featuring full CRUD operations with persistent local data storage. Implemented reusable components, filtering features, and managed state using React Hooks. Focused on intuitive user experience and clean design to enhance productivity.",
        techStack: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/SakshiTripathi680/todo-app",
        demoLink: "https://sakshi-todo-app.netlify.app/"
      },
    ]);
    res.status(201).json({ message: "Projects created!", projects });
  } catch(error){
    res.status(500).json({ error: error.message });
  }
};

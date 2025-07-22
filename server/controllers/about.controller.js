import About from "../models/about.model.js";

// GET: /api/about
export const getAbout = async (req, res) => {
  try {
    const aboutMe = await About.findOne();
    res.json(aboutMe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST: /api/about
export const postAbout = async (req, res) => {
  try {
    await About.deleteMany();

    // This is for dynamic data
    // const about = new About(req.data);

    // This is static data
    const about = new About({
      name: "Sakshi Tripathi",
      tagline: "Full Stack Developer | FAANG Dreamer",
      description: "Passionate developer, bug squasher, and code bender learning full stack dev.",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "C++"],
    });

    await about.save();
    res.status(201).json({ message: "About created", about });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import Skills from '../models/skills.model.js';

// GET: /api/skills
export const getSkills = async (req, res) => {
    try{
        const skills = await Skills.find();
        res.json(skills);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

// POST: /api/skills
export const postSkills = async (req, res) => {
    try{
        await Skills.deleteMany();

        const skills = await Skills.insertMany([
            {
                name: "Programming Languages",
                list: ["HTML", "CSS", "JavaScript", "C", "C++", "Python"]
            },
            {
                name: "Frameworks",
                list: ["React", "Next.js", "Express.js", "Tailwind CSS"]
            },
            {
                name: "Libraries",
                list: ["Framer Motion","React Router", "Mongoose"]
            },
            {
                name: "Tools & Utilities",
                list: ["Vite", "Nodemon", "Git", "Github", "Postman", "VS Code"]
            },
            {
                name: "Databases",
                list: ["MongoDB"]
            },
            {
                name: "Runtime Environments",
                list: ["Node.js"]
            }
        ])
        res.status(201).json({message: "Skills created!", skills});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

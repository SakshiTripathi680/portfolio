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
                name: "Frontend",
                list: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Framer Motion", "C", "C++", "Python", "Vite"]
            },
            {
                name: "Backend",
                list: ["Node.js", "Express.js", "React Router", "Next.js", "Nodemon"]
            },
            {
                name: "Database",
                list: ["MongoDB", "Mongoose"]
            },
            {
                name: "Tools",
                list: ["Git", "Github", "Postman", "VS Code"]
            }
        ])
        res.status(201).json({message: "Skills created!", skills});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

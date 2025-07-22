import Experience from '../models/experience.model.js';

// GET: /api/experience
export const getExperience = async (req, res) => {
    try{
        const experiences = await Experience.find();
        res.json(experiences);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

// POST: /api/experience
export const postExperience = async (req, res) => {
    try{
        await Experience.deleteMany();

        const experience = await Experience.insertMany([
            {
                designation: "Quality Engineer",
                company: "Conformity Testing Laboratory",
                timeline: "Nov 2024 – Jan 2025",
                description: "Performed QA testing on electronic products, ensuring regulatory compliance and industry standards. Documented technical reports and compliance records for audits and certifications. Investigated root causes and coordinated with teams to implement corrective actions and improve reliability."
                   
            },
            {
                designation: "Testing Trainee",
                company: "STQC Delhi (Ministry of Electronics and Communication) ",
                timeline: "May 2023 – Oct 2023",
                description: "Trained in safety testing protocols, EMI/EMC analysis, and regulatory documentation for electronic devices. Assisted senior engineers with technical reporting, data analysis, and compliance documentation. Supported lab operations through equipment checks, data logging, and calibration tasks."
            },
            {
                designation: "Networking and Cybersecurity Intern",
                company: "BSNL ALTTC",
                timeline: "Jul 2022 – Sep 2022",
                description: " Trained in IP addressing, subnetting, OSPF/BGP routing, and core networking concepts. Worked on telecom security systems, firewall setups, and network vulnerability assessments. Assisted with network monitoring, troubleshooting, and implementing cybersecurity best practices."
            }
        ])
        res.status(201).json({message: "Experience created!", experience})
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}
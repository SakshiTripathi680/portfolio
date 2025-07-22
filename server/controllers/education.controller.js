import Education from "../models/education.model.js";

// GET: /api/education
export const getEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST: /api/education
export const postEducation = async (req, res) => {
  try {
    await Education.deleteMany();

    const education = await Education.insertMany([
      {
        degree: "B.Tech in Electronics And Communication Engineering",
        institution: "Dronacharya Group of Institutions, Greater Noida",
        duration: "2019 - 2023",
      },
      {
        degree: "Schooling",
        institution: "The Mann School, Delhi",
        duration: "2009 - 2019"
      }
    ]);
    res.status(201).json({ message: "Education created", education });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

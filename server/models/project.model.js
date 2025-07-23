import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String],
    githubLink: { type: String, required: true },
    demoLink: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);

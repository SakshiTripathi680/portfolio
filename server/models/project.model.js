import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  image: {type: String, required: true},
  title: { type: String, required: true },
  description: String,
  techStack: [String],
  githubLink: String,
}, { timestamps: true })

export default mongoose.model('Project', ProjectSchema)

import mongoose from 'mongoose'

const AboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tagline: String,
  description: String,
  techStack: [String], // example: ['React', 'Node.js', 'MongoDB']
}, { timestamps: true })

export default mongoose.model('About', AboutSchema)

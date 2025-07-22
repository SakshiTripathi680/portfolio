// server/index.js
import express from 'express'
import connectDB from './db/connectDB.js'
import cors from 'cors'
import dotenv from 'dotenv'
import aboutRoutes from './routes/about.route.js'
import experienceRoutes from './routes/experience.route.js'
import educationRoutes from './routes/education.route.js'
import skillsRoutes from './routes/skills.route.js'
import projectRoutes from './routes/project.route.js'
import contactRoutes from './routes/contact.route.js'

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use('/api/about', aboutRoutes)
app.use('/api/experience', experienceRoutes)
app.use('/api/education', educationRoutes)
app.use('/api/skills', skillsRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/contact', contactRoutes)

app.get('/', (req, res) => {
  res.send('Portfolio backend is live!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
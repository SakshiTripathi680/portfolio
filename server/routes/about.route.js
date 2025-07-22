// server/routes/about.js
import express from 'express'
import { getAbout, postAbout } from '../controllers/about.controller.js'

const router = express.Router()

// GET /api/about
router.route('/').get(getAbout);
// POST: /api/about
router.route('/').post(postAbout);

export default router

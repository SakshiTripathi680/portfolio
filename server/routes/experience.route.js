import express from 'express';
import { getExperience, postExperience } from '../controllers/experience.controller.js';

const router = express.Router();

// GET: /api/experience
router.route('/').get(getExperience);
// POST: /api/experience
router.route('/').post(postExperience);

export default router;
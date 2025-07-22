import express from 'express';
import { getEducation, postEducation } from '../controllers/education.controller.js';

const router = express.Router();

// GET: /api/educatiom
router.route('/').get(getEducation);
// POST: /api/education
router.route('/').post(postEducation);

export default router;
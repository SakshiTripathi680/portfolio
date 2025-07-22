import express from 'express';
import { getSkills, postSkills } from '../controllers/skills.controller.js';

const router = express.Router();
// GET: /api/skills
router.route('/').get(getSkills);
// Post: /api/skills
router.route('/').post(postSkills);
// // 👇 TEMP route to trigger skills setup from browser
// router.get('/seed', async (req, res) => {
//   await postSkills(req, res);
// });

export default router;
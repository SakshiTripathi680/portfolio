import express from "express";
import { getProjects, postProjects } from "../controllers/projects.controller.js";

const router = express.Router();

// GET /api/projects
router.route('/').get(getProjects);
// POST /api/projects
router.route('/').post(postProjects);

export default router;

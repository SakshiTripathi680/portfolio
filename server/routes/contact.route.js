import express from 'express';
import {getContact, postContact} from '../controllers/contact.controller.js'

const router = express.Router();

// GET: /api/contact
router.route('/').get(getContact)
// POST: /api/contact
router.route('/').post(postContact)

export default router;
import express from 'express'
import { addproblems } from '../../database/db.js';
addproblems();
const router = express.Router();
// router.route('/').get();
export default router;
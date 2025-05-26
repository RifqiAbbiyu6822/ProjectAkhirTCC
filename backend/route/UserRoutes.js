
import express from 'express';
import { register, login, getUserProfile } from '../controller/userController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/profile', authenticateToken, getUserProfile);

export default router;

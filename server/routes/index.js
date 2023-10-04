import express from 'express';
import {
  Register,
  getUsers,
  Login,
  Logout,
  ForgotPassword,
  newPassword
} from '../controllers/user.controller.js';

import { verifyToken } from '../middleware/verifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/login', Login);
router.post('/register', Register);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

/* forgot password */
router.post('/forgotpassword', ForgotPassword);
router.post('/newPassword/:token', newPassword);

export default router;
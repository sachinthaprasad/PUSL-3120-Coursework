import express from 'express';
import {register,registerAdmin, login} from '../controllers/auth.controller.js';


const router = express.Router();


// register users in Database
router.post('/register', register);

// login
router.post("/login", login);

//register as an admin
router.post("/register-admin",registerAdmin);

export default router;


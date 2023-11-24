import express from 'express';
import { getAllUsers, getByID } from '../controllers/user.controller.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// get all the users
router.get('/', verifyAdmin, getAllUsers);  // only the admin is allowed to get all the users list 

// get by id
router.get('/:id', verifyUser, getByID);  // only the logged in user is allowed to view info

export default router;

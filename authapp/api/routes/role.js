import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRole, getAllRoles, updateRole, deleteRole } from "../controllers/role.controller.js";

const router = express.Router();

// create a new role in DB
router.post('/create', verifyAdmin, createRole);

// Update role in DB

router.put('/update/:id', updateRole);

// Getting all the roles from the Database

router.get('/getAll',getAllRoles);


// Delete role in DB
router.delete('/deleteRole/:id', verifyAdmin, deleteRole);

export default router;



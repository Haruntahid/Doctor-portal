import express from "express";
import {createUser} from '../controllers/AuthController';

const router = express.Router();

// POST /api/v1/auth/register - Register a new user [here user is the DOCTOR]
router.post("/register", createUser);

export default router;
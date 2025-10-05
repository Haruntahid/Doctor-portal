import express from "express";
import {
    getTest,
    createTest,
    getTestById,
    updateTest,
    deleteTest
} from "../controllers/TestController";

const router = express.Router();

// GET /api/test - Get all tests
router.get("/", getTest);

// POST /api/test - Create a test
router.post("/", createTest);

// GET /api/test/:id - Get test by ID
router.get("/:id", getTestById);

// PUT /api/test/:id - Update test
router.put("/:id", updateTest);

// DELETE /api/test/:id - Delete test
router.delete("/:id", deleteTest);

export default router;
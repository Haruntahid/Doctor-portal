
import { Request, Response } from "express";

// GET /api/test
export const getTest = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: "Test API is working! 🚀",
        timestamp: new Date(),
        data: {
            version: "1.0.0",
            status: "active"
        }
    });
};

// POST /api/test
export const createTest = (req: Request, res: Response) => {
    const { name, value } = req.body;

    if (!name || !value) {
        return res.status(400).json({
            success: false,
            error: "Name and value are required"
        });
    }

    res.status(201).json({
        success: true,
        message: "Test data created successfully",
        data: {
            id: Math.floor(Math.random() * 1000),
            name,
            value,
            createdAt: new Date()
        }
    });
};

// GET /api/test/:id
export const getTestById = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        success: true,
        data: {
            id: parseInt(id),
            name: "Test Item",
            value: "Sample Value",
            createdAt: new Date()
        }
    });
};

// PUT /api/test/:id
export const updateTest = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, value } = req.body;

    res.json({
        success: true,
        message: "Test data updated successfully",
        data: {
            id: parseInt(id),
            name,
            value,
            updatedAt: new Date()
        }
    });
};

// DELETE /api/test/:id
export const deleteTest = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        success: true,
        message: `Test item ${id} deleted successfully`
    });
};
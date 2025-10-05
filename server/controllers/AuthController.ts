import bcrypt from "bcrypt";
// const jwt = require("jsonwebtoken");
import Users from "../models/User.js";
import {Request, Response} from "express";


// here user is doctor and the creator is admin
export const createUser = async (req: Request, res: Response) => {
    const {username, password} = req.body;

    const user = await Users.findOne({username});
    if (user) {
        return res.status(400).json({
            success: false,
            error: "User already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
        username,
        password: hashedPassword,
        role: "DOCTOR" // here doctor is the role
    })
    res.status(201).json({
        success: true,
        message: "User created",
        data: {
            user: newUser
        }
    })
}
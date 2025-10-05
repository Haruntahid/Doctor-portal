import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const User = sequelize.define(
    "Users",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            // @ts-ignore
            unique: {
                msg: "Username must be unique",
            },
            validate: {
                notEmpty: { msg: "Username is required" },
                len: {
                    args: [3, 100],
                    msg: "Username must be between 3 and 100 characters",
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Password is required" },
            },
        },
        role: {
            type: DataTypes.ENUM("DOCTOR", "ADMIN"),
            allowNull: false,
            defaultValue: "DOCTOR",
            validate: {
                isIn: {
                    args: [["ADMIN", "DOCTOR"]],
                    msg: "Role must be ADMIN or DOCTOR",
                },
            },
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        timestamps: false,
    }
);

export default User;
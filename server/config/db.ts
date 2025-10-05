import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // ✅ load .env at the top
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_HOST:", process.env.DB_HOST);

// @ts-ignore
const sequelize = new Sequelize(
    // @ts-ignore
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        logging: false,
    }
);

export default sequelize;

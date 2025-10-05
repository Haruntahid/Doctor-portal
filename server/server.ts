import express, { Request, Response } from "express";
import sequelize from "./config/db";
import dotenv from "dotenv";
import authRoutes from "./routes/AuthRoutes.ts";

dotenv.config();

const app = express();
app.use(express.json());

// DB Connection Test
sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err: any) => console.error("❌ DB connection error:", err));

app.get("/", (req: Request, res: Response) => {
  res.send("API is working 🚀");
});

// app.get("/api/test", (req: Request, res: Response) => {
//     res.send("Hello man")
// })

// auth routes
app.use("/api/auth", authRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

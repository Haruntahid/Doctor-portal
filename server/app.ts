import express from "express";
// @ts-ignore
import cors from "cors";
import sequelize from "./config/db";
import testRoutes from "./routes/TestRoutes";
import authRoutes from "./routes/AuthRoutes";

const app = express();

app.use(express.json());
app.use(cors());

// Test DB connection
sequelize
    .authenticate()
    .then(() => console.log("✅ Database connected successfully"))
    .catch((err: any) => console.error("❌ DB connection error:", err));

// Routes
app.get("/", (req, res) => {
    res.json({ message: "API is working 🚀" });
});

app.use("/api/test", testRoutes);

// auth routes
app.use("/api/auth", authRoutes);

export default app;
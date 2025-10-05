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
(async () => {
    try {
        // DB connection test
        await sequelize.authenticate();
        console.log("✅ Database connected successfully");

        // Sync tables automatically
        await sequelize.sync({alter: true});
        console.log("✅ Tables synced successfully (alter: true)");
    } catch (err) {
        console.error("❌ DB error:", err);
    }
})();


// Routes
app.get("/", (req, res) => {
    res.json({message: "API is working 🚀"});
});

app.use("/api/test", testRoutes);

// auth routes
app.use("/api/auth", authRoutes);

export default app;
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import timesheetRoutes from "./routes/timesheetRoutes.js";

dotenv.config();

const app = express();

// ✅ Step 1: Configure CORS properly
app.use(
  cors({
    origin: ["http://localhost:3000", "https://timesheet-backend-ra46.onrender.com/api"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Step 2: Define routes
app.use("/api/auth", authRoutes);
app.use("/api/timesheet", timesheetRoutes);


// ✅ Step 3: Default route
app.get("/", (req, res) => {
  res.send("Timesheet Backend is running 🚀");
});

// ✅ Step 4: MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Step 5: Use Render dynamic port
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("✅ Timesheet Backend API is live and public!");
});


app.listen(PORT, "0.0.0.0", () => console.log(`🚀 Server running on port ${PORT}`));


import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

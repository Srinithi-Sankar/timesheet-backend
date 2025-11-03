import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import timesheetRoutes from "./routes/timesheet.js"; // ✅ make sure this file exists

dotenv.config();
const app = express();

app.use(
  cors({
    origin: ["https://timesheet-frontend-qkmc.onrender.com", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Explicitly handle OPTIONS preflight
app.options("*", cors());

app.use(express.json());

// ✅ Add routes
app.use("/auth", authRoutes);
app.use("/timesheet", timesheetRoutes); // ✅ mount your timesheet routes here

app.get("/", (req, res) => {
  res.send("✅ Timesheet backend is live on Render!");
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"; // ✅ correct path

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Add your routes here
app.use("/auth", authRoutes);

// Default route (for Render health check)
app.get("/", (req, res) => {
  res.send("✅ Timesheet backend is live on Render!");
});

// MongoDB + Server Start
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error));

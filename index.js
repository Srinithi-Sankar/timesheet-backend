import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import timesheetRoutes from "./routes/timesheet.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Existing routes
import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);
app.use("/api/timesheet", timesheetRoutes);

mongoose.connect('mongodb+srv://srinithisankar08_db_user:16hLg5nXuDJDsF1u@timesheet-app.tgc0jt5.mongodb.net/timesheetDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => console.log("Server running on port 5000"));

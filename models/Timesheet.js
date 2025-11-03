import mongoose from "mongoose";

const timesheetSchema = new mongoose.Schema({
  date: String,
  project: String,
  task: String,
  hours: Number,
  description: String,
});

export default mongoose.model("Timesheet", timesheetSchema);

import mongoose from "mongoose";

const timesheetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: { type: Date, required: true },
  project: { type: String, required: true },
  task: { type: String, required: true },
  hours: { type: Number, required: true },
  description: { type: String },
});

export default mongoose.model("Timesheet", timesheetSchema);

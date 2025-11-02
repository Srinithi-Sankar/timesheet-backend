import Timesheet from "../models/Timesheet.js";

// ✅ Add Timesheet Entry
export const addTimesheetEntry = async (req, res) => {
  try {
    const { userId, date, project, task, hours, description } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const newEntry = new Timesheet({
      userId,
      date,
      project,
      task,
      hours,
      description,
    });

    await newEntry.save();
    res.status(201).json({ message: "Entry added successfully", entry: newEntry });
  } catch (error) {
    console.error("Timesheet add error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get Timesheet Entries for a user
export const getTimesheetEntries = async (req, res) => {
  try {
    const { userId } = req.params;
    const entries = await Timesheet.find({ userId });
    res.status(200).json(entries);
  } catch (error) {
    console.error("Get entries error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



export const deleteTimesheetEntry = async (req, res) => {
  try {
    const { entryId } = req.params;
    await Timesheet.findByIdAndDelete(entryId);
    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete entry" });
  }
};

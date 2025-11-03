import Timesheet from "../models/Timesheet.js";

export const getEntries = async (req, res) => {
  try {
    const entries = await Timesheet.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addEntry = async (req, res) => {
  try {
    const newEntry = new Timesheet(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteEntry = async (req, res) => {
  try {
    await Timesheet.findByIdAndDelete(req.params.id);
    res.json({ message: "Entry deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

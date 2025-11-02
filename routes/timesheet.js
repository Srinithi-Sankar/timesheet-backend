import express from "express";
import { addTimesheetEntry, getTimesheetEntries, deleteTimesheetEntry } from "../controllers/timesheetController.js";

const router = express.Router();

router.post("/", addTimesheetEntry);
router.get("/:userId", getTimesheetEntries);
router.delete("/:entryId", deleteTimesheetEntry);

export default router;

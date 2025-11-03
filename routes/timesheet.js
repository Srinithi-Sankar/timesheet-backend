import express from "express";
import { getEntries, addEntry, deleteEntry } from "../controllers/timesheetController.js";

const router = express.Router();

router.get("/", getEntries);
router.post("/add", addEntry);
router.delete("/:id", deleteEntry);

export default router;

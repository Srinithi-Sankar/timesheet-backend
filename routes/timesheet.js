import express from "express";
import { getEntries, addEntry, deleteEntry } from "../controllers/timesheetController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getEntries);
router.post("/add", protect, addEntry);
router.delete("/:id", protect, deleteEntry);

export default router;

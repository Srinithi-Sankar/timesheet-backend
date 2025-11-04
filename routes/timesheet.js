import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getEntries, addEntry, deleteEntry } from "../controllers/timesheetController.js";

const router = express.Router();

// Protect all routes with authentication
router.get("/", protect, getEntries);
router.post("/add", protect, addEntry);
router.delete("/:id", protect, deleteEntry);

export default router;

import express from "express";
import {
  getEntries,
  addEntry,
  deleteEntry,
} from "../controllers/timesheetController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // ✅ import middleware

const router = express.Router();

// ✅ Protect all routes with authMiddleware
router.get("/", authMiddleware, getEntries);
router.post("/add", authMiddleware, addEntry);
router.delete("/:id", authMiddleware, deleteEntry);

export default router;

// backend/routes/courses.js
import express from "express";
import Course from "../models/Course.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();


// GET all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET single course
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ADD new course (Protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const savedCourse = await newCourse.save();
    res.json(savedCourse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
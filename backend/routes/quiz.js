// backend/routes/quiz.js
import express from "express";
import Quiz from "../models/Quiz.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();


// GET all quizzes
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET single quiz
router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// CREATE quiz (Protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    const savedQuiz = await newQuiz.save();
    res.json(savedQuiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
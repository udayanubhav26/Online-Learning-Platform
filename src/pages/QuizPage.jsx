import { useState } from "react";
import "../styles/quiz.css";

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library",
  },
  {
    question: "What hook is used for state?",
    options: ["useEffect", "useState", "useContext", "useRef"],
    answer: "useState",
  },
  {
    question: "Which company created React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    answer: "Facebook",
  },
];

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const progressPercent = ((current + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div className="quiz-card">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <h2 className="question">
            {questions[current].question}
          </h2>

          <div className="options">
            {questions[current].options.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  selected === option ? "selected" : ""
                }`}
                onClick={() => setSelected(option)}
              >
                {option}
              </div>
            ))}
          </div>

          <button
            className="next-btn"
            disabled={!selected}
            onClick={handleNext}
          >
            {current === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div className="result-card">
          <h2>Quiz Completed 🎉</h2>
          <p>Your Score:</p>
          <div className="score">
            {score} / {questions.length}
          </div>
          <button
            onClick={() => window.location.reload()}
            className="restart-btn"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
import React, { useEffect, useState } from "react";
import QuizItem from "./QuizItem";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("/api/questions");
      const data = await response.json();
      setQuestions(data);
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });
    const data = await response.json();
    if (data.success) setSubmitted(true);
  };

  if (submitted) {
    return <div>Quiz submitted! Check your results.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Take the Quiz</h1>
      {questions.map((q) => (
        <QuizItem key={q.id} question={q} onAnswer={handleAnswer} />
      ))}
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default Quiz;

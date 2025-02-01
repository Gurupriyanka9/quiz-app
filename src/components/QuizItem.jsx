import React, { useState } from "react";

const QuizItem = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (option) => {
    setSelected(option);
    onAnswer(question.id, option);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">{question.text}</h2>
      {question.options.map((option) => (
        <button
          key={option}
          className={`block p-2 border ${
            selected === option
              ? option === question.correctAnswer
                ? "bg-green-200"
                : "bg-red-200"
              : ""
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizItem;

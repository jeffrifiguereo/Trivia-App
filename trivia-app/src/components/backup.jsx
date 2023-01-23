import React from 'react';

const Question = (props) => {
  const { question, options, handleAnswerSelection, selectedOption, isCorrect } = props;

  return (
    <div className="question-container">
      <p className="question-text">{question.question}</p>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              option === selectedOption
                ? isCorrect
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleAnswerSelection(option, question.correct_answer)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

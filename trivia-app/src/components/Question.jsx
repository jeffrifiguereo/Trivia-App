import React, { useState } from 'react';

const Question = ({ question, options, handleAnswerSelection, selectedAnswer }) => {
  const [answerSelected, setAnswerSelected] = useState(false);

  const handleOptionClick = (selectedOption) => {
    setAnswerSelected(true);
    handleAnswerSelection(selectedOption);
  }

  return (
    <div className="question-container">
      <h3 className="question-text" 
      dangerouslySetInnerHTML={{__html: question.question}}
      ></h3>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${answerSelected && option === selectedAnswer ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

import React, { useState } from 'react';

const decodeHTML = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

const Question = ({ question, options, handleAnswerSelection, selectedAnswer }) => {
  const [answerSelected, setAnswerSelected] = useState(false);

  const handleOptionClick = (selectedOption) => {
    setAnswerSelected(true);
    handleAnswerSelection(selectedOption);
  }

  return (
    <div className="question-container">
      <h3 className="question-text">{decodeHTML(question.question)}</h3>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${answerSelected && option === selectedAnswer ? 'selected' : ''}`}
            onClick={() => handleOptionClick(decodeHTML(option))}
          >
            {decodeHTML(option)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
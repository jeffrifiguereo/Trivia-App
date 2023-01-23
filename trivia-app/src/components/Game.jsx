import React, { useState } from "react";
import Question from "./Question";

const Game = (props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAnswerSelection = (selectedOption) => {
    setSelectedAnswers([...selectedAnswers, { questionIndex: currentQuestionIndex, answer: selectedOption }]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleSubmit = () => {
    setIsDisabled(true);
    const newScore = selectedAnswers.reduce((acc, curr) => {
      if (props.questions[curr.questionIndex].correct_answer === curr.answer) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    setScore(newScore);
  };

  if (props.questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  return (
    <div className="game-container">
      {props.questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          options={question.incorrect_answers.concat(question.correct_answer)}
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswers.find((answer) => answer.questionIndex === index)}
        />
      ))}
      {currentQuestionIndex === props.questions.length ? (
        <div className="submit-container">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : null}
      {score > -1 && (
        <div className="score-container">
          You scored {score}/{props.questions.length} correct answers
        </div>
      )}
      {isDisabled && (
        <div className="play-again-container">
          <button onClick={props.handlePlayAgain}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default Game;








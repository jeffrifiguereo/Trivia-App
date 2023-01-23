import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import Home from './components/Home';

function App() {
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');
  const [category, setCategory] = useState(9);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);

  useEffect(() => {
    if (quizStarted) {
      const fetchQuestions = () => {
      fetch(`https://opentdb.com/api.php?amount=5&difficulty=${difficulty}&category=${category}&type=multiple`)
        .then(response => response.json())
        .then(data => setQuestions(data.results))
        .catch(error => console.error(error))
  }

      fetchQuestions();
    }
  }, [difficulty, category, quizStarted]);

  const handlePlayAgain = () => {
    setQuestions([]);
    setDifficulty("easy");
    setCategory("9");
  };


  return (
    <div className="App">
      <Home
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        category={category}
        setCategory={setCategory}
        handleStartClick={() => setQuizStarted(true)}
        
/>
      {quizStarted && questions.length > 0 && (
    <Game questions={questions} setCurrentQuestionIndex={setCurrentQuestionIndex} 
    currentQuestionIndex={currentQuestionIndex} score={score} setScore={setScore}
    selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} handlePlayAgain={handlePlayAgain} />
)}
    </div>
  );
}

export default App


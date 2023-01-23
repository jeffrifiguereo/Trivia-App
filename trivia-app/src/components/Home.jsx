import React, { useState } from "react";

const Home = ({ setDifficulty, setCategory, handleStartClick }) => {
  const [difficulty, setSelectedDifficulty] = useState("easy");
  const [category, setSelectedCategory] = useState(9);

  const handleDifficultySelection = (e) => {
    setSelectedDifficulty(e.target.value);
  };

  const handleCategorySelection = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="difficulty-container">
        <label>Difficulty:</label>
        <select
          className="difficulty-select"
          onChange={handleDifficultySelection}
          value={difficulty}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="category-container">
        <label>Category:</label>
        <select
          className="category-select"
          onChange={handleCategorySelection}
          value={category}
        >
          <option value="9">General Knowledge</option>
          <option value="10">Books</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="13">Musicals & Theatres</option>
        </select>
      </div>
      <button className="start-button" onClick={handleStartClick}>
        Start
      </button>
    </div>
  );
};

export default Home;


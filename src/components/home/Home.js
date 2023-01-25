import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const {
    record,
    Lives,
    Level,
    players,
    currentLevel,
    score,
    setScore,
    setCurrentLevel,
    lives,
    setLives,
    remainingLives,
    setRemainingLives,
    isGameInProgress,
    setIsGameInProgress,
    isGameOver,
    setIsGameOver,
  } = useOutletContext();

  const navigate = useNavigate();

  const startGame = () => {
    setIsGameInProgress(true);
    setLives(Lives[currentLevel]);
    setRemainingLives(Lives[currentLevel]);
    navigate("/game");
  };

  const onLevelChange = (level) => {
    setCurrentLevel(level);
  };

  return (
    <>
      <div>Home</div>
      <div>
        <h3>Choose the difficulty level:</h3>
        <div>
          <input
            type="radio"
            name="level"
            value="Easy"
            id="easy"
            checked={currentLevel === Level.Easy}
            onChange={() => onLevelChange(Level.Easy)}
          />
          <label htmlFor="easy">Easy</label>
        </div>
        <div>
          <input
            type="radio"
            name="level"
            value="Medium"
            id="medium"
            checked={currentLevel === Level.Medium}
            onChange={() => onLevelChange(Level.Medium)}
          />
          <label htmlFor="medium">Medium</label>
        </div>
        <div>
          <input
            type="radio"
            name="level"
            value="Hard"
            id="hard"
            checked={currentLevel === Level.Hard}
            onChange={() => onLevelChange(Level.Hard)}
          />
          <label htmlFor="hard">Hard</label>
        </div>
      </div>
      <button onClick={startGame}>Start the game</button>
    </>
  );
};

export default Home;

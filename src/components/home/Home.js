import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const {
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

  return (
    <>
      <div>Home</div>
      <button onClick={startGame}>Start the game</button>
    </>
  );
};

export default Home;

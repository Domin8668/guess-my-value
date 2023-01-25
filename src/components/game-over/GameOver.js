import React from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import "./GameOver.css";
import formatter from "../../utils/value-formatter";
import Player from "../game/player/Player";

const GameOver = () => {
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

  const { id } = useParams();
  const navigate = useNavigate();

  const lastPlayer = players[id];

  const playAgain = () => {
    setScore(0);
    setRemainingLives(Lives[currentLevel]);
    setIsGameOver(false);
    setIsGameInProgress(true);
    setTimeout(() => navigate("/game"), 500);
  };

  const navigateToHomepage = () => {
    setScore(0);
    setIsGameOver(false);
    navigate("/");
  };

  return (
    <>
      <div>GameOver</div>
      {lastPlayer ? (
        <>
          <div>Previous player:</div>
          <Player
            name={lastPlayer?.name}
            value={formatter(lastPlayer?.value)}
            age={lastPlayer?.age}
            position={lastPlayer?.position}
          />
        </>
      ) : (
        <div>Wrong path</div>
      )}
      <button onClick={playAgain}>Play Again</button>
      <button onClick={navigateToHomepage}>Homepage</button>
    </>
  );
};

export default GameOver;

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

  const lastPlayer = players[id];

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
    </>
  );
};

export default GameOver;

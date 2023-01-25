import React from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import "./GameOver.css";
import formatter from "../../utils/value-formatter";
import Player from "../game/player/Player";
import FunctionButton from "../buttons/functionButton/FunctionButton";

const GameOver = () => {
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
      <div className="game-over-container">
        <div className="game-over-text header-text">GameOver!</div>
        <div className="game-over-text summary">
          Record: {record[currentLevel]}
        </div>
        <div className="game-over-text summary">Score: {score}</div>

        {lastPlayer ? (
          <>
            <div className="game-over-text summary player-text">
              Previous Player
            </div>
            <Player
              name={lastPlayer?.name}
              value={formatter(lastPlayer?.value)}
              age={lastPlayer?.age}
              position={lastPlayer?.position}
              image={lastPlayer?.image_link}
            />
          </>
        ) : (
          <div className="game-over-text summary player-text">Wrong path</div>
        )}
      </div>
      <FunctionButton
        callback={playAgain}
        text={"Play Again"}
        styleClassName={"function"}
      />
      <FunctionButton
        callback={navigateToHomepage}
        text={"Homepage"}
        styleClassName={"function"}
      />
    </>
  );
};

export default GameOver;

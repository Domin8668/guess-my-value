import React, { useEffect } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import "./GameOver.css";
import formatter from "../../utils/value-formatter";
import Player from "../game/player/Player";
import FunctionButton from "../buttons/functionButton/FunctionButton";

const playAgainTimeout = 200;

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

  const navigate = useNavigate();
  useEffect(() => {
    if (!isGameOver) navigate("/");
  }, []);

  const { id } = useParams();

  const lastPlayer = players[id];

  const playAgain = () => {
    setScore(0);
    setRemainingLives(Lives[currentLevel]);
    setIsGameOver(false);
    setIsGameInProgress(true);
    setTimeout(() => navigate("/game"), playAgainTimeout);
  };

  const navigateToHomepage = () => {
    setScore(0);
    setIsGameOver(false);
    navigate("/");
  };

  return (
    <>
      <div className="game-over-container">
        <div className="game-over-info-container">
          <div className="game-over-stats-container">
            <div className="game-over-text header-text">GameOver!</div>
            <div className="game-over-text summary">
              Record: {record[currentLevel]}
            </div>
            <div className="game-over-text summary">Score: {score}</div>
          </div>
          {lastPlayer ? (
            <>
              <Player
                name={lastPlayer?.name}
                value={formatter(lastPlayer?.value)}
                age={lastPlayer?.age}
                position={lastPlayer?.position}
                image={lastPlayer?.image_link}
                styleClassName={"game-over-player"}
              />
            </>
          ) : (
            <div className="game-over-text summary player-text">Wrong path</div>
          )}
        </div>

        <div className="game-over-buttons-container">
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
        </div>
      </div>
    </>
  );
};

export default GameOver;

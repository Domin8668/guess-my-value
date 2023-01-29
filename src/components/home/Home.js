import React from "react";
import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import FunctionButton from "../buttons/functionButton/FunctionButton";
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

  const [backgroundColor, setbackgroundColor] = useState(
    currentLevel.toLowerCase()
  );

  const startGame = () => {
    setIsGameInProgress(true);
    setLives(Lives[currentLevel]);
    setRemainingLives(Lives[currentLevel]);
    navigate("/game");
  };

  const onLevelChange = (level) => {
    setCurrentLevel(level);
    setbackgroundColor(level.toLowerCase());
  };

  return (
    <>
      <div className="home-container">
        <div className="record-diff-container">
          <div className="records-container">
            <div className="record-text">
              Record on Easy:{" "}
              <span className="score-number record-easy">{record.Easy}</span>
            </div>
            <div className="record-text">
              Record on Medium:{" "}
              <span className="score-number record-medium">
                {record.Medium}
              </span>
            </div>
            <div className="record-text">
              Record on Hard:{" "}
              <span className="score-number record-hard">{record.Hard}</span>
            </div>
          </div>

          <div
            className={`records-container radio-buttons-container ${backgroundColor}`}
          >
            <h3 className="record-text record-header">
              Choose the difficulty level:
            </h3>
            <label className="rad-label" htmlFor="easy">
              <input
                className="rad-input"
                type="radio"
                name="level"
                value="Easy"
                id="easy"
                checked={currentLevel === Level.Easy}
                onChange={() => onLevelChange(Level.Easy)}
              />
              <div className="rad-design"></div>
              <div className="rad-text">Easy</div>{" "}
            </label>
            <label className="rad-label" htmlFor="medium">
              <input
                className="rad-input"
                type="radio"
                name="level"
                value="Medium"
                id="medium"
                checked={currentLevel === Level.Medium}
                onChange={() => onLevelChange(Level.Medium)}
              />
              <div className="rad-design"></div>
              <div className="rad-text">Medium</div>
            </label>
            <label className="rad-label" htmlFor="hard">
              <input
                className="rad-input"
                type="radio"
                name="level"
                value="Hard"
                id="hard"
                checked={currentLevel === Level.Hard}
                onChange={() => onLevelChange(Level.Hard)}
              />
              <div className="rad-design"></div>
              <div className="rad-text">Hard</div>{" "}
            </label>
          </div>
        </div>
        <div className="start-game-container">
          <FunctionButton
            callback={startGame}
            text={"Start the game"}
            styleClassName={"function"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useOutletContext, useNavigate, Router } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "./Game.css";
import formatter from "../../utils/value-formatter";
import Score from "./score/Score";
import Player from "./player/Player";
import FunctionButton from "../buttons/functionButton/FunctionButton";

const Choice = {
  Higher: "Higher",
  Lower: "Lower",
};

const showValueTimeout = 1000;

const Game = () => {
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

  const [usedIndexes, setUsedIndexes] = useState([]);
  const [previousPlayer, setPreviousPlayer] = useState(undefined);
  const [newPlayer, setNewPlayer] = useState(undefined);
  const [showValue, setShowValue] = useState(false);
  const [isGuessBlocked, setIsGuessBlocked] = useState(false);
  const [guessPlayerStyle, setguessPlayerStyle] = useState("gray");

  const navigate = useNavigate();

  useEffect(() => {
    setPreviousPlayer(players[getNewIndex()]);
    setNewPlayer(players[getNewIndex()]);
  }, [players]);

  useEffect(() => {
    if (isGameOver) navigate(`/game-over/${usedIndexes.at(-1)}`);
  }, [isGameOver]);

  const getNewIndex = () => {
    let index = Math.floor(Math.random() * 200);
    while (usedIndexes.includes(index)) {
      index = Math.floor(Math.random() * 200);
    }
    setUsedIndexes((prevUsedIndexes) => [...prevUsedIndexes, index]);
    return index;
  };

  const isChoiceCorrect = (choice) => {
    return (
      (parseFloat(previousPlayer.value) >= parseFloat(newPlayer.value) &&
        choice === Choice.Lower) ||
      (parseFloat(previousPlayer.value) <= parseFloat(newPlayer.value) &&
        choice === Choice.Higher)
    );
  };

  const nextTurn = (choice) => {
    if (isChoiceCorrect(choice)) {
      setguessPlayerStyle("green");
      setScore((prevScore) => prevScore + 1);
      getNewPlayers();
    } else {
      setguessPlayerStyle("red");
      setRemainingLives((prevRemainingLives) => {
        if (prevRemainingLives !== 1) getNewPlayers();
        return prevRemainingLives - 1;
      });
    }
  };

  const getNewPlayers = () => {
    setShowValue(true);
    setIsGuessBlocked(true);
    setTimeout(() => {
      setPreviousPlayer(newPlayer);
      setNewPlayer(players[getNewIndex()]);
      setShowValue(false);
      setIsGuessBlocked(false);
      setguessPlayerStyle("gray");
    }, showValueTimeout);
  };

  return (
    <>
      <div className="game-container">
        {previousPlayer && newPlayer ? (
          <div>
            <div className="scoreboard-container">
              <Score
                score={score}
                record={record[currentLevel]}
                livesCount={lives}
                livesLeft={remainingLives}
                level={currentLevel.toLowerCase()}
              />
            </div>
            <div className="players-container">
              <Player
                name={previousPlayer?.name}
                value={formatter(previousPlayer?.value)}
                age={previousPlayer?.age}
                position={previousPlayer?.position}
                image={previousPlayer?.image_link}
                styleClassName={"normal"}
              />
              <Player
                name={newPlayer?.name}
                value={showValue ? formatter(newPlayer?.value) : formatter("?")}
                age={newPlayer?.age}
                position={newPlayer?.position}
                image={newPlayer?.image_link}
                styleClassName={guessPlayerStyle}
              />
            </div>
            <div className="buttons-container">
              <FunctionButton
                callback={() => nextTurn(Choice.Lower)}
                text={"Lower"}
                styleClassName={"lower"}
                isButtonBlocked={isGuessBlocked}
              />
              <FunctionButton
                callback={() => nextTurn(Choice.Higher)}
                text={"Higher"}
                styleClassName={"higher"}
                isButtonBlocked={isGuessBlocked}
              />
            </div>
          </div>
        ) : (
          <ClipLoader loading={!previousPlayer && !newPlayer} size={150} />
        )}
      </div>
    </>
  );
};

export default Game;

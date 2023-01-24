import React, { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "./Game.css";
import formatter from "../../utils/value-formatter";
import Score from "./score/Score";

const Choice = {
  Higher: "Higher",
  Lower: "Lower",
};

const Game = () => {
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

  const [usedIndexes, setUsedIndexes] = useState([]);
  const [previousPlayer, setPreviousPlayer] = useState(undefined);
  const [newPlayer, setNewPlayer] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    setPreviousPlayer(players[getNewIndex()]);
    setNewPlayer(players[getNewIndex()]);
  }, [players]);

  useEffect(() => {
    if (isGameOver) navigate("/game-over");
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
      setScore((prevScore) => prevScore + 1);
    } else {
      setRemainingLives((prevRemainingLives) => prevRemainingLives - 1);
    }
    setPreviousPlayer(newPlayer);
    setNewPlayer(players[getNewIndex()]);
  };

  return (
    <>
      {/* <div>Game</div> */}
      {previousPlayer && newPlayer ? (
        <div>
          <Score score={score} record={score} />
          <div>{previousPlayer?.name}</div>
          <div>{formatter(previousPlayer?.value)}</div>
          <div>{newPlayer?.name}</div>
          <div>{formatter(newPlayer?.value)}</div>
          <button onClick={() => nextTurn(Choice.Higher)} className="higher">
            Higher
          </button>
          <button onClick={() => nextTurn(Choice.Lower)} className="lower">
            Lower
          </button>
          <div>Score: {score}</div>
        </div>
      ) : (
        <ClipLoader loading={!previousPlayer && !newPlayer} size={150} />
      )}
    </>
  );
};

export default Game;

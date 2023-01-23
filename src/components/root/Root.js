import React, { useEffect, useState } from "react";
import "./Root.css";
import players from "../../data/players.json";
import Home from "../home/Home";

const Level = {
  Easy: "Easy",
  Medium: "Medium",
  Hard: "Hard",
};

const Lives = {
  [Level.Easy]: 3,
  [Level.Medium]: 2,
  [Level.Hard]: 1,
};

const Root = () => {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState({
    [Level.Easy]: 0,
    [Level.Medium]: 0,
    [Level.Hard]: 0,
  });
  const [score, setScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(Level.Easy);
  const [lives, setLives] = useState(Lives[currentLevel]);
  const [remainingLives, setRemainingLives] = useState(Lives[currentLevel]);
  const [isGameInProgress, setIsGameInProgress] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    setData(players);
  }, []);

  useEffect(() => {
    const localStorageRecord = JSON.parse(localStorage.getItem("record"));
    if (localStorageRecord) {
      setRecord(localStorageRecord);
    } else {
      updateLocalStorage();
    }
  }, []);

  useEffect(() => {
    if (score > record[currentLevel]) {
      setRecord((record) => ({ ...record, [currentLevel]: score }));
    }
  }, [score]);

  useEffect(() => {
    setScore(0);
  }, [currentLevel]);

  useEffect(() => {
    if (record[currentLevel]) updateLocalStorage();
  }, [record]);

  const updateScore = (record) => {
    setScore(record);
  };

  const updateLocalStorage = () => {
    localStorage.setItem("record", JSON.stringify(record));
  };

  return (
    <div className="main-container">
      <Home
        score={score}
        setScore={setScore}
        level={currentLevel}
        setLevel={setCurrentLevel}
        remainingLives={remainingLives}
        setRemainingLives={setRemainingLives}
        isGameInProgress={isGameInProgress}
        setIsGameInProgress={setIsGameInProgress}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      />
    </div>
  );
};

export default Root;

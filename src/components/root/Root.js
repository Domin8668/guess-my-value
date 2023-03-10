import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./Root.css";
import data from "../../data/players.json";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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
  const [players, setPlayers] = useState([]);
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
    setPlayers(data);
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
    if (!isGameInProgress) {
      setLives(Lives[currentLevel]);
      setRemainingLives(Lives[currentLevel]);
    }
  }, [currentLevel, isGameInProgress]);

  useEffect(() => {
    if (remainingLives === 0) {
      setIsGameOver(true);
      setIsGameInProgress(false);
    }
  }, [remainingLives]);

  useEffect(() => {
    if (record[currentLevel]) updateLocalStorage();
  }, [record]);

  const updateLocalStorage = () => {
    localStorage.setItem("record", JSON.stringify(record));
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet
          context={{
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
          }}
        />
      </main>
      <Footer />
    </>
  );
};

export default Root;

import React, { useEffect, useState } from "react";
import "./Root.css";
import players from "../../data/players.json";

const Level = {
  Easy: "Easy",
  Medium: "Medium",
  Hard: "Hard",
};

const Root = () => {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState({
    [Level.Easy]: 0,
    [Level.Medium]: 0,
    [Level.Hard]: 0,
  });
  const [currentRecord, setCurrentRecord] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(Level.Easy);

  useEffect(() => {
    setData(players);
  }, []);

  useEffect(() => {
    const localStorageRecord = JSON.parse(localStorage.getItem("record"));
    if (localStorageRecord && Object.keys(localStorageRecord).length !== 0) {
      setRecord(localStorageRecord);
    }
  }, []);

  useEffect(() => {
    if (currentRecord > record[currentLevel]) {
      setRecord((record) => ({ ...record, [currentLevel]: currentRecord }));
    }
  }, [currentRecord]);

  useEffect(() => {
    setCurrentRecord(0);
  }, [currentLevel]);

  useEffect(() => {
    if (record[currentLevel]) updateLocalStorage();
  }, [record]);

  const updateCurrentRecord = (record) => {
    setCurrentRecord(record);
  };

  const updateLocalStorage = () => {
    localStorage.setItem("record", JSON.stringify(record));
  };

  return (
    <div>
      <div>Root: {data ? data[0]?.name : "null"}</div>
      <button onClick={() => updateCurrentRecord(currentRecord + 1)}>
        Update
      </button>
      <div>Record: {currentRecord}</div>
    </div>
  );
};

export default Root;

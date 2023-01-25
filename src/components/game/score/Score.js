import React from "react";
import Lives from "../lives/Lives";
import "./Score.css";

const Score = ({ score, record , livesCount, livesLeft }) => {
  if (score == undefined) score = 0;
  if (record == undefined) record = 0;

  return (
    <div className="score-container">
      <div className="text-score">
        Score <span className="current-score-number">{score}</span>
      </div>

      <Lives livesCount={livesCount} livesLeft={livesLeft} />

      <div className="text-score">
        Record <span className="record-number">{record}</span>
      </div>
    </div>
  );
};

export default Score;

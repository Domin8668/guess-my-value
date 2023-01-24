import React from "react";
import Lives from "../lives/Lives";
import "./Score.css";

const Score = ({ score, record }) => {
  if (score == undefined) score = 0;
  if (record == undefined) record = 0;

  return (
    <div className="score-container">
      <div className="text-score">
        Score <span className="current-score-number">{score}</span>
      </div>
      <Lives livesCount={3} livesLeft={2} />
      <div className="text-score">
        Record <span className="record-number">{record}</span>
      </div>
    </div>
  );
};

export default Score;

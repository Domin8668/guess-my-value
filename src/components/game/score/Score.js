import React from "react";
import Lives from "../lives/Lives";
import "./Score.css";

const Score = ({ score, record, livesCount, livesLeft, level }) => {
  if (score === undefined) score = 0;
  if (record === undefined) record = 0;

  return (
    <div className="score-container">
      <div className="text-score">
        Score <span className="score-number">{score}</span>
      </div>

      <Lives livesCount={livesCount} livesLeft={livesLeft} />

      <div className="text-score">
        Record <span className={`score-number record-${level}`}>{record}</span>
      </div>
    </div>
  );
};

export default Score;

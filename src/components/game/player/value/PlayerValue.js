import React from "react";
import "./PlayerValue.css";

const PlayerValue = ({ value }) => {
  return (
    <div className="player-value-container">
      <p className="market-value">
        Market Value: <span className="player-value">{value}</span>
      </p>
    </div>
  );
};

export default PlayerValue;

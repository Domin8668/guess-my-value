import React from "react";
import "./PlayerValue.css";

const PlayerValue = ({ value }) => {
  return (
    <div className="player-value-container">
      <p className="market-value">Market Value</p>
      <p className="player-value">{value}</p>
    </div>
  );
};

export default PlayerValue;

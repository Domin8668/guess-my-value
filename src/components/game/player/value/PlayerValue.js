import React from "react";
import "./PlayerValue.css";

const PlayerValue = ({ value, styleClassName }) => {
  const styleName = styleClassName + "1";
  return (
    <div className="player-value-container">
      <p className="market-value">
        Market Value:{" "}
        <span className={`player-value ${styleName}`}>{value}</span>
      </p>
    </div>
  );
};

export default PlayerValue;

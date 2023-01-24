import React from "react";
import "./PlayerPosition.css";

const PlayerPosition = ({ position }) => {
  const forward = "var(--forward)";
  const midfielder = "var(--midfield)";
  const defender = "var(--defender)";
  const goalkeeper = "var(--goalkeeper)";
  const standardColor = "var(--white)";

  let isPlayerForward = false;
  let isPlayerMidfielder = false;
  let isPlayerDefender = false;
  let isPlayerGoalKeeper = false;

  if (position.includes("Goal")) {
    isPlayerGoalKeeper = true;
  } else if (position.includes("Back")) {
    isPlayerDefender = true;
  } else if (position.includes("Midf")) {
    isPlayerMidfielder = true;
  } else {
    isPlayerForward = true;
  }

  return (
    <div className="player-position-container">
      <div
        className="for-section"
        style={{
          backgroundColor: isPlayerForward ? forward : standardColor,
        }}
      ></div>

      <div
        className="mid-section"
        style={{
          backgroundColor: isPlayerMidfielder ? midfielder : standardColor,
        }}
      ></div>

      <div
        className="def-section"
        style={{
          backgroundColor: isPlayerDefender ? defender : standardColor,
        }}
      >
        <div
          className="gk-section"
          style={{
            backgroundColor: isPlayerGoalKeeper ? goalkeeper : standardColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PlayerPosition;

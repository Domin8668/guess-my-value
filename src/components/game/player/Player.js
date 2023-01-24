import React from "react";
import PlayerAge from "./age/PlayerAge";
import "./Player.css";
import PlayerPosition from "./position/PlayerPosition";
import PlayerValue from "./value/PlayerValue";

const Player = ({ name, value, age, position }) => {
  return (
    <div className="player-container">
      <div className="player-name">{name}</div>
      <PlayerValue value={value} />
      <PlayerAge age={age} />
      <PlayerPosition position={position} />
    </div>
  );
};

export default Player;

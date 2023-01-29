import React from "react";
import PlayerAge from "./age/PlayerAge";
import "./Player.css";
import PlayerPosition from "./position/PlayerPosition";
import PlayerValue from "./value/PlayerValue";

const Player = ({ name, value, age, position, image, styleClassName }) => {
  return (
    <div className={`player-container ${styleClassName}`}>
      <img className={`player-image  ${styleClassName}`} src={image} alt="" />
      <div className="player-name">{name}</div>
      <PlayerValue value={value} styleClassName={styleClassName} />
      <div className="position-age-container">
        <PlayerPosition position={position} />
        <PlayerAge age={age} />
      </div>
    </div>
  );
};

export default Player;

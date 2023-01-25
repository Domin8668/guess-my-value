import React from "react";
import "./Life.css";
import ball from "../../../../images/ball.png";

const Life = ({ opacity }) => {
  let className = "heart";
  if (opacity) {
    className += " opacity";
  }

  return <img className={className} src={ball} />;
};

export default Life;

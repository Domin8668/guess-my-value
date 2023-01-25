import React from "react";
import "./Lives.css";
import Life from "./life/Life";

const Lives = ({ livesCount, livesLeft }) => {
  const lives = [];

  for (let index = 0; index < livesCount; index++) {
    if (index < livesLeft) {
      lives.push(<Life key={index} opacity={false} />);
    } else {
      lives.push(<Life key={index} opacity={true} />);
    }
  }

  return <div className="lives-container">{lives}</div>;
};

export default Lives;

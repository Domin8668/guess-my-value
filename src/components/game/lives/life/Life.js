import React from "react";
import "./Life.css";

const Life = ({ opacity }) => {
  let className = "heart";
  if (opacity) {
    className += " opacity";
  }

  return <div className={className}></div>;
};

export default Life;

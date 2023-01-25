import React from "react";
import "./FunctionButton.css";

const FunctionButton = ({ styleClassName, text, callback }) => {
  return (
    <button
      type="button"
      className={`button ${styleClassName}`}
      onClick={callback}
    >
      {text}
    </button>
  );
};

export default FunctionButton;

import React from "react";
import "./FunctionButton.css";

const FunctionButton = ({
  styleClassName,
  text,
  callback,
  isButtonBlocked = false,
}) => {
  return (
    <button
      type="button"
      className={`button ${styleClassName}`}
      onClick={callback}
      disabled={isButtonBlocked}
    >
      {text}
    </button>
  );
};

export default FunctionButton;

import React from "react";
import "./Lives.css";
import Life from "./life/Life";

const Lives = ({ livesCount, livesLeft }) => {
  // for (let index = 0; index < livesCount; index++) {
  //   if(index<=livesLeft){
  //     <Life opacity={false}
  //   } else {
  //     <Life opacity={true}/>
  //   }
  // }

  return (
    <div className="lives-container">
      <Life opacity={false} />
      <Life opacity={false} />
      <Life opacity={true} />
    </div>
  );
};

export default Lives;

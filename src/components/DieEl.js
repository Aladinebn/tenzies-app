import React from "react";
import DiceNumber from "./DiceNumber";

export default function DieEl(props) {
  const val = props.value;

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">
        <DiceNumber val={val} />
      </h2>
    </div>
  );
}

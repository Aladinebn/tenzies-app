import React from "react";
import "./die.css";

const Pip = () => <span className="pip" />;

const Face = ({ children }) => <div className="face">{children}</div>;

const DiceNumber = ({ val }) => {
  let pips = Number.isInteger(val)
    ? Array(val)
        .fill(0)
        .map((_, i) => <Pip key={i} />)
    : null;
  return <Face>{pips}</Face>;
};

export default DiceNumber;

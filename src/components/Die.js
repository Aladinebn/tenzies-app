import React from "react";
import { nanoid } from "nanoid";
import DieEl from "./DieEl";
import Confetti from "react-confetti";

export default function Die() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSame = dice.every((die) => die.value === firstValue);
    if (allHeld && allSame) {
      setTenzies(true);
    }
  }, [dice]);

  function generateDice() {
    return { id: nanoid(), value: Math.ceil(Math.random() * 6), isHeld: false };
  }

  function allNewDice() {
    const newDie = [];
    for (let i = 0; i < 10; i++) {
      newDie.push(generateDice());
    }
    return newDie;
  }

  function rollDice() {
    if (!tenzies) {
      setRolls((e) => e + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateDice();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setRolls(0);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <DieEl
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="roll-dice">
        {tenzies ? "New Game" : "Roll"}
      </button>

      <h1>
        {tenzies
          ? `😀 Congratulations, You won in ${rolls} rolls 🥳`
          : `👻 ${rolls} time${rolls > 1 ? "s" : ""} 🤡`}
      </h1>
    </main>
  );
}

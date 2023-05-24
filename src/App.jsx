import { useState } from "react";

import Button from "./components/Button";

import "./styles/game-grid.css";

export default function App() {
  const [gameState, setGameState] = useState([
    ["", "", "", "", "", "", "", "", ""],
  ]);

  const [turn, setTurn] = useState(0);

  function handleTurn(id) {
    setGameState((prevState) => {
      var currState = [];
      prevState[turn].map((state, index) => {
        if (index == id) {
          if (turn % 2 == 0) {
            currState.push("X");
          } else {
            currState.push("O");
          }
        } else {
          currState.push(state);
        }
      });

      return [...gameState, currState];
    });

    setTurn(turn + 1);
  }

  return (
    <div className="game-grid">
      {gameState[turn].map((tileValue, index) => (
        <Button id={index} onClick={handleTurn}>
          {tileValue}
        </Button>
      ))}
    </div>
  );
}

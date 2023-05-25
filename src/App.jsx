import { useState } from "react";

import Container from "./components/Container";
import Gamegrid from "./components/Gamegrid";
import Playerturn from "./components/Playerturn";

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

    const winner = checkWinner();
    if (winner === null) console.log(winner);
  }

  function checkWinner() {
    var winCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    var currState = gameState[turn];
    console.log("game states:");
    console.log(gameState);
    var winner = null;

    winCases.forEach((winCase) => {
      if (
        currState[winCase[0]] === currState[winCase[1]] &&
        currState[winCase[1]] == currState[winCase[2]]
      ) {
        winner = currState[winCase[0]];
        return winner;
      }
    });

    return winner;
  }

  return (
    <Container>
      <Gamegrid gameState={gameState[turn]} onClick={handleTurn}></Gamegrid>
      <Playerturn turn={turn % 2 == 0 ? "X" : "O"}></Playerturn>
    </Container>
  );
}

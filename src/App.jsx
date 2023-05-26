import { useState } from "react";

import Container from "./components/Container";
import Gamegrid from "./components/Gamegrid";
import Playerturn from "./components/Playerturn";
import Resetbutton from "./components/Resetbutton";

export default function App() {
  const [gameState, setGameState] = useState([
    ["", "", "", "", "", "", "", "", ""],
  ]);

  const [turn, setTurn] = useState(0);

  const [stop, setStop] = useState(false);

  function handleReset(e) {
    e.preventDefault();
    setGameState([["", "", "", "", "", "", "", "", ""]]);
    setTurn(0);
    setStop(false);
  }

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

    const winner = checkWinner(id, turn % 2 == 0 ? "X" : "O");
    console.log(winner);
    if (winner === "X" || winner === "O") {
      setStop(true);
    }
  }

  function checkWinner(id, player) {
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
    currState[id] = player;
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
      <Gamegrid
        gameState={gameState[turn]}
        onClick={handleTurn}
        stop={stop}
      ></Gamegrid>
      <Playerturn stop={stop} turn={turn % 2 == 0 ? "X" : "O"}></Playerturn>
      <Resetbutton onClick={handleReset}></Resetbutton>
    </Container>
  );
}

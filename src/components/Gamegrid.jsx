import Button from "./Button.jsx";

import "../styles/game-grid.css";

export default function GameGrid(props) {
  return (
    <div className="game-grid">
      {props.gameState.map((tileValue, index) => (
        <Button id={index} onClick={props.onClick}>
          {tileValue}
        </Button>
      ))}
    </div>
  );
}

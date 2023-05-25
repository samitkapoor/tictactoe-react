export default function Playerturn(props) {
  return props.stop == false ? (
    <h3>Turn: {props.turn}</h3>
  ) : (
    <h3>{props.turn == "X" ? "O" : "X"} wins!</h3>
  );
}

import "../styles/button.css";

export default function Resetbutton(props) {
  return (
    <button onClick={(e) => props.onClick(e)} class="reset-btn">
      Reset game
    </button>
  );
}

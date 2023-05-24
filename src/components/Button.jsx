import "../styles/button.css";

export default function Button(props) {
  return (
    <button
      onClick={() => {
        props.onClick(props.id);
      }}
      id={props.id}
    >
      {props.children}
    </button>
  );
}

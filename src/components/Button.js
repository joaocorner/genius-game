import "./Button.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      className={props.className}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;

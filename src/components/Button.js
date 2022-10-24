import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="btn-colors"
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;

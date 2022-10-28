import "./Button.scss";

const Button = ({ color, onClick, flash }) => {
  return (
    <button
      onClick={onClick}
      className={`btn-colors ${color} ${flash ? "flash" : ""}`}
    ></button>
  );
};

export default Button;

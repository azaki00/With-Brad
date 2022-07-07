import React from "react";
import PropTypes from "prop-types";
const Button = ({ color, text, onCLick }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = { color: "steelblue" };
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;

import React from "react";
import "./Button.css";

const Button = ({ chooseQuote }) => {
  return (
    <div>
      <button className="button" onClick={chooseQuote}>
        Get quote
      </button>
    </div>
  );
};

export default Button;

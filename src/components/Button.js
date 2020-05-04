import React from "react";
import _JSXStyle from "styled-jsx/style";

const Button = ({ className, title = "Select", click }) => {
  return (
    <button className={className} onClick={click}>
      {title}
      <_JSXStyle id="Button">{`
        button {
          color: #fff;
          color: #fff;
          padding: 10px;
          border: 1px #6fcf97;
          border-radius: 2px;
          cursor: pointer;
          justify-self: center;
          margin-bottom: 1em;
        }

        .button-select {
          font-size: 24px;
          background-color: #6fcf97;
        }

        .button-select:hover {
          background-color: #53a776;
        }
      `}</_JSXStyle>
    </button>
  );
};
export default Button;

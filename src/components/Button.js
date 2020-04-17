import React from "react";

const Button = ({ className, title = "Select", cardNumber }) => {
  return (
    <button className={className} onClick={() => console.log(cardNumber)}>
      {title}
      <style jsx="true">{`
        button {
          color: #fff;
          color: #fff;
          padding: 10px;
          border: 1px #6fcf97;
          border-radius: 2px;
          cursor: pointer;
          justify-self: center;
        }

        .button-select {
          font-size: 24px;
          background-color: #6fcf97;
        }

        .button-select:hover {
          background-color: #53a776;
        }
      `}</style>
    </button>
  );
};
export default Button;

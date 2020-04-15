import React from "react";

const Button = ({ className }) => {
  return (
    <button className={className}>
      Select
      <style jsx="true">{`
        button {
          height: 2em;
          color: #fff;
          color: #fff;
          width: 5em;
          padding: 7px;
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

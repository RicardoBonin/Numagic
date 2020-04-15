import React from "react";

const Button = ({ className }) => {
  return (
    <button className={className}>
      Select
      <style jsx="true">{`
        button {
          height: 100%;
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

        /* TODO: this hover is not workig */
        .botton-select:hover {
          font-size: 10px;
          background-color: #000;
        }
      `}</style>
    </button>
  );
};
export default Button;

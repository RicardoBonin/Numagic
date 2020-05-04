import React from "react";
import _JSXStyle from "styled-jsx/style";

const Instruction = ({ title, subtitle }) => {
  return (
    <div className="instruction">
      <h2>{title}</h2>
      {!!subtitle && <h3>{subtitle}</h3>}
      <_JSXStyle id="Instruction">{`
        .instruction {
          display: grid;
          background-color: #c4c4c4;
          align-items: center;
          height: 6.5em;
          margin-top: 1.5em;
          grid-area: instruction;
        }

        h2,
        h3 {
          margin: 0;
          font-style: normal;
          font-weight: normal;
          font-size: 2em;
          /* line-height: 56px; */
          text-align: center;
          color: #000000;
        }
        @media (max-width: 768px) {
          h2,
          h3 {
            font-size: 1em;
          }
          .instruction {
            border-radius: 5px;
            height: auto;
            padding: 5px;
          }
        }
      `}</_JSXStyle>
    </div>
  );
};

export default Instruction;

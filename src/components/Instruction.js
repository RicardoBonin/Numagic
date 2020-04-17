import React from "react";

const Instruction = ({ title, subtitle }) => {
  return (
    <div className="instruction">
      <h2>{title}</h2>
      {!!subtitle && <h3>{subtitle}</h3>}
      <style jsx="true">{`
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
      `}</style>
    </div>
  );
};

export default Instruction;

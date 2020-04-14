import React from "react";

const Instruction = () => {
  return (
    <div className="instruction">
      <h2>Select one of the cards</h2>
      <style jsx="true">{`
        .instruction {
          display: grid;
          background-color: #c4c4c4;
          align-items: center;
          height: 6.5em;
          margin-top: 1.5em;
        }

        h2 {
          margin: 0;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 2em;
          line-height: 56px;
          text-align: center;
          color: #000000;
        }
      `}</style>
    </div>
  );
};

export default Instruction;

import React from "react";
import _JSXStyle from "styled-jsx/style";
const Card = ({ numbers, color, size, cardSelected, click }) => {
  return (
    <div
      className={cardSelected}
      style={{ background: `${color}`, fontSize: `${size}` }}
    >
      {numbers.map((number) => {
        return (
          <div key={number} onClick={click} className="number">
            {number}
          </div>
        );
      })}
      <_JSXStyle id="Card">{`
        .cardSelected {
          border-radius: 3px;
          box-shadow: 5px 10px 10px #000000;
          cursor: pointer;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(4, 1fr);
          max-width: 20em;
          min-height: 12em;
          padding: 20px;
        }
        .card {
          border-radius: 3px;
          cursor: pointer;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(4, 1fr);
          max-width: 20em;
          min-height: 12em;
          padding: 20px;
        }
        .card-page2 {
          border-radius: 3px;
          box-shadow: 5px 10px 10px #888888;
          display: grid;
          font-size: 1.8em;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(4, 1fr);
          max-width: 20em;
          min-height: 12em;
          padding: 20px;
        
        }
        .number {
          padding: 0.7em;
        }
        @media (max-width: 768px) {
          .card {
            max-width: 92%;
          }
          .card-page2 {
            padding: 1em;
            font-size: 1.1em;
            min-height: auto;
          }
          .number {
            padding: 0.3em;
            font-size: 1em; 
          }
        }
      `}</_JSXStyle>
    </div>
  );
};

export default Card;

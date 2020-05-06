import React from "react";
import _JSXStyle from "styled-jsx/style";
const Card = ({ numbers, color, cardSelected, click }) => {
  return (
    <div className={cardSelected} style={{ background: `${color}` }}>
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
          padding: 1em;
        }
        .card {
          border-radius: 3px;
          cursor: pointer;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(4, 1fr);
          padding: 1em;
        }
        .card:hover {
          box-shadow: 5px 10px 10px #888888;
        }
        .card-page2 {
          border-radius: 3px;
          box-shadow: 5px 10px 10px #888888;
          display: grid;
          font-size: 1.8em;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(4, 1fr);
          padding: 20px;
        
        }
        .number {
          padding: 0.7em;
        }
        
        @media (max-width: 768px) {
          .card {
            width:90%;
            padding:5%
          }
          .card-page2 {
            font-size: initial;
            padding: 0.5em;
            width:100%;
          }
          .number {
            font-size: 1.1em; 
          }
        }
        @media (max-width: 420px) {
          .card-page2 {
            font-size: 1em;
            padding: 0.7em;
          }
          .number {
            padding: 0.3em 0.3em 0.3em 0.3em;
          }
        }
      `}</_JSXStyle>
    </div>
  );
};

export default Card;

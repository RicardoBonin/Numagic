import React from "react";
import Button from "./Button";
const CardBig = ({ numbers, color }) => {
  // console.log(data.cards.filter(card=> card.selected === true))
  return (
    <div
      className="cartao-provisorio"
      id="card-1"
      style={{ background: `${color}` }}
    >
      {numbers.map((number) => {
        console.log(number);
        return (
          <div className="card">
            {number}
          </div>
        );
      })}
      <style jsx="true">{`
        .cartao-provisorio {
          border-radius: 3px;
          box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.2);
          display: grid;
          font-size: 1.8em;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          margin-bottom: 20px;
          padding: 0.7em;
        }
        .card {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default CardBig;

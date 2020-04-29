import React from "react";
const Card = ({ numbers, color, size }) => {
  // console.log(data.cards.filter(card=> card.selected === true))
  return (
    <div
      className="card"
      style={{ background: `${color}`, fontSize: `${size}` }}
    >
      {numbers.map((number) => {
        return (
          <div key={number} className="number">
            {number}
          </div>
        );
      })}
      <style jsx="true">{`
        .card {
          border-radius: 3px;
          box-shadow: 5px 10px 10px #888888;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(4, 1fr);
          margin-bottom: 20px;
          max-width: 20em;
          min-height: 12em;
          padding: 20px;
        }
        .number {
          padding: 0.7em;
        }
      `}</style>
    </div>
  );
};

export default Card;

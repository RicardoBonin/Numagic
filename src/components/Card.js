import React from "react";
const Card = ({ numbers, color, size, cardSelected, click }) => {
  // console.log(data.cards.filter(card=> card.selected === true))
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
      <style jsx="true">{`
        .card {
          border-radius: 3px;
          box-shadow: 5px 10px 10px #7fff00;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(4, 1fr);
          margin-bottom: 20px;
          max-width: 20em;
          min-height: 12em;
          padding: 20px;
        }
        .card1 {
          border-radius: 3px;
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

import React from 'react';

const CardBig = ({numbers,color}) => {
  //console.log(data.cards.filter(card=> card.selected === true))
  return (
    <div className="cartao-provisorio" id="card-1" style={{background: `${color}`}}>
      {numbers.map(number => {
        console.log(number)
        return (
          <div className="card" key={number}>{number}</div>
        )
      })}
      <style jsx="true">{`
          .cartao-provisorio {
            display: grid;
            font-size: 2em;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            margin-bottom: 20px;
            padding: 0.7em;
          }
          .card {
            width: 2em;
            text-align: right;
          }
          
        `}</style>
    </div>
  )
}

export default CardBig
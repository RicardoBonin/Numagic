import React from 'react';
import { connect } from "react-redux";
import Button from './Button'

const Card = ({data}) => {
  return (
    <div className="cards">
      {
        data.cards.map((card) => {
          return(
            <div className="card-containe" key={card}>
              <div className="card" style={{background: `${card.color}`}}>
                <p>{card.numbers.join(" ")}</p>
              </div>
              <Button key={card} className="button-select" cardNumber={card} />
            </div>
          )
        })
      }
      <style jsx="true">{`
        .buton-select{
          align-items: center;
        }
        .cards {
          display: grid;
          grid-template-columns: 2fr 2fr 2fr;
          grid-gap: 100px;
          padding: 30px;
        }
        .card {
          padding: 10px;
          text-align: justify;
          height: 60%;
        }
        .card-containe {
          display: grid;
          grid-template-rows: 4fr 1fr;
        }

      `}</style>
    </div>
   
  )
}
const mapStateToProps = (state) => {
  return{
    data: state
  }
}
export default connect (mapStateToProps) (Card)
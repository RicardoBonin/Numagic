import React from 'react';
import { connect } from "react-redux";
import Button from './Button'

const Cards = ({cards}) => {
  return (
    <div className="cards">
      {Object
        .keys(cards.value)
        .map((card) => {
          return(
            <div className="card-containe" key={card}>
              <div className="card" style={{background: `${cards.value[card].color}`}}>
                <p>{cards.value[card].numbers.join(" ")}</p>
              </div>
              <Button key={card} className="button-select" cardNumber={cards.value[card]} />
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
    cards: state
  }
}
export default connect (mapStateToProps) (Cards)
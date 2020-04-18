import React from 'react';
import { connect, } from "react-redux";
import Button from './Button'

const Card = ({data}) => {
  console.log(data.cards.filter(card=>{
    console.log(card.selected)
  }))
  return (
    <div className="cards">
      { 
        data.cards.map((card) => {
          if(card.selected === true){
            return(
              <div className="card-container" id="card-container-1" key={card}>
                <div className="cartao-provisorio" id="card-1" style={{background: `${card.color}`}}>
                  <p>{card.numbers.join(" ")}</p>
                </div>
                <Button key={card} className="button-select" cardNumber={card} />
                <style jsx="true">{`
                  .cards {
                    display: grid;
                    grid-template-rows: auto;
                    grid-template-areas:
                      "instruction instruction instruction"
                      ". card-1 .";
                  }

                  /* Este codigo eh temporario, pois sera criado no componente Card. */
                  .cartao-provisorio {
                    display: grid;
                    margin-bottom: 20px;
                    padding: 10px;
                  }
                  .card-container {
                    display: grid;
                    grid-template-rows: 4fr 1fr;
                    padding: 25px 0 0 0;
                  }

                  #card-container-1 {
                    grid-area: card-1;
                  }
                `}</style>
              </div>
            )
          }
          
        })
      }
    </div>
   
  )
}
const mapStateToProps = (state) => {
  return{
    data: state
  }
}
export default connect (mapStateToProps) (Card)
import React from "react";
import { connect } from "react-redux";
import Instruction from "./Instruction";
import Card from "./Card";
import Button from "./Button";
import { getLanguage } from "../languages/utils";
import { test } from "../actions";
const Page2 = ({ pageVisible, selectedLanguage, cards }) => {
  const {
    page2: { instructionTitle, instructionSubtitle, button },
  } = getLanguage(selectedLanguage);

  return (
    pageVisible && (
      <div className="page-container">
        <Instruction title={instructionTitle} subtitle={instructionSubtitle} />
        <div className="card-container" id="card-container-1">
          {cards
            .filter((obj, idx) => obj.selected === true)
            .map((card, i) => {
              return (
                <div key={i}>
                  <Card
                    color={card.color}
                    numbers={card.numbers}
                    idx={i + 1}
                    size={"1.8em"}
                  />
                  <Button
                    className="button-select"
                    cardNumber={2}
                    title={button}
                    onClick={()=>test()}
                  />
                </div>
              );
            })}
        </div>
        <style jsx="true">{`
          .page-container {
            display: grid;
            grid-template-rows: auto;
            grid-template-areas:
              "instruction instruction instruction"
              ". card-1 .";
            text-align: center;
          }
          /* Este codigo eh temporario, pois sera criado no componente Card. */
          .cartao-provisorio {
            display: grid;
            margin-bottom: 20px;
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
  );
};

const mapStateToProps = ({ page2Visible, language, cards }) => {
  return {
    pageVisible: page2Visible,
    selectedLanguage: language,
    cards: cards,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    test: ()=>dispatch(test())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page2);

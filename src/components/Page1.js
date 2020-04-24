import React from "react";
import { connect } from "react-redux";
import Instruction from "./Instruction";
import Button from "./Button";
import { getLanguage } from "../languages/utils";
import Card from "./Card";
import { card01 } from '../actions'

const Page1 = ({ pageVisible, selectedLanguage, cards, card01 }) => {
  const {
    page1: { instructionTitle, button },
  } = getLanguage(selectedLanguage);
  return (
    pageVisible && (
      <div className="page-container">
        <Instruction title={instructionTitle} />
        <div className="card-container" id="card-container-1">
          {cards.map((card, i) => {
            return (
              <div key={i}>
                <Card
                  color={card.color}
                  numbers={card.numbers}
                  size={"1em"}
                  key={i}
                />
                <Button
                  className="button-select"
                  title={button}
                  click={()=>card01()}
                />
              </div>
            );
          })}
        </div>
        <style jsx="true">{`
          .card-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 3em;
            margin: auto;
            text-align: center;
            margin-top: 3em;
            width: 80%;
          }
        `}</style>
      </div>
    )
  );
};

const mapStateToProps = ({ page1Visible, language, cards }) => {
  return {
    pageVisible: page1Visible,
    selectedLanguage: language,
    cards: cards,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    card01: () => dispatch(card01())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page1);

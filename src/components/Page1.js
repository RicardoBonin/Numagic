import React from "react";
import { connect } from "react-redux";
import Instruction from "./Instruction";
import Button from "./Button";
import { getLanguage } from "../languages/utils";
import CardBig from "./Card";

const Page1 = ({ pageVisible, selectedLanguage, cards }) => {
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
              <CardBig color={card.color} numbers={card.numbers} idx={i + 1} />
            );
          })}
          <Button className="button-select" cardNumber={6} title={button} />
        </div>
        <style jsx="true">{`
          .card-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 1em;
            margin-top: 1em;
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
export default connect(mapStateToProps)(Page1);

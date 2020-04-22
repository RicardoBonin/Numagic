import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";
import { getLanguage } from "../languages/utils";
import CardBig from "./Card";

// TODO: nesta pagina eh onde tenho que criar os checkboxes e o botao Ready.

const Page3 = ({ pageVisible, selectedLanguage, cards }) => {
  const { page3 } = getLanguage(selectedLanguage);
  return (
    pageVisible && (
      <div className="page-container">
        <Instruction
          title={page3.instructionTitle}
          subtitle={page3.instructionSubtitle}
        />
        <div className="card-container" id="card-container-1">
          {cards
            .filter((obj, idx) => obj.selected === false)
            .map((card, i) => {
              console.log(card);
              return (
                <CardBig
                  color={card.color}
                  numbers={card.numbers}
                  idx={i + 1}
                />
              );
            })}
          <Button className="button-select" cardNumber={2} />
        </div>
        <style jsx="true">{`
        .card-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          gap: 1em;
          margin-top: 1em;
        `}</style>
      </div>
    )
  );
};
const mapStateToProps = ({ page3Visible, language, cards }) => {
  return {
    pageVisible: page3Visible,
    selectedLanguage: language,
    cards: cards,
  };
};
export default connect(mapStateToProps)(Page3);

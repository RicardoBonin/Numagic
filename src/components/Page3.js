import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";
import { getLanguage } from "../languages/utils";
import Card from "./Card";
import { advance, selectedCard } from "../actions";

// TODO: nesta pagina eh onde tenho que criar os checkboxes e o botao Ready.

const Page3 = ({
  pageVisible,
  selectedLanguage,
  cards,
  advance,
  selectedCard,
}) => {
  const { page3 } = getLanguage(selectedLanguage);
  return (
    pageVisible && (
      <div className="page-container">
        <Instruction
          title={page3.instructionTitle}
          subtitle={page3.instructionSubtitle}
        />
        <div className="card-container" id="card-container-1">
          {cards.map((card, i) => {
            return (
              <div key={i}>
                <Card
                  color={card.color}
                  numbers={card.numbers}
                  idx={i + 1}
                  cardSelected={card.selected ? "card" : "card1"}
                  size={"1.0em"}
                  click={() => selectedCard(card.id, "multiple")}
                />
              </div>
            );
          })}
        </div>
        <Button
          className="button-select"
          click={() => advance(false, false, false, true)}
        />
        <style jsx="true">{`
          div {
            text-align: center;
          }
          .button-select {
            margin-top: 1em;
          }
          .card-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 3em;
            justify-items: center;
            margin-top: 3em;
            text-align: center;
          }
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
const mapDispatchToProps = (dispatch) => {
  return {
    advance: (page1, page2, page3, page4) =>
      dispatch(advance(page1, page2, page3, page4)),
    selectedCard: (cardId, selectionType) =>
      dispatch(selectedCard(cardId, selectionType)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page3);

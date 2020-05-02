import React from "react";
import { connect } from "react-redux";
import Instruction from "./Instruction";
import Button from "./Button";
import { getLanguage } from "../languages/utils";
import Card from "./Card";
import { selectedCard, advance } from "../actions";

const Page1 = ({
  pageVisible,
  selectedLanguage,
  cards,
  selectedCard,
  advance,
}) => {
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
                  cardSelected={card.selected ? "cardSelected" : "card"}
                  click={() => selectedCard(card.id, "single")}
                />
              </div>
            );
          })}
        </div>
        <Button
          className="button-select"
          click={() => advance(false, true, false, false)}
          title={button}
        />
        <style jsx="true">{`
          .page-container {
            text-align: center;
          }
          .card-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 1em;
            justify-items: center;
            text-align: center;
            padding: 2em 12.5em 1em 12.5em;
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
    advance: (page1, page2, page3, page4) =>
      dispatch(advance(page1, page2, page3, page4)),
    selectedCard: (cardId, selectionType) =>
      dispatch(selectedCard(cardId, selectionType)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page1);

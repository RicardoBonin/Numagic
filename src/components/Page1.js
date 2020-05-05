import React from "react";
import { connect } from "react-redux";
import Instruction from "./Instruction";
import Button from "./Button";
import { getLanguage } from "../languages/utils";
import Card from "./Card";
import { selectedCard, advance } from "../actions";
import _JSXStyle from "styled-jsx/style";

const Page1 = ({
  pageVisible,
  selectedLanguage,
  cards,
  selectedCard,
  advance,
}) => {
  const {
    page1: { instructionTitle, instructionSubtitle, button },
  } = getLanguage(selectedLanguage);
  return (
    pageVisible && (
      <div className="page-container">
        <Instruction title={instructionTitle} subtitle={instructionSubtitle} />
        <div className="card-container" id="card-container-1">
          {cards.map((card, i) => {
            return (
              <Card
                color={card.color}
                numbers={card.numbers}
                key={i}
                cardSelected={card.selected ? "cardSelected" : "card"}
                click={() => selectedCard(card.id, "single")}
              />
            );
          })}
        </div>
        <Button
          className="button-select"
          click={() => advance(false, true, false, false)}
          title={button}
        />
        <_JSXStyle id="Page1">{`
          .page-container {
            text-align: center;
          }
          .card-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 1em;
            justify-content: stretch;
            text-align: stretch;
            padding: 1em 1em 1em 1em;
          }
          @media(max-width: 1200px) {
            .card-container {
              grid-template-columns: 1fr 1fr;
              padding: 1em 0em 1em 0em;
            }
          }
          @media (max-width: 768px) {
            .card-container {
              grid-template-columns: 1fr;
              padding: 1em 0em 1em 0em;
              justify-items: normal;
            }
          }
        `}</_JSXStyle>
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

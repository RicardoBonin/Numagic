import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";
import { getLanguage } from "../languages/utils";
import Card from "./Card";
import { advance, selectedCard } from "../actions";
import _JSXStyle from "styled-jsx/style";

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
                  cardSelected={card.selected ? "cardSelected" : "card"}
                  click={() => selectedCard(card.id, "multiple")}
                />
              </div>
            );
          })}
        </div>
        <Button
          className="button-select"
          title={page3.button}
          click={() => advance(false, false, false, true)}
        />
        <_JSXStyle id="Page3">{`
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

import React from "react";
import { connect } from "react-redux";
import Instruction from "./Instruction";
import Card from "./Card";
import Button from "./Button";
import { advance } from "../actions";
import { getLanguage } from "../languages/utils";
const Page2 = ({ pageVisible, selectedLanguage, cards, advance }) => {
  const {
    page2: {
      instructionTitle,
      instructionSubtitle,
      button,
      buttonError,
      errorMessage,
    },
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
                    cardSelected={"card-page2"}
                  />
                  <Button
                    key={i}
                    className="button-select"
                    cardNumber={2}
                    title={button}
                    click={() => advance(false, false, true, false)}
                  />
                </div>
              );
            })}
          {cards.filter((obj, idx) => obj.selected === true) && cards.filter((obj) => obj.selected === false) &&
            <div>
              <div className="error">
                <p>{errorMessage}</p>
              </div>
              <Button
                className="button-select"
                title={buttonError}
                cardNumber={2}
                title={buttonError}
                click={() => advance(true, false, false, false)}
              />
            </div>
          }
        </div>
        <style jsx="true">{`
          .page-container {
            text-align: center;
          }
          .card-container {
            display: grid;
            justify-items: center;
            padding: 25px 0 0 0;
          }
          .error {
            background: rgba(255, 0, 0, 0.8);
            border-radius: 3px;
            margin-bottom: 1em;
            padding: 2em;
            width: 95em;
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
    advance: (page1, page2, page3, page4) =>
      dispatch(advance(page1, page2, page3, page4)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page2);

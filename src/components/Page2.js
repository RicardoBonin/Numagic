import React from "react";
import { connect } from "react-redux";
import Instruction from "./Instruction";
import Card from "./Card";
import Button from "./Button";
import { advance } from "../actions";
import { getLanguage } from "../languages/utils";
import _JSXStyle from "styled-jsx/style";

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
          {console.log(cards.filter((obj, idx) => obj.selected === true))}
          {cards
            .filter((obj, idx) => obj.selected === true)
            .map((card, i) => {
              return (
                <div key={i}>
                  <Card
                    color={card.color}
                    numbers={card.numbers}
                    idx={i + 1}
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
          {cards.filter((obj) => obj.selected === true).length === 0 && (
            <div className="container-error">
              <div className="error">
                <h3>{errorMessage}</h3>
              </div>
              <Button
                className="button-select"
                title={buttonError}
                cardNumber={2}
                click={() => advance(true, false, false, false)}
              />
            </div>
          )}
        </div>
        <_JSXStyle id="Page2">{`
          .page-container {
            text-align: center;
          }
          .card-container {
            display: grid;
            justify-items: center;
            padding: 25px 0 0 0;
          }
          .container-error {
            width: 100%;
          }
          .error {
            background: rgba(255, 0, 0, 0.6);
            border-radius: 5px;
            padding: 2%;
            width: 96%;
          }
          .button-select {
            margin-top: 1em;
          }
          @media (max-width: 768px){
            
          }
        `}</_JSXStyle>
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

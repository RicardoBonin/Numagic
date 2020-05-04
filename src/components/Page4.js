import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";
import { getLanguage } from "../languages/utils";
import { restart } from "../actions";
import _JSXStyle from "styled-jsx/style";

const Page4 = ({ pageVisible, selectedLanguage, cards, restart }) => {
  const resultado = cards
    .filter((obj) => obj.selected === true)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual.firstNumber, 0);

  const {
    page4: { instructionTitle, button },
  } = getLanguage(selectedLanguage);

  return (
    pageVisible && (
      <div className="page-container">
        <Instruction title={instructionTitle} />
        <div className="result-container">
          <div className="result">{resultado}</div>
          <Button
            className="button-select"
            click={() => restart()}
            title={button}
          />
        </div>
        <_JSXStyle id="Page4">{`
          .page-container {
            display: grid;
            grid-template-rows: auto;
            grid-template-areas:
              "instruction instruction instruction"
              ". result .";
          }

          .result-container {
            display: grid;
            justify-items: center;
            grid-area: result;
            padding: 25px 0 0 0;
          }

          .result {
            font-size: 8em;
            text-align: center;
            padding: 0.4em;
            border-radius: 50%;
            color: #fff;
            background-color: #53bee6;
            margin-bottom: 0.2em;
          }
          @media (max-width: 768px){
            .result {
              padding: 0.1em 0.4em 0.4em 0.4em;
              height: 50%;
              width: 50%;
            }
          }
        `}</_JSXStyle>
      </div>
    )
  );
};

const mapStateToProps = ({ page4Visible, language, cards }) => {
  return {
    pageVisible: page4Visible,
    selectedLanguage: language,
    cards: cards,
  };
};
const mapDispatchToPros = (dispatch) => {
  return {
    restart: () => dispatch(restart()),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Page4);

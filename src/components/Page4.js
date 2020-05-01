import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";
import { getLanguage } from "../languages/utils";
import { restart } from "../actions";

const Page4 = ({ pageVisible, selectedLanguage, cards, restart }) => {
  const resultado = cards
    .filter((obj) => obj.selected === true)
    .reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.firstNumber,
      0
    );

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
        <style jsx="true">{`
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
        `}</style>
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

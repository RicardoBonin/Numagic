import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";
import { getLanguage } from "../languages/utils";

const Page4 = ({ pageVisible, selectedLanguage }) => {
  const {
    page4: { instructionTitle, button }
  } = getLanguage(selectedLanguage);

  return (
    pageVisible && (
      <div className="page-container">
        <Instruction title={instructionTitle} />
        <div className="result-container">
          <div className="result">22</div>
          <Button className="button-select" title={button} />
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

const mapStateToProps = ({ page4Visible, language }) => {
  return {
    pageVisible: page4Visible,
    selectedLanguage: language
  };
};

export default connect(mapStateToProps)(Page4);

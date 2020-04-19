import React from "react";
import { connect } from "react-redux";
import Instruction from "./Instruction";
import Card from "./Card";

import { getLanguage } from "../languages/utils";

const Page2 = ({ pageVisible, selectedLanguage }) => {
  const {
    page2: { instructionTitle, instructionSubtitle, button }
  } = getLanguage(selectedLanguage);

  return (
    pageVisible && (
      <div className="page-container">
        <Instruction title={instructionTitle} subtitle={instructionSubtitle} />
        <Card />
        <style jsx="true">{`
          .page-container {
            display: grid;
            grid-template-rows: auto;
            grid-template-areas:
              "instruction instruction instruction"
              ". card-1 .";
          }

          /* Este codigo eh temporario, pois sera criado no componente Card. */
          .cartao-provisorio {
            display: grid;
            margin-bottom: 20px;
          }
          .card-container {
            display: grid;
            grid-template-rows: 4fr 1fr;
            padding: 25px 0 0 0;
          }
          #card-1 {
            background-color: #f2994a;
          }

          #card-container-1 {
            grid-area: card-1;
          }
        `}</style>
      </div>
    )
  );
};

const mapStateToProps = ({ page2Visible, language }) => {
  return {
    pageVisible: page2Visible,
    selectedLanguage: language
  };
};
export default connect(mapStateToProps)(Page2);

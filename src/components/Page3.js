import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";
import { getLanguage } from "../languages/utils";
import Card from "./Card";

// TODO: nesta pagina eh onde tenho que criar os checkboxes e o botao Ready.

const Page3 = ({ pageVisible, selectedLanguage, cards }) => {
  const { page3 } = getLanguage(selectedLanguage);
  return (
    pageVisible && (
      <div className="page-container">
        <Instruction
          title={page3.instructionTitle}
          subtitle={page3.instructionSubtitle}
        />
        <div className="card-container" id="card-container-1">
          {cards
            .filter((obj, idx) => obj.selected === false)
            .map((card, i) => {
              return (
                <div key={i}>
                  <Card
                    color={card.color}
                    numbers={card.numbers}
                    idx={i + 1}
                    size={"1.0em"}
                  />
                  <Button className="button-select" cardNumber={i + 1} />
                </div>
              );
            })}
        </div>

        <style jsx="true">{`
          .card-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 3em;
            margin: auto;
            text-align: center;
            margin-top: 3em;
            width: 80%;
          }
          .page-container {
            /*  */
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
export default connect(mapStateToProps)(Page3);

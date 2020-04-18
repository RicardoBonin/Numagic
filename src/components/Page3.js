import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";
import { getLanguage } from "../languages/utils";

// TODO: nesta pagina eh onde tenho que criar os checkboxes e o botao Ready.

const Page3 = ({ pageVisible, selectedLanguage }) => {
  const { page3 } = getLanguage(selectedLanguage);

  return (
    pageVisible && (
      <div className="page-container">
        <Instruction
          title={page3.instructionTitle}
          subtitle={page3.instructionSubtitle}
        />
        <div className="card-container" id="card-container-2">
          <div className="cartao-provisorio" id="card-2">
            <p>
              1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47
              49 51 53 55 57 59 61 63
            </p>
          </div>
          <Button
            className="button-select"
            cardNumber={2}
            title={page3.button}
          />
        </div>
        <div className="card-container" id="card-container-3">
          <div className="cartao-provisorio" id="card-3">
            <p>
              1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47
              49 51 53 55 57 59 61 63
            </p>
          </div>
          <Button
            className="button-select"
            cardNumber={3}
            title={page3.button}
          />
        </div>
        <div className="card-container" id="card-container-4">
          <div className="cartao-provisorio" id="card-4">
            <p>
              1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47
              49 51 53 55 57 59 61 63
            </p>
          </div>
          <Button
            className="button-select"
            cardNumber={4}
            title={page3.button}
          />
        </div>
        <div className="card-container" id="card-container-5">
          <div className="cartao-provisorio" id="card-5">
            <p>
              1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47
              49 51 53 55 57 59 61 63
            </p>
          </div>
          <Button
            className="button-select"
            cardNumber={5}
            title={page3.button}
          />
        </div>
        <div className="card-container" id="card-container-6">
          <div className="cartao-provisorio" id="card-6">
            <p>
              1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47
              49 51 53 55 57 59 61 63
            </p>
          </div>
          <Button
            className="button-select"
            cardNumber={6}
            title={page3.button}
          />
        </div>

        <style jsx="true">{`
          .page-container {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr 1fr;
            grid-template-rows: auto;
            grid-row-gap: 5em;
            grid-template-areas:
              "instruction  instruction instruction instruction instruction instruction instruction"
              ". card-2 . card-3 . card-4 ."
              ". card-5 . card-6 . . .";
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

          #card-2 {
            background-color: #2d9cdb;
          }
          #card-3 {
            background-color: #cccccc;
          }
          #card-4 {
            background-color: #eb5757;
          }
          #card-5 {
            background-color: #f2c94c;
          }
          #card-6 {
            background-color: #9b51e0;
          }

          #card-container-2 {
            grid-area: card-2;
          }
          #card-container-3 {
            grid-area: card-3;
          }
          #card-container-4 {
            grid-area: card-4;
          }
          #card-container-5 {
            grid-area: card-5;
          }
          #card-container-6 {
            grid-area: card-6;
          }
        `}</style>
      </div>
    )
  );
};
const mapStateToProps = ({ page3Visible, language }) => {
  return {
    pageVisible: page3Visible,
    selectedLanguage: language
  };
};
export default connect(mapStateToProps)(Page3);

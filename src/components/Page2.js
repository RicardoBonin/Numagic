import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";

const Page2 = ({ pageVisible }) =>
  pageVisible && (
    <div className="page-container">
      <Instruction
        title="Pick a number."
        subtitle="Then click the ready button."
      />
      <div className="card-container" id="card-container-1">
        <div className="cartao-provisorio" id="card-1">
          <p>
            1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47
            49 51 53 55 57 59 61 63
          </p>
        </div>
        <Button className="button-select" cardNumber={1} title="Ready" />
      </div>
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
  );

const mapStateToProps = ({ page2Visible }) => {
  return {
    pageVisible: page2Visible
  };
};
export default connect(mapStateToProps)(Page2);

import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Instruction from "./Instruction";

const Page4 = ({ pageVisible }) =>
  pageVisible && (
    <div className="page-container">
      <Instruction title="The number you picked was..." />
      <div className="result-container">
        <span className="result">22</span>
        <Button className="button-select" title="Do it again!" />
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
          display: block;
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
  );
const mapStateToProps = ({ page4Visible }) => {
  return {
    pageVisible: page4Visible
  };
};
export default connect(mapStateToProps)(Page4);

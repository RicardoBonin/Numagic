import React from "react";
import { connect } from "react-redux";
import Instruction from "./Instruction";
import Card from "./Card";

const Page2 = ({ pageVisible }) =>
  pageVisible && (
    <div className="page-container">
      <Instruction
        title="Pick a number."
        subtitle="Then click the ready button."
      />
      <Card />
      
    </div>
  );

const mapStateToProps = ({ page2Visible }) => {
  return {
    pageVisible: page2Visible
  };
};
export default connect(mapStateToProps)(Page2);

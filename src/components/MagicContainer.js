import React from "react";
import { connect } from "react-redux";
import { card01 } from "../actions";

const MagicContainer = ({ children, card }) => {
  return (
    <div className="magic">
      {children}
      <style jsx="true">{`
        .magic {
          display: grid;
          background-color: #fff;
          height: 100%;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        }
      `}</style>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    card: state.value
  };
};
const mapDispatchToProps = dispatch => {
  return {
    card01: () => dispatch(card01())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MagicContainer);

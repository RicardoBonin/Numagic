import React from "react";
import { connect } from 'react-redux'
import { card01 } from '../actions'

const MagicContainer = ({children, card}) => {
  return (
    <div className="magic">
      {children}
      <pre>{JSON.stringify(card)}</pre>
      <button className='card01' onClick={()=>card01()}>Card 01</button>
      <style jsx="true">{`
        .magic {
          display: grid;
          background-color: #fff;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    card: state.value
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    card01: ()=> dispatch(card01())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MagicContainer);

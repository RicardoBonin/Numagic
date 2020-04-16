import React from 'react';
import { connect } from "react-redux";

const Cards = ({card}) => {
  console.log(card)
  return (
    <h1>Cards</h1>
  )
}
const mapStateToProps = (state) => {
  return{
    card: state.value.card1.numbers
  }
}
export default connect (mapStateToProps) (Cards)
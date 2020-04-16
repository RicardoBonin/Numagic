const INITIAL_STATE = {
  value:{
    card1: {
      firstNumber: 1,
      numbers: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63],
      selected: false,
      color: "#F2994A"
    }
  }
}

const cardsReducer = ( state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'CARD01':  
      return {...state, value: action.value }
    case 'CARD02':
      return { ...state, value: action }
    case 'CARD03':
      return { ...state, value: action}
    default:
      return state
  }
}
export default cardsReducer
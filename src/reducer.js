const INITIAL_STATE = {
  value:{}
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
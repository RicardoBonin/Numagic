const INITIAL_STATE = {
  value:{
    1: {
      firstNumber: 1,
      numbers: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63],
      selected: false,
      color: "#F2994A"
    },
    2: {
      firstNumber: 1,
      numbers: [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31,34,35,38,39,42,43,46,47,50,51,54,55,58,59,62,63],
      selected: false,
      color: "#2D9CDB"
    },
    3: {
      firstNumber: 4,
      numbers: [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31,36,37,38,39,44,45,46,47,52,53,54,55,60,61,62,63],
      selected: false,
      color: "#828282"
    },
    4: {
      firstNumber: 8,
      numbers: [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,56,57,58,59,60,61,62,63],
      selected: false,
      color: "#EB5757"
    },
    5: {
      firstNumber: 16,
      numbers: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,],
      selected: false,
      color: "#F2C94C"
    },
    6: {
      firstNumber: 32,
      numbers: [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],
      selected: false,
      color: "#9B51E0"
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
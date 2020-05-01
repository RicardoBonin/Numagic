const INITIAL_STATE = {
  cards: [
    {
      id: "card-1",
      firstNumber: 1,
      numbers: [
        1,
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19,
        21,
        23,
        25,
        27,
        29,
        31,
        33,
        35,
        37,
        39,
        41,
        43,
        45,
        47,
        49,
        51,
        53,
        55,
        57,
        59,
        61,
        63,
      ],
      selected: false,
      color: "#F2994A",
    },
    {
      id: "card-2",
      firstNumber: 2,
      numbers: [
        2,
        3,
        6,
        7,
        10,
        11,
        14,
        15,
        18,
        19,
        22,
        23,
        26,
        27,
        30,
        31,
        34,
        35,
        38,
        39,
        42,
        43,
        46,
        47,
        50,
        51,
        54,
        55,
        58,
        59,
        62,
        63,
      ],
      selected: false,
      color: "#2D9CDB",
    },
    {
      id: "card-3",
      firstNumber: 4,
      numbers: [
        4,
        5,
        6,
        7,
        12,
        13,
        14,
        15,
        20,
        21,
        22,
        23,
        28,
        29,
        30,
        31,
        36,
        37,
        38,
        39,
        44,
        45,
        46,
        47,
        52,
        53,
        54,
        55,
        60,
        61,
        62,
        63,
      ],
      selected: false,
      color: "#828282",
    },
    {
      id: "card-4",
      firstNumber: 8,
      numbers: [
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
      ],
      selected: false,
      color: "#EB5757",
    },
    {
      id: "card-5",
      firstNumber: 16,
      numbers: [
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
      ],
      selected: false,
      color: "#F2C94C",
    },
    {
      id: "card-6",
      firstNumber: 32,
      numbers: [
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
      ],
      selected: false,
      color: "#9B51E0",
    },
  ],
  page1Visible: true,
  page2Visible: false,
  page3Visible: false,
  page4Visible: false,
  language: "pt-br",
};

const makeCardSelected = (cardSelected, selectionType = "single", state) => {
  return {
    ...state,
    cards: state.cards.map((card) => {
      if (card.id === cardSelected) {
        return {
          ...card,
          selected: true,
        };
      }
      switch (selectionType) {
        case "multiple":
          return { ...card };
        case "single":
          return {
            ...card,
            selected: false,
          };
        default:
          return card;
      }
    }),
  };
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.value,
      };
    case "SELECT_CARD":
      return makeCardSelected(
        action.value.cardId,
        action.value.selectionType,
        state
      );
    case "NEXT_PAGE":
      console.log(state);
      return {
        ...state,
        page1Visible: action.value.page1,
        page2Visible: action.value.page2,
        page3Visible: action.value.page3,
        page4Visible: action.value.page4,
      };
    case "RESTART":
      return (state = INITIAL_STATE);
    default:
      return state;
  }
};
export default cardsReducer;

export const changeLanguage = (language) => {
  return {
    type: "CHANGE_LANGUAGE",
    value: language,
  };
};
export const selectedCard = (cardId, selectionType) => {
  return {
    type: "SELECT_CARD",
    value: {
      cardId,
      selectionType,
    },
  };
};

export const advance = (page1, page2, page3, page4) => {
  return {
    type: "NEXT_PAGE",
    value: {
      page1,
      page2,
      page3,
      page4,
    },
  };
};

export const card02 = () => {
  return {
    type: "CARD02",
    value: {
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
  };
};

export const card03 = () => {
  return {
    type: "CARD03",
    value: {
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
  };
};
export const step02 = () => {
  return {
    type: "STEP02",
  };
};
export const step03 = () => {
  return {
    type: "STEP03",
  };
};
export const restart = () => {
  return {
    type: "RESTART",
  };
};

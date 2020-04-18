export const changeLanguage = language => {
  return {
    type: "CHANGE_LANGUAGE",
    value: language
  };
};

export const card01 = () => {
  return {
    type: "CARD01",
    value: {
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
        63
      ],
      selected: false,
      color: "#F2994A"
    }
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
        63
      ],
      selected: false,
      color: "#2D9CDB"
    }
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
        63
      ],
      selected: false,
      color: "#828282"
    }
  };
};

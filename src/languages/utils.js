import enGB from "./en-gb.json";
import ptBR from "./pt-br.json";

const getLanguage = selectedLanguage => {
  if (selectedLanguage === "pt-br") {
    return ptBR;
  }

  return enGB;
};

export { getLanguage };

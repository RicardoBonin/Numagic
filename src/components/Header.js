import React from "react";
import _JSXStyle from "styled-jsx/style";
import { connect } from "react-redux";
import { ReactComponent as BrazilFlag } from "../assets/flags/brazil.svg";
import { ReactComponent as UKFlag } from "../assets/flags/united-kingdom.svg";
import { changeLanguage } from "../actions.js";

const Header = ({ currentLanguage, changeLanguage }) => {
  return (
    <div className="container-header">
      <h1>NUMAGIC</h1>
      <div className="language">
        <span id="en-gb" onClick={changeLanguage("en-gb")}>
          <UKFlag />
        </span>
        <span id="pt-br" onClick={changeLanguage("pt-br")}>
          <BrazilFlag />
        </span>
      </div>
      <_JSXStyle id="Header">{`
        .container-header {
          position: relative;
          display: grid;
          width: 100%;
          height: 120px;
          background: #333333;
          align-items: center;
        }

        h1 {
          margin: 0;
          font-family: Roboto;
          font-size: 72px;
          line-height: 84px;
          text-align: center;
          color: #f2f2f2;
        }

        .language {
          position: absolute;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 10px;
          justify-content: end;
          right: 30px;
        }

        span {
          display: block;
          width: 30px;
          cursor: pointer;
        }

        #pt-br svg {
          opacity: ${currentLanguage === "pt-br" ? 1 : 0.4};
        }

        #en-gb svg {
          opacity: ${currentLanguage === "en-gb" ? 1 : 0.4};
        }

        svg:hover {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2em;
            text-align: left;
            padding-left: 1em;
          }
        }
       `}</_JSXStyle>
    </div>
  );
};

const mapStateToProps = ({ language }) => {
  return {
    currentLanguage: language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (language) => () => dispatch(changeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

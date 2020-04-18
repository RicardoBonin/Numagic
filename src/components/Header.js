import React from "react";
import { connect } from "react-redux";
import { ReactComponent as BrazilFlag } from "../assets/flags/brazil.svg";
import { ReactComponent as UKFlag } from "../assets/flags/united-kingdom.svg";

const Header = ({ currentLanguage }) => {
  return (
    <div className="container-header">
      <h1>NUMAGIC</h1>
      <div className="language">
        <span className="en-gb" onClick={() => console.log("en-gb")}>
          <UKFlag />
        </span>
        <span className="pt-br" onClick={() => console.log("pt-br")}>
          <BrazilFlag />
        </span>
      </div>
      <style jsx="true">{`
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

        svg {
          opacity: 0.4;
        }

        svg:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = ({ language }) => {
  return {
    currentLanguage: language
  };
};
export default connect(mapStateToProps)(Header);

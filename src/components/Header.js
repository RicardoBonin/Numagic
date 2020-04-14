import React from "react";

const Header = () => {
  return (
    <div className="container-header">
      <h1>NUMAGIC</h1>
      <style jsx="true">{`
        .container-header {
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
      `}</style>
    </div>
  );
};

export default Header;

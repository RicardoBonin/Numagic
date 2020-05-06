import React from "react";
import _JSXStyle from "styled-jsx/style";

const MagicContainer = ({ children }) => {
  return (
    <div className="magic-coontainer">
      {children}
      <_JSXStyle id="MagicContainer">{`
        .magic-container {
          background-color: #fff;
          height: auto;
        }
      `}</_JSXStyle>
    </div>
  );
};

export default MagicContainer;

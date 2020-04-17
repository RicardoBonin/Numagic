import React from "react";

const MagicContainer = ({ children }) => {
  return (
    <div className="magic-coontainer">
      {children}
      <style jsx="true">{`
        .magic-container {
          background-color: #fff;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default MagicContainer;

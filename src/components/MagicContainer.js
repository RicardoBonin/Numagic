import React from "react";

const MagicContainer = ({ children }) => {
  return (
    <div className="magic">
      {children}
      <style jsx="true">{`
        .magic {
          display: grid;
          background-color: #fff;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default MagicContainer;

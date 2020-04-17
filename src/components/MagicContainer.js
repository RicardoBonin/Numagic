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
          grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr 1fr;
          grid-template-rows: auto;
          grid-row-gap: 5em;
          grid-template-areas:
            ". card-1 . card-2 . card-3 ."
            ". card-4 . card-5 . card-6 .";
        }
      `}</style>
    </div>
  );
};

export default MagicContainer;

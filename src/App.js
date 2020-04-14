import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Instruction from "./components/Instruction";
import MagicContainer from "./components/MagicContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Instruction />
        <MagicContainer>
          <h2>Cards go here...</h2>
        </MagicContainer>
      </div>

      <style jsx="true">{`
        .main {
          height: 100%;
          padding: 0 50px;
        }
      `}</style>
    </div>
  );
}

export default App;

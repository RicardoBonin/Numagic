import React from "react";
import Header from "./components/Header";
import Instruction from "./components/Instruction";
import MagicContainer from "./components/MagicContainer";
import cardsReducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(cardsReducer)

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
      <div className="main">
        <Instruction />
        <MagicContainer>
          <h2>Cards go here...</h2>
        </MagicContainer>
      </div>
      </Provider>
      

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

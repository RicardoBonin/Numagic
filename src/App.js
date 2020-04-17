import React from "react";
import Header from "./components/Header";
import Instruction from "./components/Instruction";
import MagicContainer from "./components/MagicContainer";
import cardsReducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Button from "./components/Button";
import Cards from "./components/Cards";

const store = createStore(cardsReducer);

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <div className="main">
          <Instruction />
          <MagicContainer>
            <div className="card-container" id="card-container-1">
              <div className="cartao-provisorio" id="card-1">
                <p>
                  1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43
                  45 47 49 51 53 55 57 59 61 63
                </p>
              </div>
              <Button className="button-select" cardNumber={1} />
            </div>
            <div className="card-container" id="card-container-2">
              <div className="cartao-provisorio" id="card-2">
                <p>
                  1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43
                  45 47 49 51 53 55 57 59 61 63
                </p>
              </div>
              <Button className="button-select" cardNumber={2} />
            </div>
            <div className="card-container" id="card-container-3">
              <div className="cartao-provisorio" id="card-3">
                <p>
                  1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43
                  45 47 49 51 53 55 57 59 61 63
                </p>
              </div>
              <Button className="button-select" cardNumber={3} />
            </div>
            <div className="card-container" id="card-container-4">
              <div className="cartao-provisorio" id="card-4">
                <p>
                  1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43
                  45 47 49 51 53 55 57 59 61 63
                </p>
              </div>
              <Button className="button-select" cardNumber={4} />
            </div>
            <div className="card-container" id="card-container-5">
              <div className="cartao-provisorio" id="card-5">
                <p>
                  1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43
                  45 47 49 51 53 55 57 59 61 63
                </p>
              </div>
              <Button className="button-select" cardNumber={5} />
            </div>
            <div className="card-container" id="card-container-6">
              <div className="cartao-provisorio" id="card-6">
                <p>
                  1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43
                  45 47 49 51 53 55 57 59 61 63
                </p>
              </div>
              <Button className="button-select" cardNumber={6} />
            </div>
          </MagicContainer>
          <Cards />
        </div>
      </Provider>

      <style jsx="true">{`
        .main {
          padding: 0 50px;
        }

        /* Este codigo eh temporario, pois sera criado no componente Card. */
        .cartao-provisorio {
          display: grid;
          margin-bottom: 20px;
        }
        .card-container {
          display: grid;
          grid-template-rows: 4fr 1fr;
          padding: 25px 0 0 0;
        }
        #card-1 {
          background-color: #f2994a;
        }
        #card-2 {
          background-color: #2d9cdb;
        }
        #card-3 {
          background-color: #cccccc;
        }
        #card-4 {
          background-color: #eb5757;
        }
        #card-5 {
          background-color: #f2c94c;
        }
        #card-6 {
          background-color: #9b51e0;
        }

        #card-container-1 {
          grid-area: card-1;
        }
        #card-container-2 {
          grid-area: card-2;
        }
        #card-container-3 {
          grid-area: card-3;
        }
        #card-container-4 {
          grid-area: card-4;
        }
        #card-container-5 {
          grid-area: card-5;
        }
        #card-container-6 {
          grid-area: card-6;
        }
      `}</style>
    </div>
  );
}

export default App;

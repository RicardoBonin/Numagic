import React from "react";
import Header from "./components/Header";
import MagicContainer from "./components/MagicContainer";
import cardsReducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import _JSXStyle from "styled-jsx/style";

const store = createStore(cardsReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="main">
          <MagicContainer>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
          </MagicContainer>
        </div>
      </div>
      <_JSXStyle id="App">{`
        .main {
          padding: 0 1em;
        }
      `}</_JSXStyle>
    </Provider>
  );
}

export default App;

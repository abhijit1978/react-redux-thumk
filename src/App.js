import React from "react";
import { Provider } from "react-redux";
import store from "./app-store/store";
import CakeContainer from "./components/cakeContainer";
import IcecreamContainer from "./components/icecreamContainer";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Hello World!</p>
        <CakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;

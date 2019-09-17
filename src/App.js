import React, { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavWrapper from "./Components/NavWrapper";
import { mainNavItems } from "./API/data";

function App() {
  const [mainNavState, setMainNavState] = useState(mainNavItems);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <Route
          path="/"
          render={props => <NavWrapper {...props} navState={mainNavState} />}
        />
      </header>
    </div>
  );
}

export default App;

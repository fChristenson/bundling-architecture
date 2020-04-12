import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage/SearchPage";
import { SearchPage2 } from "./SearchPage/SearchPage2";

// To help my bundling time at this level I can simply comment out the routes I'm not working on
const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <h1>Hello World</h1>} />
    <Route exact path="/1" render={() => <SearchPage />} />
    <Route exact path="/2" render={() => <SearchPage2 />} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

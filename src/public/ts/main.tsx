import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage/SearchPage";
import { SearchPage2 } from "./SearchPage/SearchPage2";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <SearchPage />} />
    <Route exact path="/2" render={() => <SearchPage2 />} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

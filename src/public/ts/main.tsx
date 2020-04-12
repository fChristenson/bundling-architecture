import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage/SearchPage";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <SearchPage />} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

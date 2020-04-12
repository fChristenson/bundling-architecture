import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage/SearchPage";
import { SearchPage2 } from "./SearchPage/SearchPage2";

/**
 * To help my bundling time at this level I can simply comment out the routes I'm not working on.
 * However this will only work if I know that each node tree is isolated from the other node trees.
 * If each of the node trees are coupled I will be slowed down by the code each tree shares.
 *
 * This makes modular architecture and only importing what you need essential.
 * Make a habbit of having small files without shared logic.
 * Shared logic can then be moved to shared files.
 * This makes it easy to only include what is needed in the node tree.
 */
const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <h1>Hello World</h1>} />
    <Route exact path="/1" render={() => <SearchPage />} />
    <Route exact path="/2" render={() => <SearchPage2 />} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

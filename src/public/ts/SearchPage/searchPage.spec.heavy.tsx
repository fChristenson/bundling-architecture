import { SearchPage } from "./SearchPage";
import React from "react";
import render from "react-test-renderer";

describe("SearchPage", () => {
  it("should render", () => {
    const searchPage = render.create(<SearchPage />);
    const node = searchPage.toJSON();
    expect(node).toMatchSnapshot();
  });
});

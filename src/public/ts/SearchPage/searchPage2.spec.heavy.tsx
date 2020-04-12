import { SearchPage2 } from "./SearchPage2";
import React from "react";
import render from "react-test-renderer";

describe("SearchPage2", () => {
  it("should render", () => {
    const searchPage2 = render.create(<SearchPage2 />);
    const node = searchPage2.toJSON();
    expect(node).toMatchSnapshot();
  });
});

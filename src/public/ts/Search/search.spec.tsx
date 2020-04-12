import { Search } from "./Search";
import React from "react";
import render from "react-test-renderer";

const noop = () => {};

describe("Search", () => {
  it("should render", () => {
    const search = render.create(<Search setNumber={noop}>foo</Search>);
    const node = search.toJSON();
    expect(node).toMatchSnapshot();
  });
});

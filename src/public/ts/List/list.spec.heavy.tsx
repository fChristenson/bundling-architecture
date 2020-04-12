import { List } from "./List";
import React from "react";
import render from "react-test-renderer";

describe("List", () => {
  it("should render", () => {
    const list = render.create(<List number={0} />);
    const node = list.toJSON();
    expect(node).toMatchSnapshot();
  });
});

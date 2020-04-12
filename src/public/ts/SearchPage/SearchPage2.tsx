import React from "react";
import { List } from "@ts/List/List";
import { Search } from "@ts/Search/Search";
import { makeHighNumber } from "./highNumber";

// Better
export const SearchPage2 = () => {
  const [number, setNumber] = React.useState(0);
  const highNumber = makeHighNumber(alert, setNumber);

  return (
    <Search setNumber={highNumber}>
      <List number={number} />
    </Search>
  );
};

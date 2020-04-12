import React from "react";
import { List } from "@ts/List/List";
import { Search } from "@ts/Search/Search";
import { makeHighNumber } from "./highNumber";

/**
 * Better,
 * I can't eject the <List> but I have captured the logic inside a function.
 * I can now run a unit test on highNumber without being slowed down by <SearchPage2>.
 */
export const SearchPage2 = () => {
  const [number, setNumber] = React.useState(0);
  const highNumber = makeHighNumber(console.log, setNumber);

  return (
    <Search setNumber={highNumber}>
      <List number={number} />
    </Search>
  );
};

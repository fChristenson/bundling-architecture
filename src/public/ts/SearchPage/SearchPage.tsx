import React from "react";
import { List } from "@ts/List/List";
import { Search } from "@ts/Search/Search";
import { makeHighNumber } from "./highNumber";

// Not great
export const SearchPage = () => {
  const [number, setNumber] = React.useState(0);

  const highNumber = (e: any) => {
    const n = parseInt(e.target.value);
    if (n > 10_00) alert("High number");
    setNumber(n);
  };

  return (
    <div>
      <input type="text" onChange={highNumber} placeholder="Filter" />
      <List number={number} />
    </div>
  );
};

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

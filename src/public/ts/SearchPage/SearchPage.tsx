import React from "react";
import { List } from "@ts/List/List";

/**
 * Not great.
 * Any test I write for <SearchPage> will have at least the same execution time as <List>.
 */
export const SearchPage = () => {
  const [number, setNumber] = React.useState(0);

  const highNumber = (e: any) => {
    const n = parseInt(e.target.value);
    if (n > 10_00) console.log("High number");
    setNumber(n);
  };

  return (
    <div>
      <input type="text" onChange={highNumber} placeholder="Filter" />
      <List number={number} />
    </div>
  );
};

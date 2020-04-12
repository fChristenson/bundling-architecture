import React from "react";
import { List } from "@ts/List/List";

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

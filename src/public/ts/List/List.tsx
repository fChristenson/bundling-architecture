import React from "react";
import data from "@root/data.json";

interface IProps {
  number: number;
}

/**
 * Imagine that <List> is a heavy node in our component tree. Tons of code is connected to it.
 *
 * We need a way to make <List> isolated from other code so our remaining code and tests
 * will run at maximum speed.
 */
export const List: React.FunctionComponent<IProps> = ({ number }) => {
  return (
    <ul>
      {data
        .filter((n) => n > number)
        .map((n) => (
          <li key={n}>{n}</li>
        ))}
    </ul>
  );
};

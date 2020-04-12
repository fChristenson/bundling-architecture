import React from "react";
import data from "@root/data.json";

interface IProps {
  number: number;
}

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

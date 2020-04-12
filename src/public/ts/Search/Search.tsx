import React from "react";

interface IProps {
  setNumber(n: number): void;
}

export const Search: React.FunctionComponent<IProps> = ({
  children,
  setNumber,
}) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder="Filter"
      />
      {children}
    </div>
  );
};

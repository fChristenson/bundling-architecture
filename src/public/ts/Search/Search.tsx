import React from "react";

interface IProps {
  setNumber(e: any): void;
}

export const Search: React.FunctionComponent<IProps> = ({
  children,
  setNumber,
}) => {
  return (
    <div>
      <input type="text" onChange={setNumber} placeholder="Filter" />
      {children}
    </div>
  );
};

import React from "react";
import Typography from "./typography";
export const Table = ({ children }) => {
  return (
    <div className="table-wrapper">
      <table>{children}</table>
    </div>
  );
};

export const Thead = ({ children }) => {
  return <thead>{children}</thead>;
};

export const Tbody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const Tr = ({ children }) => {
  return <tr>{children}</tr>;
};

export const Td = ({ children, colSpan, rowSpan, style, textStyle }) => {
  return (
    <td colSpan={colSpan} rowSpan={rowSpan} style={style}>
      <Typography variant={textStyle}>{children}</Typography>
    </td>
  );
};

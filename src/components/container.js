import React from "react";

export const Container = ({ name, children }) => {
  if (name) {
    return <div className={name}>{children}</div>;
  } else {
    return <div className="container">{children}</div>;
  }
};

export const Row = ({ name, children }) => {
  if (name) {
    return <div className={`row ${name}`}>{children}</div>;
  } else {
    return <div className="row block">{children}</div>;
  }
};

export const Col = ({ name, children }) => {
  if (name) {
    return <div className={`col ${name}`}>{children}</div>;
  } else {
    return <div className="col col-8 col-s-4">{children}</div>;
  }
};

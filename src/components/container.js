import React from "react";

export const Container = ({ name, children, style }) => {
  if (name) {
    return (
      <div className={name} style={style}>
        {children}
      </div>
    );
  } else {
    return <div className="container">{children}</div>;
  }
};

export const Row = ({ name, children, style }) => {
  if (name) {
    return (
      <div className={`row ${name}`} style={style}>
        {children}
      </div>
    );
  } else {
    return <div className="row block">{children}</div>;
  }
};

export const Col = ({ name, children, style }) => {
  if (name) {
    return (
      <div className={`col ${name}`} style={style}>
        {children}
      </div>
    );
  } else {
    return <div className="col col-8 col-s-4">{children}</div>;
  }
};

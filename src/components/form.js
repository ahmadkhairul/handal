import React from "react";

export const Label = ({ children }) => {
  return <p className="form-label">{children}</p>;
};

export const Input = ({ type, name, value }) => {
  return (
    <p>
      <input className="form-input" type={type} name={name} value={value} />
    </p>
  );
};

export const Select = ({ name, children }) => {
  return (
    <p>
      <select className="form-input" name={name}>
        {children}
      </select>
    </p>
  );
};

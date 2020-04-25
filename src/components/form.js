import React from "react";

export const Label = ({ children }) => {
  return <p className="form-label">{children}</p>;
};

export const Input = ({ type, name, value, onChange }) => {
  return (
    <p>
      <input
        className="form-input"
        type={type}
        onChange={onChange}
        name={name}
        value={value}
      />
    </p>
  );
};

export const Select = ({ name, children, value, onChange }) => {
  return (
    <p>
      <select
        className="form-input"
        name={name}
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
    </p>
  );
};

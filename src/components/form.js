import React from "react";

const style = {
  font: {
    marginBottom: "0.5em",
    lineHeight: "16px"
  },
  input: {
    height: "30px",
    width: "100%",
    background: "#FFFFFF",
    border: "1px solid #CCCCCC",
    borderRadius: "1px",
    paddingLeft: "0.5em"
  }
};

export const Label = ({ children }) => {
  return (
    <p style={style.font} className="default">
      {children}
    </p>
  );
};

export const Input = ({ type, name, value }) => {
  return (
    <p>
      <input style={style.input} type={type} name={name} value={value} />
    </p>
  );
};

export const Select = ({ name, children }) => {
  return (
    <p>
      <select style={style.input} name={name}>
        {children}
      </select>
    </p>
  );
};

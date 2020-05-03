import React from "react";

const Box = ({ Flex, Light, children, width, height }) => {
  return (
    <span
      style={{
        width: width ? width : "100%",
        height: height ? height : "100%",
        border: Light ? "0.25px solid #cccccc" : "1px solid #cccccc",
        padding: "1.2em",
        margin: "1em 0em 1em",
        borderRadius: "3px"
      }}
      className={Flex ? "flex" : "block"}
    >
      {children}
    </span>
  );
};

export default Box;

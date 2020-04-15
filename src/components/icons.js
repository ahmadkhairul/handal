import React from "react";

const Icon = ({ onClick, src, transform }) => {
  return (
    <img
      onClick={onClick}
      style={{ marginLeft: "5px", transform: transform }}
      src={src}
      alt="handal-icons"
      width="10px"
      height="10px"
    />
  );
};

export default Icon;

import React from "react";

const Icon = ({ onClick, src, width, height, style }) => {
  return (
    <img
      onClick={onClick}
      style={style}
      src={src}
      alt="handal-icons"
      width={width}
      height={height}
    />
  );
};

export default Icon;

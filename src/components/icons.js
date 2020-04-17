import React from "react";

const Icon = ({
  onClick,
  src,
  transform,
  size,
  border,
  radius,
  bgcolor,
  padding,
  margin
}) => {
  return (
    <img
      onClick={onClick}
      style={{
        transform: transform,
        border: border,
        borderRadius: radius,
        backgroundColor: bgcolor,
        padding: padding,
        margin: margin
      }}
      src={src}
      alt="handal-icons"
      width={size}
      height={size}
    />
  );
};

export default Icon;

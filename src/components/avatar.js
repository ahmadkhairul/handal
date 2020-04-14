import React from "react";

const style = {
  background: "#ffffff",
  borderRadius: "50%",
  border: "0.5px solid #b0b0b0",
  padding: "5px"
};

const Avatar = ({ size, name, alt }) => {
  return <img style={style} src={name} alt={alt} width={size} height={size} />;
};

export default Avatar;

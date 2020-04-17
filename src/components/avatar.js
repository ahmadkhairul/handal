import React from "react";

const Avatar = ({ size, name, alt }) => {
  return (
    <img className="avatar" src={name} alt={alt} width={size} height={size} />
  );
};

export default Avatar;

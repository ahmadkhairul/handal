import React from "react";

const Box = ({ variant, children }) => {
  if (variant !== null) {
    return <span className={variant}>{children}</span>;
  } else {
    return <span className="box-none">{children}</span>;
  }
};

export default Box;

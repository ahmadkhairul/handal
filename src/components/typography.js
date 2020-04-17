import React from "react";

const Typography = ({ variant, children }) => {
  if (variant) {
    return <span className={variant}>{children}</span>;
  } else {
    return <span>{children}</span>;
  }
};

export default Typography;

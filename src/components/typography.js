import React from "react";

const Typography = ({ variant, children }) => {
  if (variant !== null) {
    return <span className={variant}>{children}</span>;
  } else {
    return <span className="default">{children}</span>;
  }
};

export default Typography;

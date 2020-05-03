import React from "react";

const Typography = ({ variant, children, onClick }) => {
  if (variant) {
    return (
      <span onClick={onClick} className={variant}>
        {children}
      </span>
    );
  } else {
    return <span onClick={onClick}>{children}</span>;
  }
};

export default Typography;

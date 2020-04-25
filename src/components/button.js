import React from "react";
const Button = ({ variant, onClick, children, type }) => {
  if (variant) {
    return (
      <button onClick={onClick} className={variant} type={type}>
        {children}
      </button>
    );
  } else {
    return <button onClick={onClick}>{children}</button>;
  }
};

export default Button;

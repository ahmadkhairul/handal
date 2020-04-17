import React from "react";
const Button = ({ variant, onClick, children }) => {
  if (variant) {
    return (
      <button onClick={onClick} className={variant}>
        {children}
      </button>
    );
  } else {
    return <button onClick={onClick}>{children}</button>;
  }
};

export default Button;

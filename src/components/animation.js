import React from "react";

const Animation = ({ name, duration, children }) => {
  return (
    <div style={{ animation: `${name} ${duration}` }}>
      {children}
      <style>
        {`@keyframes ${name} {
           0% { opacity: 0; }
          100% { opacity: 1; }
        }`}
      </style>
    </div>
  );
};

export default Animation;

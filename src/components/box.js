import React from "react";

const Typography = ({ name, children }) => {
  if (name === "innerBox") {
    return (
      <div
        style={{
          border: "0.25px solid #CCCCCC",
          borderRadius: "5px",
          height: "100%",
          width: "100%"
        }}
      >
        {children}
      </div>
    );
  } else if (name === "outerBox") {
    return (
      <div
        style={{
          border: "1px solid #CCCCCC",
          borderRadius: "3px",
          height: "100%",
          width: "100%",
          padding: "15px"
        }}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div style={{ border: "0px", height: "100%", width: "100%" }}>
        {children}
      </div>
    );
  }
};

export default Typography;

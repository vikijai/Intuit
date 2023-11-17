import React from "react";

const Tooltip = ({tooltipPosition}) => {
  return (
    <div
      style={{
        border: "solid black 1px",
        position: "absolute",
        top: `${tooltipPosition.y}px`,
        left: `${tooltipPosition.x}px`,
        backgroundColor: "#555",
        color: "#fff",
        borderRadius: "6px",
        padding: "5px",
        zIndex: "1000",
        cursor: "pointer",
      }}
    >
      <p>Testing to see if my component renders!</p>
    </div>
  );
};

export default Tooltip;

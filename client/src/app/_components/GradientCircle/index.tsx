import React from "react";
import "./styles.css";

type GradientCircleProps = {
  size: "small" | "medium" | "large";
  color: "purple" | "green" | "violet" | "turquoise";
  alignItems: "align-center" | "align-start" | "align-end";
  justifyContent: "justify-center" | "justify-start" | "justify-end";
};

const GradientCircle = ({
  size,
  color,
  alignItems,
  justifyContent,
}: GradientCircleProps) => {
  return (
    <div className={`container ${alignItems} ${justifyContent}`}>
      <div className={`circle ${size} ${color}`}></div>
    </div>
  );
};

export default GradientCircle;

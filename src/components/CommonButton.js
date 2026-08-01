import React from "react";
import "./CommonButton.css";

const CommonButton = ({
  text = "Click Here",
  to = "/",
  type = "button",
  className = "",
}) => {
  const handleClick = () => {
    window.location.href = to;
  };

  return (
    <button
      type={type}
      className={`common-btn ${className}`}
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default CommonButton;
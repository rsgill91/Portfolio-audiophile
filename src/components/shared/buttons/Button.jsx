import React from "react";
import Typo from "../Typography/Typo";
import "./Button.css";

export default function Button(props) {
  const getSizeClasses = (size) => {
    if (size === "md") return "m-btn-md";
    if (size === "block") return "m-btn-block";
    if (size === "sm") return "m-btn-sm";
  };
  const getVariantClasses = (variant) => {
    if (variant === "primary") return "m-btn-primary";
    if (variant === "outlined") return "m-btn-outlined";
    if (variant === "black") return "m-btn-black";
    if (variant === "link") return "m-btn-link";
    if (variant === "shop") return "m-btn-shop";
  };

  return (
    <button
      {...props}
      className={`${getVariantClasses(props.variant)} ${getSizeClasses(
        props.size
      )}`}
    >
      <Typo variant="subtitle">{props.label}</Typo>
    </button>
  );
}

Button.defaultProps = {
  size: "md",
  variant: "primary",
  label: "see product",
};

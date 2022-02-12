import React from "react";
import "./Typo.css";

function Typo(props) {
  const getClass = (variant) => {
    switch (variant) {
      case "h1":
        return "m-title";
      case "h2":
        return "m-title-h2";
      case "h3":
        return "m-title-h3";
      case "h4":
        return "m-title-h4";
      case "h5":
        return "m-title-h5";
      case "h6":
        return "m-title-h6";
      case "overline":
        return "overline";
      case "overline-copper":
        return "overline-copper";
      case "subtitle":
        return "subtitle";
      case "subtitle-opacity":
        return "subtitle-opacity";
      case "body":
        return "body";
      case "body-bold":
        return "body-bold";
      case "body-opacity":
        return "body-opacity";
      case "body-bold-copper":
        return "body-bold-copper";

      default:
        return "";
    }
  };

  return (
    <div {...props} className={getClass(props.variant)}>
      {props.children}
    </div>
  );
}

export default Typo;

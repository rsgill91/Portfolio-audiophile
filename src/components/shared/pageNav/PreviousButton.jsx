import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Typo from "../Typography/Typo";
import "./PreviousButton.css";

function PreviousButton() {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper-previous" onClick={""}>
      <Typo variant="body">Go Back</Typo>
    </div>
  );
}

export default PreviousButton;

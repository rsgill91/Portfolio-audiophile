import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Typo from "../Typography/Typo";
import "./PreviousButton.css";

function PreviousButton() {
  const navigate = useNavigate();

  return (
    <span className="m-return" onClick={() => navigate(-1)}>
      <Typo variant="body-opacity">Go Back</Typo>
    </span>
  );
}

export default PreviousButton;

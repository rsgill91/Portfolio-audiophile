import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Typo from "../Typography/Typo";
import "./PreviousButton.css";

function PreviousButton() {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper-previous">
      <Link to={() => navigate(-1)}>
        <Typo variant="body">Go Back</Typo>
      </Link>
    </div>
  );
}

export default PreviousButton;

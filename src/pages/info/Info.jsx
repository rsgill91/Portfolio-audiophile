import { Container } from "@mui/material";
import React from "react";
import "./Info.css";

import About from "../../components/about/About";
import Categories from "../../components/categories/Categories";
import PreviousButton from "../../components/shared/pageNav/PreviousButton";

function Info() {
  return (
    <div className="parent-wrapper-info">
      <Container>
        <div className="return-button">
          <PreviousButton />
        </div>

        <Categories />
        <About />
      </Container>
    </div>
  );
}

export default Info;

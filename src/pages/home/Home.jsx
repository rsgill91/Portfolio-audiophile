import "./Home.css";
import React from "react";
import { Container } from "@mui/material";
import Categories from "../../components/categories/Categories";
import Typo from "../../components/shared/Typography/Typo";
import About from "../../components/about/About";
import Button from "../../components/shared/buttons/Button";
import Launches from "../../components/launches/Launches";

function Home() {
  return (
    <div className="main-wrapper-home">
      <div className="hero-page">
        <Container>
          <div className="main-wrapper-hero">
            <div className="hero-item">
              <div className="new-product">
                <Typo variant="overline">new product</Typo>
              </div>

              <br />
              <div className="hero-header">
                <Typo variant="h1">xx99 mark ||</Typo>
                <br />
                <Typo variant="h1">headphones</Typo>
              </div>

              <br></br>
              <div className="hero-info">
                <Typo variant="body">
                  Experience natural, lifelike audio and exceptional
                  <br /> build quality made for the passionate music <br />
                  enthusiast.
                </Typo>
              </div>

              <br />
              <br />
              <div className="hero-button">
                <Button variant="primary" label="See Product" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="home-page">
        <Container className="wrapper-home-page">
          <Categories />
          <Launches />
          <About />
        </Container>
      </div>
    </div>
  );
}

export default Home;

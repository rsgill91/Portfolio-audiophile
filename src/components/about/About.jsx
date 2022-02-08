import React from "react";
import "./About.css";
import Typo from "../shared/Typography/Typo";

function About() {
  return (
    <div className="main-wrapper-about">
      <div className="text-section">
        <div className="main-text-wrapper">
          <div className="tag-line">
            <Typo variant="h2">
              bringing you the <span className="accent-word">best</span> audio
              gear
            </Typo>
          </div>
          <br />
          <br />
          <div className="about-info">
            <Typo variant="body">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Typo>
          </div>
        </div>
      </div>
      <div className="promo-image-section">
        <img
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt=""
          className="desktop-image"
        />
        <img
          src="/assets/shared/tablet/image-best-gear.jpg"
          alt=""
          className="tablet-image"
        />
        <img
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt=""
          className="mobile-image"
        />
      </div>
    </div>
  );
}

export default About;

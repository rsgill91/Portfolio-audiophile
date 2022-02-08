import React from "react";
import "./Launches.css";
import Typo from "../shared/Typography/Typo";
import Button from "../shared/buttons/Button";

function Launches() {
  return (
    <div className="main-wrapper-launches">
      <div className="latest-speakers">
        <div className="latest-speakers-image">
          <img src="assets/home/desktop/image-speaker-zx9.png" alt="" />
        </div>

        <div className="latest-speakers-text">
          <div className="about-latest-speakers">
            <Typo variant="h1">zx9 speaker</Typo>
            <Typo variant="body">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typo>
            <Button variant="black" label="see product" />
          </div>
        </div>
      </div>

      <div className="last-speakers">
        <div className="last-speaker-text">
          <Typo variant="h4">zx7 speaker</Typo>
          <Button variant="outlined" label="see product" />
        </div>
      </div>

      <div className="latest-earphones">
        <div className="earphones-latest-image">
          <img
            className="desktop-latest-earphones"
            src="assets/home/desktop/image-earphones-yx1.jpg"
            alt=""
          />
          <img
            className="tablet-latest-earphones"
            src="assets/home/tablet/image-earphones-yx1.jpg"
            alt=""
          />
          <img
            className="mobile-latest-earphones"
            src="assets/home/mobile/image-earphones-yx1.jpg"
            alt=""
          />
        </div>
        <div className="earphones-latest-text">
          <div className="about-earphones">
            <Typo variant="h4">yx1 earphones</Typo>
            <Button variant="outlined" label="see product" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Launches;

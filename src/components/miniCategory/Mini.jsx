import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../shared/buttons/Button";
import Typo from "../shared/Typography/Typo";
import "./Mini.css";

function Mini({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    onClose();
    navigate(`/${link}`);
  };

  return (
    <div className="parent-wrapper-mini">
      <div className="mini-categories">
        <div
          onTouchEnd={() => handleNavigation("headphones")}
          className="mini-type"
        >
          <div className="mini-type-image">
            <img
              className="mini-product"
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
            />
          </div>
          <div className="mini-text">
            <Typo variant="h6">headphones</Typo>
            <div className="mini-pointer">
              <Button size="sm" variant="shop" label="shop" />
            </div>
          </div>
        </div>

        <div
          onTouchEnd={() => handleNavigation("speakers")}
          className="mini-type"
        >
          <div className="mini-type-image">
            <img
              className="mini-product"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
            />
          </div>
          <div className="mini-text">
            <Typo variant="h6">speakers</Typo>
            <div className="mini-pointer">
              <Button size="sm" variant="shop" label="shop" />
            </div>
          </div>
        </div>

        <div
          onTouchEnd={() => handleNavigation("earphones")}
          className="mini-type"
        >
          <div className="mini-type-image">
            <img
              className="mini-product"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            />
          </div>
          <div className="mini-text">
            <Typo variant="h6">earphones</Typo>
            <div className="mini-pointer">
              <Button size="sm" variant="shop" label="shop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mini;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../shared/buttons/Button";
import Typo from "../shared/Typography/Typo";
import "./Categories.css";

function Categories() {
  return (
    <div className="main-category-wrapper">
      <div className="product-categories">
        <div className="category-type">
          <div className="category-image">
            <img
              className="product-image"
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
            />
          </div>

          <div className="category-text">
            <div className="product-title">
              <Typo variant="h6">Headphones</Typo>
            </div>
            <div className="category-pointer">
              <Link to="/headphones">
                <Button size="sm" variant="shop" label="shop" />
              </Link>
            </div>
          </div>
        </div>

        <div className="category-type">
          <div className="category-image">
            <img
              className="product-image"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
            />
          </div>

          <div className="category-text">
            <div className="product-title">
              <Typo variant="h6">Speakers</Typo>
            </div>
            <div className="category-pointer">
              <Link to="/speakers">
                <Button size="sm" variant="shop" label="shop" />
              </Link>
            </div>
          </div>
        </div>

        <div className="category-type">
          <div className="category-image">
            <img
              className="product-image"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            />
          </div>

          <div className="category-text">
            <div className="product-title">
              <Typo variant="h6">Earphones</Typo>
            </div>
            <div className="category-pointer">
              <Link to="/earphones">
                <Button size="sm" variant="shop" label="shop" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

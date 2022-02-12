import React from "react";
import { Link } from "react-router-dom";
import Button from "../shared/buttons/Button";
import Typo from "../shared/Typography/Typo";
import "./Categories.css";

function Categories() {
  var list = [
    {
      name: "headphones",
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    },
    {
      name: "speakers",
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    },
    {
      name: "earphones",
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    },
  ];
  return (
    <div className="main-wrapper-categories">
      {list.map((item) => (
        <div className="category-section">
          <div className="category-image">
            <img src={item.image} alt="" />
          </div>

          <div className="category-text">
            <Typo variant="h6">{item.name}</Typo>
            <Link to={`/${item.name}`}>
              <div className="category-pointer">
                <Button size="sm" variant="shop" label="shop" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;

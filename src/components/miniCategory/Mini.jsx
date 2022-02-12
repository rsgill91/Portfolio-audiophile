import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/buttons/Button";
import Typo from "../shared/Typography/Typo";
import "./Mini.css";

function Mini({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    onClose();
    navigate(`/${link}`);
  };

  var miniList = [
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
    <div className="parent-wrapper-mini">
      {miniList.map((product) => (
        <div className="mini-categories">
          <div
            onTouchEnd={() => handleNavigation(product.name)}
            className="mini-type"
          >
            <div className="mini-type-image">
              <img className="mini-product" src={product.image} alt="" />
            </div>
            <div className="mini-text">
              <Typo variant="h6">{product.name}</Typo>
              <div className="mini-pointer">
                <Button size="sm" variant="shop" label="shop" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mini;

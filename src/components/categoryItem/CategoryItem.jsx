import React from "react";
import Button from "../shared/buttons/Button";
import Typo from "../shared/Typography/Typo";
import "./CategoryItem.css";

function CategoryItem(props) {
  let { name, new: isNew, categoryImage, description } = props.data;

  return (
    <div className="item-product ">
      <div className="item-image">
        <picture className="image-preview">
          <source
            media="(min-width: 1200px)"
            srcSet={categoryImage.desktop.slice(1)}
          />
          <source
            media="(min-width: 768px)"
            srcSet={categoryImage.tablet.slice(1)}
          />
          <source
            media="(min-width: 375px)"
            srcSet={categoryImage.mobile.slice(1)}
          />
          <img src={categoryImage.desktop.slice(1)} alt="" />
        </picture>
      </div>

      <div className="main-wrapper-text">
        <div className="item-text">
          {isNew ? (
            <div className="item-new">
              <Typo variant="overline-copper">new product</Typo>
            </div>
          ) : (
            ""
          )}

          <div className="item-name">
            <Typo variant="h2">{name}</Typo>
          </div>

          <div className="item-info">
            <Typo variant="body">{description}</Typo>
          </div>

          <Button variant="primary" label=" SEE PRODUCT" />
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;

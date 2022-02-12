import React from "react";
import "./Suggestions.css";
import Typo from "../shared/Typography/Typo";
import { Link } from "react-router-dom";
import Button from "../../components/shared/buttons/Button";

function Suggestions(props) {
  var suggestedProducts = props?.others;

  return (
    <div className="related-products">
      <div className="suggested-heading">
        <Typo variant="h3">You may also like</Typo>
      </div>
      <div className="main-wrapper-suggested">
        {suggestedProducts?.map((each) => (
          <div className="suggested-item">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet={each.image.desktop.slice(1)}
              />
              <source
                media="(min-width: 768px)"
                srcSet={each.image.tablet.slice(1)}
              />
              <source
                media="(min-width: 375px)"
                srcSet={each.image.mobile.slice(1)}
              />
              <img src={each.image.desktop.slice(1)} alt="" />
            </picture>

            <Typo variant="h5">{each.name}</Typo>

            <Link to={`/products/${each.slug}`}>
              <Button variant="primary" label="see product" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;

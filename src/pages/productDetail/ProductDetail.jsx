import { Container, Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetail.css";
import Typo from "../../components/shared/Typography/Typo";
import About from "../../components/about/About";
import Categories from "../../components/categories/Categories";
import PreviousButton from "../../components/shared/pageNav/PreviousButton";
import Button from "../../components/shared/buttons/Button";
import { useParams, useNavigate, Link } from "react-router-dom";
import Suggestions from "../../components/suggestions/Suggestions";
import Counter from "../../components/shared/buttons/counter/Counter";
import GalleryImages from "../../components/galleryImages/GalleryImages";

function ProductDetail() {
  let { slug } = useParams();
  // const navigator = useNavigate();

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios("/data.json").then((res) => {
      setSelected(res.data.find((product) => product.slug === slug));
    });
  }, []);

  var boxItems = selected?.includes;

  return (
    <div className="parent-wrapper-info">
      <Container>
        <PreviousButton />
        {selected ? (
          <div className="selected-product">
            <div className="info-card">
              <div className="full-image">
                <picture>
                  <source
                    media="(min-width: 1200px)"
                    srcSet={selected.image.desktop.slice(1)}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={selected.image.tablet.slice(1)}
                  />
                  <source
                    media="(min-width: 375px)"
                    srcSet={selected.image.mobile.slice(1)}
                  />
                  <img src={selected.image.desktop.slice(1)} alt="" />
                </picture>
              </div>
              <div className="full-info">
                <div className="full-text">
                  {selected.new && (
                    <div className="item-new">
                      <Typo variant="overline-copper">new product</Typo>
                    </div>
                  )}
                  <div className="full-name">
                    <Typo variant="h2">{selected.name}</Typo>
                  </div>

                  <Typo variant="body-opacity">{selected.description}</Typo>
                  <Typo variant="h6">${selected.price}</Typo>
                  <div className="shopping-buttons">
                    <Counter />
                    <Button variant="primary" label="add to cart" />
                  </div>
                </div>
              </div>
            </div>

            <div className="detailed-info">
              <div className="product-features">
                <Typo variant="h3">features</Typo>
                <div className="features-text">
                  <Typo variant="body-opacity">{selected.features}</Typo>
                </div>
              </div>

              <div className="product-box">
                <div className="box-title">
                  <Typo variant="h3">in the box</Typo>
                </div>

                <div className="box-contents">
                  {boxItems.map((things) => (
                    <div className="box-detail">
                      <Typo variant="body-bold-copper">{things.quantity}x</Typo>

                      <Typo variant="body-opacity">{things.item}</Typo>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <GalleryImages gallery={selected.gallery} />
            <Suggestions others={selected.others} />
          </div>
        ) : (
          <Skeleton height="50vh" />
        )}
        <Categories />
        <About />
      </Container>
    </div>
  );
}

export default ProductDetail;

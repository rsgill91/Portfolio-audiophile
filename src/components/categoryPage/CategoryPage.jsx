import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import "./CategoryPage.css";
import axios from "axios";
import Categories from "../categories/Categories";
import About from "../about/About";
import CategoryItem from "../categoryItem/CategoryItem";
import Typo from "../shared/Typography/Typo";

function CategoryPage() {
  let category = useParams().category;
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios("/data.json").then((res) => {
      setProducts(
        res.data.filter((product) => product.category === category).reverse()
      );
    });
  }, [category]);

  return (
    <div className="parent-wrapper-category-page">
      <div className="header-section-categories">
        <Typo variant="h2">{category}</Typo>
      </div>
      <Container>
        {products && products.map((product) => <CategoryItem data={product} />)}
        <Categories />
        <About />
      </Container>
    </div>
  );
}

export default CategoryPage;

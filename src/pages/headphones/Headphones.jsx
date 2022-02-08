import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Headphones.css";
import axios from "axios";
import Categories from "../../components/categories/Categories";
import About from "../../components/about/About";
import CategoryItem from "../../components/categoryItem/CategoryItem";
import Typo from "../../components/shared/Typography/Typo";

function Headphones() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios("/data.json").then((res) => {
      setProducts(
        res.data
          .filter((product) => product.category === "headphones")
          .reverse()
      );
    });
  }, []);

  return (
    <div className="parent-wrapper-headphones">
      <div className="header-headphones">
        <Typo variant="h2">headphones</Typo>
      </div>
      <Container>
        {products && products.map((product) => <CategoryItem data={product} />)}
        <Categories />
        <About />
      </Container>
    </div>
  );
}

export default Headphones;

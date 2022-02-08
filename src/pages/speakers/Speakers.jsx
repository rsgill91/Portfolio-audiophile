import React, { useEffect, useState } from "react";
import "./Speakers.css";
import { Container } from "@mui/material";
import Categories from "../../components/categories/Categories";
import About from "../../components/about/About";
import CategoryItem from "../../components/categoryItem/CategoryItem";
import axios from "axios";
import Typo from "../../components/shared/Typography/Typo";

function Speakers() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios("/data.json").then((res) => {
      setProducts(
        res.data.filter((product) => product.category === "speakers").reverse()
      );
    });
  }, []);
  return (
    <div className="parent-wrapper-speakers">
      <div className="header-speakers">
        <Typo variant="h2">speakers</Typo>
      </div>
      <Container>
        {products && products.map((product) => <CategoryItem data={product} />)}
        <Categories />
        <About />
      </Container>
    </div>
  );
}

export default Speakers;

import "./Earphones.css";
import axios from "axios";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import About from "../../components/about/About";
import CategoryItem from "../../components/categoryItem/CategoryItem";
import Typo from "../../components/shared/Typography/Typo";

function Earphones() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios("/data.json").then((res) => {
      setProducts(
        res.data.filter((product) => product.category === "earphones").reverse()
      );
    });
  }, []);

  return (
    <div className="parent-wrapper-earphones">
      <div className="header-earphones">
        <Typo variant="h2">earphones</Typo>
      </div>
      <Container>
        {products && products.map((product) => <CategoryItem data={product} />)}
        <Categories />
        <About />
      </Container>
    </div>
  );
}

export default Earphones;

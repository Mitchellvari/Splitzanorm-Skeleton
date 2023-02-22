import ProductList from "./ProductList";
import React, { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    const product = async () => {
      const response = await fetch("http://localhost:5001/products");
      console.log(response.json());
    };
  });

  return <ProductList />;
};

export default Products;

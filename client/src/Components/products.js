import React, { useEffect, useState } from "react";
import ProductList from "./productList";
import formatAmount from "../services/formatAmount"

const Products = () => {

  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const product = async () => {
      const response = await fetch("http://localhost:5001/products");

      const data = await response.json()
      setProducts(data);


    };

    product();
  },[]);

  return (
    <div className="productGrid">
      {products.map((x) => {
        return (
          <ProductList
          key={x.id}
            name={x.name}
            description={x.description}
            price={formatAmount(x.price)}
            
          />
        );
      })}
    </div>
    )
};

export default Products;

import React, { useEffect, useState } from "react";
import ProductList from "./productList";
import formatAmount from "../services/formatAmount";
import SearchBar from "./searchBar";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const product = async () => {
      if (count === 0) {
        const response = await fetch("http://localhost:5001/products");

        const data = await response.json();
        setProducts(data);
        setAllProducts(data);
        setCount(1);
      }
    };
    console.log(searchProducts);
    product();

    const searchResults = allProducts.filter((product) =>
      searchProducts.includes(product.id)
    );
    console.log(searchResults);
    console.log(products);
    setProducts(searchResults);
  }, [searchProducts]);

  return (
    <>
      <SearchBar products={products} setSearchProducts={setSearchProducts} />
      <div className="productGrid">
        {products.map((x) => {
          return (
            <ProductList
              key={x.id}
              name={x.name}
              image={x.images[0]}
              description={x.description}
              price={formatAmount(x.price)}
              priceId={x.default_price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;

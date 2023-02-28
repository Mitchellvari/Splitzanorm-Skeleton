import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import formatAmount from "../services/formatAmount";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [selectValue, setSelectValue] = useState("Highest");
  useEffect(() => {
    const product = async () => {
      if (count === 0) {
        const response = await fetch("http://localhost:5001/products");

        const data = await response.json();
        const ascending = data.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        setProducts(ascending);
        setAllProducts(ascending);

        if (selectValue === "Lowest") {
          const descending = products.sort(
            (a, b) => Number(b.price) - Number(a.price)
          );
          setProducts(descending);
        }
      }
    };

    product();

    const searchResults = allProducts.filter((product) =>
      searchProducts.includes(product.id)
    );

    if (count === 1) {
      if (selectValue === "Lowest") {
        const descending = searchResults.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        setProducts(descending);
      }

      if (selectValue === "Highest") {
        const ascending = searchResults.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        setProducts(ascending);
      }
    }
  }, [searchProducts, selectValue]);

  return (
    <>
      <SearchBar
        products={products}
        setSearchProducts={setSearchProducts}
        setCount={setCount}
      />
      <Filter selectValue={selectValue} setSelectValue={setSelectValue} />
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

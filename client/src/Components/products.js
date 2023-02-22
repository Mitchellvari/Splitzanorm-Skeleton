import React, { useEffect, useState } from "react";
import ProductList from "./productList";
import formatAmount from "../services/formatAmount"

const Products = () => {
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const product = async () => {
      const response = await fetch("http://localhost:5001/products");

      const data = await response.json()
      setProducts(data);


    };

    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }

    product();
  },[]);

  return ( message ? (
      <Message message={message} />
    ) : (
    <div className="productGrid">
      {products.map((x) => {
        return (
          <ProductList
          key={x.product.id}
            name={x.product.name}
            image={x.product.images[0]}
            description={x.product.description}
            price={formatAmount(x.product.price)}
            priceId={x.product.default_price}
          />
        );
      })}
    </div>
    )
  );
};

export default Products;

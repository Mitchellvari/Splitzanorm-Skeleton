const productList = ({ name, description, price, image, priceId }) => {
  const submit = async () => {
    const res = await fetch("http://localhost:5001/create-checkout-session", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ priceId }),
    });

    const redirect = await res.json();
    window.location.href = redirect.url;
  };

  return (
    <div>
      <h1>{name}</h1>
      <img className="productImage" src={image} alt={name} />
      <h2 className="description">{description}</h2>
      <h2>Price: {price}</h2>

      <button onClick={submit}>Buy Now</button>
    </div>
  );
};

export default productList;

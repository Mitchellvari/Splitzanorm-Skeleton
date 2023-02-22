const productList = ({ name, description, price }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2 className="description">{description}</h2>
      <h2>Price: {price}</h2>

      <button>Buy Now</button>
    </div>
  );
};

export default productList;

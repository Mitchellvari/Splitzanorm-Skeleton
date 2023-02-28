import React, { useState } from "react";

const SearchBar = ({ setCount, setSearchProducts }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    const response = await fetch("http://localhost:5001/search", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ search: searchInput }),
    });

    const data = await response.json();

    const result = data.data.map((x) => x.id);
    setCount(1);
    setSearchProducts(result);
  };

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <button onClick={handleClick}>Search</button>
    </>
  );
};

export default SearchBar;

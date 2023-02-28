const Filter = ({ selectValue, setSelectValue }) => {
    const handleSelect = (e) => {
      console.log(e.target.value);
      setSelectValue(e.target.value);
    };
  
    return (
      <select className="selectBox" value={selectValue} onChange={handleSelect}>
        <option value="Highest">Price: Lowest - Highest</option>
        <option value="Lowest">Price: Highest - Lowest</option>
      </select>
    );
  };
  
  export default Filter;
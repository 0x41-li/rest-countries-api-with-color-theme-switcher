import React, { useContext, useState } from "react";

import searchIcon from "../assets/icons/search.svg";

// contexts
import CountriesContext from "../contexts/CountriesContext";

const SearchInput = () => {
  const { setSearchFilter, resetNumberShow } = useContext(CountriesContext);
  const [searchValue, setSearchValue] = useState("");

  const inputStyles = {
    backgroundImage: `url(${searchIcon})`,
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setSearchFilter(value);
    resetNumberShow(8);
  };

  return (
    <div className="search-input-box">
      <input
        style={inputStyles}
        className="search-input"
        type="text"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;

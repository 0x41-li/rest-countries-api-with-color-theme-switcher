import React, { useContext, useState } from "react";

import searchIcon from "../assets/icons/search.svg";

// contexts
import CountriesContext from "../contexts/CountriesContext";

const Search = () => {
  const { setSearchFilter, countriesData, countriesDataFiltered } =
    useContext(CountriesContext);
  const [searchValue, setSearchValue] = useState("");

  const inputStyles = {
    backgroundImage: `url(${searchIcon})`,
  };

  const countriesDataToWorkWith =
    countriesDataFiltered === "" ? countriesData : countriesDataFiltered;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setSearchFilter(value);
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

export default Search;

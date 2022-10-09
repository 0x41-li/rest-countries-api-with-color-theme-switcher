import React, { useContext, useState } from "react";

import searchIcon from "../assets/icons/search.svg";

// contexts
import CountriesContext from "../contexts/CountriesContext";

const Search = () => {
  const { setCountriesDataFiltered, countriesData } =
    useContext(CountriesContext);
  const [searchValue, setSearchValue] = useState("");

  const inputStyles = {
    backgroundImage: `url(${searchIcon})`,
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value !== "") {
      setCountriesDataFiltered(() => {
        return countriesData.filter((country) => {
          if (
            country.name.common.toLowerCase().startsWith(value.toLowerCase())
          ) {
            return true;
          }
        });
      });
    } else {
      setCountriesDataFiltered("");
    }
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

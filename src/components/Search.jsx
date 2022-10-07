import React, { useContext, useState } from "react";

import searchIcon from "../assets/icons/search.svg";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const inputStyles = {
    backgroundImage: `url(${searchIcon})`,
  };

  return (
    <div className="search-input-box">
      <input
        style={inputStyles}
        className="search-input"
        type="text"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;

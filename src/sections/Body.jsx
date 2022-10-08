import React, { useContext } from "react";

// contexts
import ThemeContext from "../contexts/ThemeContext";

// sections
import FilterAndSearch from "./FilterAndSearch";
import CountriesList from "./CountriesList";

const Body = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <main data-dark-theme={isDarkTheme}>
      <div className="container">
        <FilterAndSearch />
        <CountriesList />
      </div>
    </main>
  );
};

export default Body;
